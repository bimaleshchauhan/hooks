import {useEffect} from 'react'
const Child = ({datafuction}) =>{
    console.log("child")
    useEffect(()=>{
        console.log("function called")
    }, [datafuction])
    return(
        <div>
            child - {datafuction("bimalesh")}
        </div>
    )
}
export default Child;