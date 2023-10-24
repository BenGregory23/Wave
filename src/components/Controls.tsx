

const Controls = ({start, reset , generate}) => {

  

    return (
        <div className="flex justify-center flex-row h-32 p-5">
            <button className=" max-h-12 w-32 bg-gray-800 px-4 py-2 m-2 rounded-md text-white hover:bg-gray-600  active:scale-95" onClick={()=>{
               start();
            }}>
                Generate ✨
                
            </button>
         
            <button className=" max-h-12 w-32 bg-gray-800 px-4 py-2 m-2 rounded-md text-white hover:bg-gray-600  active:scale-95"
            onClick={()=>{
                reset();
            }}
            >
                Reset</button>
            
        </div>
    )

}

export default Controls