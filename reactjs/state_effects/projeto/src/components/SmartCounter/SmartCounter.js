import {useState} from 'react';

function SmartCounter(){
    const [quant,increment] = useState(1);

    return(
        <>
            <h1>{quant}</h1>
            <button onClick={() => increment(quant + 1)}>+</button>
        </>
    )
}

export default SmartCounter;    