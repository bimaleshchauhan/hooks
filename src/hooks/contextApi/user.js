import {useContext} from 'react';

import {ApiContext} from './index';

const User = () =>{
const {username} = useContext(ApiContext)
  return(
      <div>
          <label>{username}</label>
      </div>
  )
}
export default User;