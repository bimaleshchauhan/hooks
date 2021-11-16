import {useState, forwardRef, useImperativeHandle} from 'react';

const Child = forwardRef((props, ref) =>{
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref,()=>({
        toggleData(){
            setToggle(!toggle)
        }
    }))
     return(
        <>
        {toggle && <div>toggle check</div> }
        <button>
            Child Button
        </button>
        </>
    )
})

export default Child;