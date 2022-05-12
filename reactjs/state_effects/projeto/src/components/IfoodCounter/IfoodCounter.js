 import React, {useState, useEffect} from 'react'
 
 export default function IfoodCounter() {
    const [value,setValue] = useState(1);

    function decrement(){
        if(value > 0){
            setValue(value-1)
        }
    }

    function increment(){
        setValue(value+1)
    }

    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.00 * value
    },[value])

   return (
     <div>
         <button onClick={decrement}>
             -
         </button>
         <p>
             {value}
         </p>
         <button onClick={increment}>
             +
         </button>

         <button id="moeda">
            12,00
         </button>
     </div>
   )
 }
 