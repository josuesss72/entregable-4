import react from 'react'
import User from '../user/User'

const Table = ({users, deleteUser, setCaptureInfoUser, setShowForm, showForm }) => {
  return (
    <table className='table'>
      <thead className='head_table'>
        <tr className='header_table'>
          <th>Name</th>
          <th>Email</th>
          <th>Brithday</th>
          <th></th>
        </tr>
      </thead> 
      <tbody className='body_table'>
        {
          users?.map((user)=>{
            return(
              <User
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setCaptureInfoUser={setCaptureInfoUser}
                setShowForm={setShowForm}
                showForm={showForm}
              />
            )
          })
        }

      </tbody> 
    </table>
  ) 
}

export default Table
