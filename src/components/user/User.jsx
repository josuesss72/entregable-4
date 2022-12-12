

import react from 'react'
import Swal from 'sweetalert2'

const User = ({user, deleteUser, setCaptureInfoUser, setShowForm, showForm }) => {
  
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete record!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(user.id)
      }
    })
  }
  const handleEdit = () => {
    setCaptureInfoUser(user)
    setShowForm(!showForm) 
  }

  return(
    <tr> 
      <td>{user.first_name} {user.last_name}</td>
      <td className='email_user'>{user.email}</td>
      <td>{user.birthday}</td>
      <td className='edit_user'>
        <button onClick={handleEdit}>
          <i className='bx bxs-edit edit'></i>
        </button>
        <button onClick={handleDelete}>
          <i className='bx bxs-trash edit'></i>
        </button>
      </td>
    </tr>
  )
}

export default User
