import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch.js'
import Form from './components/form/Form.jsx'
import './components/form/Form.css'
import './components/user/User.css'
import Table from './components/table/Table'
import './components/table/Table.css'

function App() {

  const {users, getFetch, createUser, deleteUser, updateUser} = useFetch()
  const [showForm, setShowForm] = useState(false) 
  const [captureInfoUser, setCaptureInfoUser] = useState()
  


  useEffect(()=>{
    getFetch()
  },[])
  console.log(users)

  return ( 
  
    <div className="App">
      <div className='title'>
        <>
          <h1>Register Users</h1>
           
          {
            showForm?
              <div className='bg_modale'>
                <Form
                  createUser={createUser}
                  setShowForm={setShowForm}
                  showForm={showForm}
                  captureInfoUser={captureInfoUser}
                  updateUser={updateUser}
                  setCaptureInfoUser={setCaptureInfoUser}
                /> 
              </div>
            :
              <button className='btn_NwUser' onClick={()=> setShowForm(!showForm)}>New Register</button> 
          } 
        </>
        
      </div>  
       
      <Table
        users={users}
        deleteUser={deleteUser}
        setCaptureInfoUser={setCaptureInfoUser}
        setShowForm={setShowForm}
        showForm={showForm}
      />            

    </div>
  )
}

export default App
