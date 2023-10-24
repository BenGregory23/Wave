

const Controls = ({start, reset, setShowOptions, showOptions }) => {

  

    return (
        <div className="flex justify-center flex-col h-32 p-5 w-full "> 
            <div className="flex justify-center flex-row ">
                <button className=" max-h-12 h-12 w-32 bg-gray-800 px-4 py-2 m-2 rounded-md text-white hover:bg-gray-600  active:scale-95" 
                onClick={()=>{start();}}
                >
                    Generate ✨
                </button>
            
                <button className=" max-h-12 h-12 w-32 bg-gray-800 px-4 py-2 m-2 rounded-md text-white hover:bg-gray-600  active:scale-95"
                onClick={()=>{reset();}}>
                    Clear 🧹  
                </button>
            </div>
            

            <button className=" underline text-gray-800 hover:text-gray-600 active:scale-95" onClick={()=>{setShowOptions(!showOptions);}}>
                Options 🚀
            </button>
            
        </div>
    )

}

export default Controls