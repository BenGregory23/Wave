import Tile from "./Tile";
import Stack from "./Stack";
import { NORTH, EAST,SOUTH,WEST, tileRules, ModifyTileWeights} from "../config";


export default class World{

    private cols : number;
    private rows : number;
    private tiles : Tile[][] = [];

    constructor(sizeX: number, sizeY: number){
        this.cols = sizeX;
        this.rows = sizeY;

        
        for(let i = 0; i < sizeX; i++){
            this.tiles.push([]);
            for(let j = 0; j < sizeY; j++){
                this.tiles[i].push(new Tile(i,j));
            }
        }

        for(let y = 0; y < sizeY; y++){
            for(let z = 0; z < sizeX; z++){
                if(y > 0){
                    this.tiles[z][y].addNeighbor(this.tiles[z][y-1], NORTH);
                }
                if(z < sizeX - 1){
                    this.tiles[z][y].addNeighbor(this.tiles[z+1][y], EAST);
                }
                if(y < sizeY - 1){
                    this.tiles[z][y].addNeighbor(this.tiles[z][y+1], SOUTH);
                }
                if(z > 0){
                    this.tiles[z][y].addNeighbor(this.tiles[z-1][y], WEST);
                }
            }
        }    

        
    }

    public getEntropy(x:number,y:number){
        return this.tiles[x][y].getEntropy()
    }

    public getType(x:number, y:number) {
        const tileType = this.tiles[x][y].getPossibilities()[0];
        if (typeof tileType === 'object') {
            return tileType;
        } else {
            return { tileType };
        }
    }

    public getLowestEntropy(){
        let lowestEntropy =  Object.keys(tileRules).length
      
        for(let i = 0; i < this.cols; i++){
            for(let j = 0; j < this.rows; j++){
                if(this.tiles[i][j].getEntropy() < lowestEntropy){
                    lowestEntropy = this.tiles[i][j].getEntropy()
                }
            }
        }

        return lowestEntropy
    }

    public getTiles(){
        return this.tiles
    }

    public getTile(x:number, y:number){
        return this.tiles[x][y]
    }

    public getTilesLowestEntropy(){
        let lowestEntropy =  Object.keys(tileRules).length
        let lowestEntropyTiles : Tile[] = []

        for(let x = 0; x < this.cols; x++){
            for(let y = 0; y < this.rows; y++){
                const tileEntropy = this.tiles[x][y].getEntropy()
                if(tileEntropy > 0){
                    if(tileEntropy < lowestEntropy){
                        lowestEntropyTiles = []
                        lowestEntropy = tileEntropy;
                    }
                    if(lowestEntropy == tileEntropy){
                        lowestEntropyTiles.push(this.tiles[x][y])
                    }
                }
            }
        }

        return lowestEntropyTiles
    }

    public waveFunctionCollapse(){
        const tilesLowestEntropy = this.getTilesLowestEntropy()

        if(tilesLowestEntropy.length == 0){
            
            return true
        }

        const tileToCollapse =  tilesLowestEntropy[Math.floor(Math.random() * tilesLowestEntropy.length)]
    
        tileToCollapse.collapse()

        const stack = new Stack<Tile>()
        stack.push(tileToCollapse)

        while(!stack.isEmpty()){
          
           
        
            const tile = stack.pop()
            if(tile == undefined){
                break
            }
            const tilePossibilities = tile?.getPossibilities()
           
            const directions = tile?.getDirections()
            

            for(let i = 0; i<directions.length; i++){
                const neighbor = tile?.getNeighbor(directions[i])
                if(neighbor == undefined){
                    continue
                }
                if(neighbor.getEntropy() == 0){
                    continue
                }
                
              
                const reduced = neighbor.constrain(tilePossibilities, directions[i])
               

                if(reduced){
                    stack.push(neighbor)
                }       
            }
        }
        return false
    }

   

    public setForestWeight(increase: number){
        ModifyTileWeights("TILE_FOREST", increase)
        ModifyTileWeights("TILE_FORESTN", increase)
        ModifyTileWeights("TILE_FORESTE", increase)
        ModifyTileWeights("TILE_FORESTS", increase)
        ModifyTileWeights("TILE_FORESTW", increase)
        ModifyTileWeights("TILE_FORESTNE", increase)
        ModifyTileWeights("TILE_FORESTSE", increase)
        ModifyTileWeights("TILE_FORESTSW", increase)
        ModifyTileWeights("TILE_FORESTNW", increase)
        ModifyTileWeights("TILE_FORESTNE2", increase)
        ModifyTileWeights("TILE_FORESTSE2", increase)
        ModifyTileWeights("TILE_FORESTSW2", increase)

    }

    public setWaterWeight(increase: number){
      
        ModifyTileWeights("TILE_WATER", increase)
        if(increase > 80) {
            ModifyTileWeights("TILE_COAST", 0)
          
        }
    }

    public setGrassWeight(increase: number){
        ModifyTileWeights("TILE_GRASS", increase)
    }

    public setRockWeight(increase: number){
        ModifyTileWeights("TILE_ROCKN", increase)
        ModifyTileWeights("TILE_ROCKE", increase)
        ModifyTileWeights("TILE_ROCKS", increase)
        ModifyTileWeights("TILE_ROCKW", increase)
        ModifyTileWeights("TILE_ROCKNE", increase)
        ModifyTileWeights("TILE_ROCKSE", increase)
        ModifyTileWeights("TILE_ROCKSW", increase)
        ModifyTileWeights("TILE_ROCKNW", increase)


    }

    public isFinished(): boolean{
        for(let i = 0; i < this.cols; i++){
            for(let j = 0; j < this.rows; j++){
                if(this.tiles[i][j].getEntropy() > 0){
                    return false
                }
            }
        }

        return true
    }
}

