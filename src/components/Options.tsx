import {Card, CardBody, Popover,PopoverTrigger, PopoverContent, CardFooter} from "@nextui-org/react";
import { Info } from "lucide-react";

interface OptionsProps {
    showOptions: boolean;
    setGrass: (value: number) => void;
    setWater: (value: number) => void;
    setForest: (value: number) => void;
    setRock: (value: number) => void;
}

const Options = ({showOptions, setGrass, setWater, setForest, setRock}: OptionsProps) => {

    if(!showOptions){
        return null;
    }
    return(
        
        // how to put a div to an absolute position in the middle of the screen vertically
        // https://stackoverflow.com/questions/8865458/how-do-i-center-an-element-horizontally-and-vertically-within-a-div-tag
        <Card className="absolute top-1/2 left-6 transform -translate-y-1/2  flex flex-col justify-center items-center   lg:w-48 h-max ">
            <CardBody className="w-full">
                
                    
                        <div className="flex flex-col  justify-end w-full my-1">
                            <label className="text-gray-800 text-lg font-light  ">Grass</label>
                            <input type="range" className="accent-gray-800" min="0" max="100" step="1" defaultValue={16}  onChange={(e)=>{setGrass(Number(e.target.value))}}/>
                        </div>
                        <div className="flex flex-col  justify-end my-1">
                            <label className="text-gray-800 text-lg  font-light  ">Water</label>
                            <input type="range" className="accent-gray-800" min="0" max="100" step="1" defaultValue={6} onChange={(e)=>{
                            setWater(Number(e.target.value))}}/>
                        </div>
                
                 

                    
                        <div className="flex flex-col  justify-end my-1">
                            <label className="text-gray-800 text-lg font-light  ">Forest</label>
                            <input type="range" className="accent-gray-800 " min="0" max="100" step="1" defaultValue={4}  onChange={(e)=>{setForest(Number(e.target.value))}}/>
                        </div>
                        <div className="flex flex-col  justify-end my-1">
                            <label className="text-gray-800 text-lg font-light  ">Rock</label>
                            <input type="range" className="accent-gray-800 " min="0" max="100" step="1" defaultValue={4} onChange={(e)=>{setRock(Number(e.target.value))}}/>
                        </div>
                    
                    

         
            
            </CardBody>
            <CardFooter>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Info/>
                    </PopoverTrigger>
                    <PopoverContent>
                        <p className="p-2">These sliders control the amount of each tile that will be generated. <br/> The higher the value, the more of that tile will be generated.</p>
                    </PopoverContent>
                </Popover>
            </CardFooter>
     
            
         
        </Card>
            
            
        
    )
}

export default Options