import Header from "./components/Header"
import MapCanvas from "./components/MapCanvas"
import { NextUIProvider } from "@nextui-org/react"
import { useEffect } from "react"


function App() {

  useEffect(() => {
    fetch("https://api.ipify.org/")
    .then(res => {
      fetch("https://radar-my-apps-336125652a2e.herokuapp.com/?source=Wave&ip=" + res, {
        method: "POST",
      }).then(res => console.log(res))
    })
  }, [])


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
