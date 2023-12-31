import World from "./World";
import { TILESIZE, WORLD_X, WORLD_Y, TileTypeConstantToNumber, tileSprites, TILE_FORESTN} from "../config";

export default class DrawWorld{


    private world : World;
    private spriteSheet : HTMLImageElement = new Image();

    constructor(world : World, context : CanvasRenderingContext2D){
        this.world = world;
        // set font 
        context.font = "14px Sans-serif";
        // set text color
        context.fillStyle = "white";

        // black background
    
        context.fillStyle = "black";
        context.fillRect(0, 0, WORLD_X * TILESIZE, WORLD_Y * TILESIZE);

        // set sprite sheet
        this.spriteSheet.src = "../../assets/tileset.png";
    }

 
    public update(context : CanvasRenderingContext2D){
        
       

        for(let y = 0; y < WORLD_Y; y++){
            for(let x = 0; x < WORLD_X; x++){
            
               

                // clear the tile
                context.fillStyle = "#303033";
                context.fillRect(x * 32, y * 32, 32, 32);
                const tileEntropy = this.world.getEntropy(x, y);
                const tileType = this.world.getType(x, y);

                
                if(tileEntropy > 0){
                 
                    if(tileEntropy == 35){
                        context.fillStyle = "#454545";
                        context.fillText(tileEntropy.toString(), x * TILESIZE, y * TILESIZE + TILESIZE, TILESIZE);
                    }else if(tileEntropy >= 10){ 
                        context.fillStyle = "grey";
                        context.fillText(tileEntropy.toString(), x * TILESIZE, y * TILESIZE + TILESIZE, TILESIZE);
                    }
                    else if(tileEntropy < 10){
                       
                            context.fillStyle = "white";
                            context.fillText(" " + tileEntropy.toString(), x * TILESIZE, y * 16 + TILESIZE, 16);
                        
                    }
                }
                else if(TileTypeConstantToNumber(tileType.tileType) > TILE_FORESTN){ // Forest needs a grass tile to be drawn first
                   
                    const pos = this.getTileSprite({ tileType: 'TILE_GRASS' });
                    
                    const pos2 = this.getTileSprite(tileType);
                    if (pos === undefined || pos2 === undefined) {
                        console.error('getTileSprite returned undefined for tileType:', tileType);
                    } else {
                        context.drawImage(this.spriteSheet, pos[0], pos[1], 16, 16, x * TILESIZE, y * TILESIZE, TILESIZE, TILESIZE);
                        context.drawImage(this.spriteSheet, pos2[0], pos2[1], 16, 16, x * TILESIZE, y * TILESIZE, TILESIZE, TILESIZE);
                    }
                }
                // so if tile has a type
                else if(TileTypeConstantToNumber(Object.keys(tileType)[0]) < TILE_FORESTN){
                    const pos = this.getTileSprite(tileType);
                    if (pos === undefined) {
                        console.error('getTileSprite returned undefined for tileType:', tileType);
                    } else {
                        context.drawImage(this.spriteSheet, pos[0], pos[1], 16, 16, x * TILESIZE, y * TILESIZE, TILESIZE, TILESIZE);

                    }
                }
               

                
                if(tileEntropy == 0){
                    // and tile possiblities are 0
                    if(this.world.getTile(x,y).getPossibilities().length == 0){

                    context.fillStyle = "red";
                    context.fillText(" *", x * 32, y * 32 + 30);
                    }
                }
            }
        }
    }


    public reset(context : CanvasRenderingContext2D){
        // black background
        context.fillStyle = "black";
        context.fillRect(0, 0, WORLD_X * TILESIZE, WORLD_Y * TILESIZE);
        this.world = new World(WORLD_X, WORLD_Y);
        this.update(context);


    }

    public getTileSprite(tileType:{tileType:string}): number[] {
 
        
        const tileTypeConstant = TileTypeConstantToNumber(tileType.tileType);
       
        const sprite = tileSprites.find((tileSprite) => tileSprite.key === tileTypeConstant);
        if (sprite) {
            return sprite.value;
        } else {
            console.error('No sprite found for tileType:', tileType);
            return [16, 0]; // Default value
        }
    }
    
}