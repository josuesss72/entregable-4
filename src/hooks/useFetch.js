import axios from 'axios';
import {useState} from 'react'
import Swal from 'sweetalert2';

export default function useFetch () {

  const [users, setUsers] = useState()

  const getFetch = () => {
    axios.get('http://users-crud.academlo.tech/users/')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  } 

  const createUser = (data) => {
    axios.post('http://users-crud.academlo.tech/users/', data)
      .then(res => {
        console.log(res.data)
        getFetch()
        Swal.fire('Saved!', '', 'success')
      })
      .catch(err => {
        console.error(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'it is necessary to fill in all the fields!'
        })
      })
  }

  const deleteUser = (id) => {
    axios.delete(`http://users-crud.academlo.tech/users/${id}/`)
      .then((res)=>{
        console.log(res.data)
        getFetch()
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      })
      .catch((err)=> console.log(err))
  }
  
  const updateUser = (id, data) => {
    axios.put(`http://users-crud.academlo.tech/users/${id}/`, data)
      .then((res) => {
        console.log(res.data)
        getFetch()
      })
      .catch((err) => console.log(err))
  }
  

  return { users, getFetch, createUser, deleteUser, updateUser}
}
