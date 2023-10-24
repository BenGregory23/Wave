import { TILE_FOREST, tileWeights } from "../generator/config";

const Options = ({showOptions, setGrass, setWater, setForest, setRock}) => {

    if(!showOptions){
        return null;
    }
    return(

        <div className="absolute bottom-5 left-5 rounded-md flex flex-col justify-center items-center border-2 border-gray-800 bg-gray-800  w-1/3 h-36 p-3 py-5">
            
            <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-col m-2  w-1/2">
                <div className="flex flex-col  justify-end w-full">
                    <label className="text-white text-lg font-light  ">Grass</label>
                    <input type="range" className="accent-white" min="0" max="100" step="1" defaultValue={16}  onChange={(e)=>{setGrass(e.target.value)}}/>
                </div>
                <div className="flex flex-col  justify-end">
                    <label className="text-white text-lg  font-light  ">Water</label>
                    <input type="range" className="accent-white" min="0" max="100" step="1" defaultValue={6} onChange={(e)=>{
                     
                        setWater(e.target.value)}}/>
                </div>
                
            </div>

            <div className="flex flex-col m-2 w-1/2">
                <div className="flex flex-col  justify-end">
                    <label className="text-white text-lg font-light  ">Forest</label>
                    <input type="range" className="accent-white " min="0" max="100" step="1" defaultValue={4}  onChange={(e)=>{setForest(e.target.value)}}/>
                </div>
                <div className="flex flex-col  justify-end">
                    <label className="text-white text-lg font-light  ">Rock</label>
                    <input type="range" className="accent-white " min="0" max="100" step="1" defaultValue={4} onChange={(e)=>{setRock(e.target.value)}}/>
                </div>
                
            </div>

            </div>
            
        </div>
    )
}

export default Options