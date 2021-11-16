import {useState, useEffect, useMemo} from 'react'

const MenoFunction = () => {
    const [data,setData] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() =>{
        fetch("https://reqres.in/api/users")
        .then(res=>res.json())
        .then(result=>{
            setData(result.data)
            console.log(result.data)
        })
    },[])
   const findLongName = (data) =>{
      if(!data) return null;
      let longname =""
      data.forEach(element => {
          let currentname = element.first_name;
          if(currentname.length>longname.length){
              longname = currentname;
          }
         
      });
      return longname;
   }
   const getlongName = useMemo(() =>
    findLongName(data)
   ,[data])
    return(
        <div>
           {getlongName}
        </div>
    )
}

export default MenoFunction;