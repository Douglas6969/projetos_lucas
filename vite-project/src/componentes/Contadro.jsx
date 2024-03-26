import { useState } from "react";

const Contador = () => {
    const [count,setCount] = useState(0);
    const [text, setText]= useState('')
    
    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {
        if(count > 0){
          setCount(count - 1)
        }
    }
    const showText = (event) =>{
        setText(event.target.value)
    }


    return(
        <main>
            Contador:{count}

            <div>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            </div>

            <div>
                Digite algo: 
                <input type="text" onChange={showText}></input>
              <div> O texto digitado é:{text}</div> 
           </div>
        </main>
    )
}

export default Contador;