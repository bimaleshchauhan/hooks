import {useState,useEffect} from 'react';

const useEffectFuction = () =>{
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const resizeHandler = () =>setWidth(window.innerWidth)
        window.addEventListener("resize", resizeHandler);
        return () =>{             // ummount 
            window.removeEventListener("resize", resizeHandler)
        }
    })

    return(
        <section>
           <div label="width">
              {width}
           </div>
        </section>
    )
}

export default useEffectFuction