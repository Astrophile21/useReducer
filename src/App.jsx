import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let initialState=0;

const reducer=(count,action)=>{
     switch(action){
      case "Increment":
      return count+1

      case "Decrement":
        return count-1 
      
        case "reset":
          return initialState
     }
}
function App() {
  const [count, dispatch] = useReducer(reducer,initialState)


  
  return (
    <>
      <div>
    <h1>{count}</h1>
    <button onClick={()=>dispatch("Increment")}>Increment</button>
    <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    <button onClick={()=>dispatch("reset")}>Reset the value</button>

        
      </div>
    </>
  )
}

export default App
