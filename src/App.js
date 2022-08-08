import {useState} from "react";
import Loading from "./Loading";
import Loaded from "./Loaded";
import "./App.css";


function App() {
  // const isLoaded = true
  const [isLoaded, setIsLoaded] = useState(false)
  const [objectExample, setObjectExample] = useState({name: "don't need"}) //don't need this
  const [username, setUserName] = useState("")
  const numbers = [1,2,5,4,3,6,7,8,9]
  //const ternary = isLoaded ? 'Yes' : 'No'

  return (
    <div className="App">
      <h1>Username is: {username !== "" ? username : "Guest"} </h1>
      <h1>Username is: {username || "Guest"} </h1>
      <h1>
        I have {numbers.length} numbers:
      </h1>
      <h1>{
          isLoaded && 
          <>
          {numbers.map((num) => {
            return num + " & "
          })}



          
          
          This is really loaded
          <Loaded />
          </>
        
          
}</h1>


      <button onClick={() => {
        console.log("button clicked")
        setIsLoaded(!isLoaded)
      }}>Change Loaded</button>
      <h1> {isLoaded ? 'Yes' : 'No' }</h1>
      { isLoaded
      ?
      <Loaded />
      :
      <Loading />
      }
      <h1> is loaded = {String(isLoaded)} </h1>
      <h1> {String(objectExample.name)} </h1>
      <h1>Loading</h1>

    </div>
  );
}

export default App;
