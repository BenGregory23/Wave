import { useEffect, useState } from "react";
import Controls from "./Controls";
import { WORLD_X, WORLD_Y } from "../generator/config";
import World from "../generator/classes/World";
import DrawWorld from "../generator/classes/DrawWorld";




function game(context : CanvasRenderingContext2D){
    const world = new World(WORLD_X, WORLD_Y);
    const drawWorld = new DrawWorld(world, context);


    drawWorld.update(context);
    



        // add a window event listener to listen for key presses
        window.addEventListener("keydown", (event) => {
            //world.waveFunctionCollapse();
            //drawWorld.update(context);
        });
  
    
    
    return {
        drawWorld,
        world,
    }
   

}








const MapCanvas = () => {
 
    const [drawWorld, setDrawWorld] = useState<DrawWorld>();
    const [world, setWorld] = useState<World>();
    const [changeMe, setChangeMe] = useState<number>(0);
    

   

    useEffect(() => {
        
        const canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Could not get context");
        }
        const classes = game(ctx);
        setDrawWorld(classes.drawWorld);
        setWorld(classes.world);
    
    },[changeMe])


    const reset = () => {
        const canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Could not get context");
        }
        drawWorld?.reset(context);
        setChangeMe(changeMe + 1);
    }

    const start = async () => {
        const canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Could not get context");
        }
        drawWorld?.update(context);
        world?.waveFunctionCollapse();
        drawWorld?.update(context);


        // loop 10 times 
        for(let i = 0; i < 50; i++){
            await new Promise(r => setTimeout(r, 0));
            world?.waveFunctionCollapse();
            drawWorld?.update(context);
        }

       

    }

    const generate = () => {
       // to do if needed

           
    }



    
   


    return (
        <div className="  ">
            <div className="flex justify-center items-center">
            <canvas className="border-2 border-gray-800 " id="mapCanvas" width="960" height="544">

            </canvas>
            </div>
          

            <Controls reset={reset} start={start} generate={generate}/>
        </div>

    )   
}


export default MapCanvas;