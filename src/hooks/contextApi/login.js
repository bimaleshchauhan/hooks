import {useContext} from 'react';

import {ApiContext} from './index';


const Login = () =>{
    const {setUsername} = useContext(ApiContext)
  return(
      <div>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} />
      </div>
  )
}
export default Login;