import { Button } from "@nextui-org/react";

interface ControlsProps {
    start: () => void;
    reset: () => void;
    setShowOptions: (show: boolean) => void;
    showOptions: boolean;
  }

const Controls = ({start, reset, setShowOptions, showOptions }: ControlsProps) => {

  

    return (
        <div className="flex justify-center flex-col h-32 p-5 w-full "> 
            <div className="flex justify-center flex-row ">

            <Button
                
                className="bg-gray-800 px-4 py2 hover:bg-gray-600 w-32 m-2"
                radius="sm"
                size="lg"
                color="primary"
               
                variant="solid"
                onClick={()=>{start();}}
                >
                Generate ✨
                </Button>

                <Button
                className="bg-gray-800 px-4 py2 hover:bg-gray-600 w-32 m-2"
                radius="sm"
                size="lg"
                color="primary"
                variant="solid"
                onClick={()=>{reset();}}
                >
                Clear  🧹
                </Button>

               

              
            </div>
            
            {
                window.innerWidth < 640 ?
                <></> :
                <button className=" underline text-gray-800 hover:text-gray-600 active:scale-95" onClick={()=>{setShowOptions(!showOptions);}}>
                    Options 🚀
                </button>

            }
            
            
        </div>
    )

}

export default Controls