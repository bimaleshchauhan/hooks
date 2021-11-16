import {useState, useCallback} from 'react';

import Child from './child';

const CallBackApi = () =>{
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("hello")
    const datafuction = useCallback((name) =>{
        return data + " "+name
    },[data])
    return(
        <div>
            
            <Child datafuction={datafuction} />
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </div>
    )
}
export default CallBackApi;
