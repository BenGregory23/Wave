import { useEffect, useState } from "react";
import Controls from "./Controls";
import { WORLD_X, WORLD_Y } from "../generator/config";
import World from "../generator/classes/World";
import DrawWorld from "../generator/classes/DrawWorld";
import Options from "./Options";




function game(context : CanvasRenderingContext2D){
    const world = new World(WORLD_X, WORLD_Y);
    const drawWorld = new DrawWorld(world, context);

    drawWorld.update(context);
    return {
        drawWorld,
        world,
    }
   

}








const MapCanvas = () => {
 
    const [drawWorld, setDrawWorld] = useState<DrawWorld>();
    const [world, setWorld] = useState<World>();
    const [changeMe, setChangeMe] = useState<number>(0);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [grass, setGrass] = useState<number>(0);
    const [water, setWater] = useState<number>(0);
    const [forest, setForest] = useState<number>(0);
    const [rock, setRock] = useState<number>(0);
    const [runnning, setRunning] = useState<boolean>(false);
    

   

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

    useEffect(() => {
        if(world){
            world.setGrassWeight(grass);
        }
    },[grass])

    useEffect(() => {
        
        if(world){
            world.setWaterWeight(water);
        }
    },[water])

    useEffect(() => {
        
        if(world){
            world.setForestWeight(forest);
        }
    },[forest])


    useEffect(() => {
        
        if(world){
            world.setRockWeight(rock);
        }
    },[rock])   

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
        if(runnning){
            return;
        }
        const canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Could not get context");
        }
        drawWorld?.update(context);
        world?.waveFunctionCollapse();
        drawWorld?.update(context);

        const loops = WORLD_X * WORLD_Y;
        setRunning(true);
        for(let i = 0; i < loops; i++){

            await new Promise(r => setTimeout(r, 0));
            
            world?.waveFunctionCollapse();
            drawWorld?.update(context);
        }
        setRunning(false);

        
    }

    //if mobile device
    if(window.innerWidth < 640){
     
        return (
            <div className="h-full  flex flex-col align-middle justify-center px-2">
                     
                <canvas className="border-2 border-gray-800" id="mapCanvas" width="300" height="400" >
                </canvas>      
                <Controls reset={reset} start={start} setShowOptions={setShowOptions} showOptions={showOptions}/>
              
            </div>
    
        )   
    }


  

    
   


    return (
        <div className="h-full">
            <div className="flex justify-center items-center">
            <canvas className="border-2 border-gray-800 " id="mapCanvas" width="960" height="544">
            </canvas>
            </div>
          
            <Options showOptions={showOptions} setGrass={setGrass} setWater={setWater} setForest={setForest} setRock={setRock}/>
            <Controls reset={reset} start={start} setShowOptions={setShowOptions} showOptions={showOptions}/>
        </div>

    )   
}


export default MapCanvas;