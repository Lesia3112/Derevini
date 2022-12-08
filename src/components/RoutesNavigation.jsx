import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import Menu from './pages/menu/Menu'

import Burgers from './pages/menu/burgers/Burgers'

const RoutesNavigation = () => {
  return (
   
    <Routes>
      <Route path="/main" element={<Main/>} />
      <Route path="/menu/*" element={<Menu />}/>
      {/* <Route path="/menu/burgers" element={<Burgers />} /> */}
        {/* <Route path="/menu/role" element={<Role />} /> */}
      {/* </Route> */}
      {/* <Route path="/contacts" element={<Contacts />} /> */}
    </Routes>
  
  )
}

export default RoutesNavigation