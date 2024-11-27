import React from 'react'
import Addbutton from './component/Addbutton'
import EmpTable from './component/EmpTable'
import './bootstrap.min.css';

const App = () => {
  return (
    <>
     <div className=' d-flex justify-content-center flex-column'>
     <Addbutton/>
     <EmpTable/>
     </div>
    </>
  )
}

export default App