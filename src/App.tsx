import Header from "./components/Header"
import MapCanvas from "./components/MapCanvas"
import Controls from "./components/Controls"
import { NextUIProvider } from "@nextui-org/react"


function App() {


  return (
    <>
    <NextUIProvider>
      <Header />
      <MapCanvas/>
    </NextUIProvider>
   
 
      
    </>
  )
}

export default App
