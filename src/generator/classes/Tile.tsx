import { tileRules, tileWeights, NORTH, EAST,SOUTH,WEST } from "../config";
import { randomChoice } from "../Random";


export default class Tile {

    private x: number;
    private y: number;
    private entropy: number;
    private neighbors: Tile[] = [];
    private directions: number[] = []
    private possibilities : string[] = [];

    constructor( x: number, y: number) {
      
        this.x = x;
        this.y = y;
        this.possibilities = Object.keys(tileRules);   
        this.entropy = this.possibilities.length;     
    }

    public addNeighbor(neighbor: Tile, direction:number) {

        // if neighbor is already in the list of neighbors, don't add it again
        if (this.neighbors.includes(neighbor)) {
            return;
        }
        this.neighbors.push(neighbor);
        this.directions.push(direction);
    }

    public getNeighbor(direction: number) : Tile {
        if (this.directions.indexOf(direction) === -1) {
            console.error('Tile does not have a neighbor in direction ' + direction);
            throw new Error('Tile does not have a neighbor in direction ' + direction);
          
        }
       return this.neighbors[this.directions.indexOf(direction)];
    }

    public getPossibilities() {
        return this.possibilities;
    }

    public getDirections() {
        return this.directions;
    }

    public getEntropy(){
        return this.entropy;
    }

   
   
    /**
     * Reduces the number of possibilities for this tile to a single random choice, based on the weights of each possibility.
     * Sets the `possibilities` array to contain only the randomly chosen possibility.
     * Sets the `entropy` value to 0.
     */
    public collapse() {
        const weights : number[] = [];
        this.possibilities.forEach(possibility => {
            weights.push(tileWeights[possibility]);
        });
        // use randomChoice from Random.tsx to get a random choice from the possibilities array
        
        this.possibilities = [randomChoice(this.possibilities, weights)];  
        this.entropy = 0;
    }
    
    

    public constrain(neighbourPossibilities: string[], direction: number): boolean {
        let reduced = false;

        if (this.entropy > 0) {
        
            // Possible connectors for this tile
            const connectors = new Set<number>();

            // Check opposite side
            let opposite: number;
            switch (direction) {
                case NORTH:
                    opposite = SOUTH;
                    break;
                case EAST:
                    opposite = WEST;
                    break;
                case SOUTH:
                    opposite = NORTH;
                    break;
                case WEST:
                    opposite = EAST;
                    break;
            }

           
            console.log("I am ", this.x,this.y, "my tileRules are: ",this.possibilities)
            console.log("neighbourPossibilities: ",neighbourPossibilities)
            

            this.possibilities.forEach(possibility => {
                const possibleNeighbors = tileRules[possibility];
                neighbourPossibilities.forEach(neighbourPossibility => {
                    if(tileRules[neighbourPossibility][direction] == undefined){
                        return
                    }
                    if(possibleNeighbors.includes(tileRules[neighbourPossibility][direction])){
                     
                        connectors.add(tileRules[neighbourPossibility][direction]);
                    }                    
                });
            });

            this.possibilities = this.possibilities.filter(possibility => {
                const neighbourRules = tileRules[possibility];
                const neighbourRuleNumber = neighbourRules ? neighbourRules[opposite] : undefined;
             
                if (neighbourRuleNumber === undefined || !connectors.has(neighbourRuleNumber)) {
                    reduced = true;
                    return false;
                }
                return true;
            });

            
            this.entropy = this.possibilities.length;


            console.log("AFTER filtering possibilities: ",this.possibilities)
        }

        return reduced;
    }
    
}

