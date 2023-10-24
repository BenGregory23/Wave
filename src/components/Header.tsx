import { useEffect } from "react";
import Tile from "../generator/classes/Tile";

const Header = () => {

    
    useEffect(() => {
        const tile = new Tile(0,0);
        
        tile.collapse();
        console.log(tile.constrain([1,2,3,4], 1));
    })

    return (
        <div className="p-5 h-32  flex justify-center items-center">
            <h1 className="text-center text-4xl font-bold text-gray-800">Map Generator 🏗️</h1>
        </div>
    )

}

export default Header