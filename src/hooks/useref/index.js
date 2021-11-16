
import { useRef } from "react";
import Child from './child'

const Parent =() =>{
    const refHander = useRef(null);
    const buttonRef = useRef(null)
    const handleSubmit =() =>{
        console.log(refHander.current.value)
    }
    return(
        <>
        <div>
            <input type="text" ref={refHander}  /> 
            <button onClick={handleSubmit}>click to action on inputbox</button>
        </div>
        <div>
           <button onClick={()=>{buttonRef.current.toggleData()}}>Parent Button</button>
           <Child ref={buttonRef} />
        </div>
        </>
    )
}
export default Parent;