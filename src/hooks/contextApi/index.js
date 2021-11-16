import {useState, createContext} from 'react';
import User from './user';
import Login from './login';

export const ApiContext = createContext(null)
const ContextApi = () =>{
    const [username, setUsername] = useState(null)
  return(
      <ApiContext.Provider value={{username, setUsername}}>
          <div><Login  /></div>
          <div><User /></div>
      </ApiContext.Provider>
  )
}
export default ContextApi;