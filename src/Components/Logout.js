import React from 'react'
import { encryptStorage } from '../utils/encryptStorage'

function Logout() {
    React.useEffect(() => {
      encryptStorage.removeItem('user_clicktabweb');
      window.location.replace("/");
    }, [])
    
  return (
    <div>Logout</div>
  )
}

export default Logout