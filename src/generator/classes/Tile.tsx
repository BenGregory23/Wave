import { tileRules, tileWeights, NORTH, EAST,SOUTH,WEST, TileTypeConstantToNumber } from "../config";
import { randomChoice } from "../Random";


export default class Tile {

    private x: number;
    private y: number;
    private entropy: number;
    private neighbors: Tile[] = [];
    private directions: number[] = []
    private possibilities : string[] = [];

    constructor( x: number, y: number) {
        this.entropy = 35;
        this.x = x;
        this.y = y;
        this.possibilities = Object.keys(tileRules);        
    }

    public addNeighbor(neighbor: Tile, direction:number) {
        this.neighbors.push(neighbor);
        this.directions.push(direction);
    }

    public getNeighbor(direction: number) : Tile {
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
    
    public constrainOLD(neighbourPossibilities: string[], direction: number): boolean {
        
        let reduced = false;
       
        if (this.entropy > 0) { 
            console.log(TileTypeConstantToNumber(neighbourPossibilities[0]))
            console.log("I am " , this.x, this.y, "and I have ", this.entropy, "possibilities" , "and my neighbour has ", neighbourPossibilities.length, "possibilities")
            // Possible connectors for this tile
            const connectors = new Set();
    
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

            
            this.possibilities.forEach(possibility => {
                const possibleNeighbors = tileRules[possibility];
                
                neighbourPossibilities.forEach(neighbourPossibility => {
                    //console.log("neighbour possibility", TileTypeConstantToNumber(neighbourPossibility), "possible neighbours", possibleNeighbors)
                    const rulesForNeighbourPossibility = tileRules[neighbourPossibility];
                    console.log("rules for neighbour possibility", rulesForNeighbourPossibility)
                    if (possibleNeighbors && possibleNeighbors.includes(TileTypeConstantToNumber(neighbourPossibility))) {
                        connectors.add(neighbourPossibility);
                    }
                });
            });
            

           
            
            this.possibilities = this.possibilities.filter(possibility => {
               
                const neighbourRules = tileRules[possibility];
                if (!neighbourRules || !connectors.has(neighbourRules[opposite])) {
                    reduced = true;
                    return false;
                }
                return true;
            });
            
            this.entropy = this.possibilities.length;
            console.log("I am", this.x, this.y, "and I have", this.entropy, "possibilities left");
        }
        return reduced;
    }


    public constrain(neighbourPossibilities: string[], direction: number): boolean {
        let reduced = false;
    
        if (this.entropy > 0) {
            console.log("I am " , this.x, this.y, "and I have ", this.entropy, "possibilities" , "and my neighbour has ", neighbourPossibilities.length, "possibilities");
    
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
    
            this.possibilities.forEach(possibility => {
                const possibleNeighbors = tileRules[possibility];
                //console.log("possible neigbhour with direction",possibleNeighbors[direction])
          


                neighbourPossibilities.forEach(neighbourPossibility => {
                    console.log("neighbour possibility", neighbourPossibility);
                    console.log("tileRules for possibility", tileRules[neighbourPossibility]);
                    console.log("possible neighbour for tilerule with direction", tileRules[neighbourPossibility][direction]);

                    if(tileRules[neighbourPossibility][direction] == undefined){
                        return
                    }

                    console.log("possible neighbours", possibleNeighbors);

                    if(possibleNeighbors.includes(tileRules[neighbourPossibility][direction])){
                        console.log("adding connector", tileRules[neighbourPossibility][direction]);
                        connectors.add(tileRules[neighbourPossibility][direction]);
                    }                    
                });
            });

            // filter out possibilities that don't have a connector on the opposite side
            
            
    
            this.possibilities = this.possibilities.filter(possibility => {
                //console.log("possibility", possibility);

                const neighbourRules = tileRules[possibility];
                //console.log("neighbour rules", neighbourRules);
                const neighbourRuleNumber = neighbourRules ? neighbourRules[opposite] : undefined;
                if (neighbourRuleNumber === undefined || !connectors.has(neighbourRuleNumber)) {
                    reduced = true;
                    return false;
                }
                return true;
            });
    
            this.entropy = this.possibilities.length;
            console.log("I am", this.x, this.y, "and I have", this.entropy, "possibilities left");
        }
        return reduced;
    }
    

    
    
}

