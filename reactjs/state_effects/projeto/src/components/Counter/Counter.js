function Counter(){

    let quant = 10;

    function increment(){
        quant = quant + 1;
        document.getElementById("counter-box").innerHTML = quant;
        console.log(quant);
    }
    function decrement(){
        quant = quant - 1;
        document.getElementById("counter-box").innerHTML = quant;

    }
    return(
        <>
            <h1 id="counter-box">{quant}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter