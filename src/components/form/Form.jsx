
import react from 'react';
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect} from 'react';
import Swal from 'sweetalert2';

const Form = ({createUser, setShowForm, showForm, captureInfoUser, updateUser, setCaptureInfoUser}) => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm({criteriaMode: "all"})

  useEffect(()=>{
    reset(captureInfoUser) 
  },[captureInfoUser])

  const submit = (data) => {
    if(captureInfoUser){
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      updateUser(captureInfoUser.id, data)
      setCaptureInfoUser()
    }else {
      Swal.fire({
        title: 'Are you sure to save the record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            createUser(data)
          }else if (result.isDenied) {
            Swal.fire('Record are not saved', '', 'info')
          }
      })
       
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setShowForm(!showForm)
  }

  const handleClouse = () => {
    
    setShowForm(!showForm)    
    setCaptureInfoUser()
  }

  return (

    <form className='box_form' onSubmit={handleSubmit(submit )}>

      <button className='btn_clouse' onClick={handleClouse}>❌</button>

      <div className='header_form'>
        <h2>Create Register</h2>
      </div>

      <div className='form_div'>
        <label className='form_label' htmlFor="email">Email</label>
        <input className='form_input' id='email' type="text" {...register("email", {required: "this input required"})} />
        <p className='erros_input'>
          <ErrorMessage
            errors={errors}
            name="email"
          />
        </p>
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="password">Password</label>
        <input className='form_input' id='password' type="text" {...register("password", {required: "this input required"})} />
        <p className='erros_input'>
          <ErrorMessage errors={errors} name="password"/>
        </p>
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="firstName">First Name</label>
        <input className='form_input' id='firstName' type="text" {...register("first_name", {required: "this input required"})}/>
        <p className='erros_input'>
          <ErrorMessage errors={errors} name="first_name"/>
        </p>
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="lastName">Last Name</label>
        <input className='form_input' id='lastName' type="text" {...register("last_name", {required: "this input required"})}/>
        <p className='erros_input'>
          <ErrorMessage errors={errors} name="last_name"/>
        </p>
      </div>
      <div className='form_div'>
        <label className='form_label' htmlFor="birthday">Birsthday</label>
        <input className='form_input' id='birthday' type="date" {...register("birthday", {required: "this input required"})}/>
        <p className='erros_input'>
          <ErrorMessage errors={errors} name="brithday"/>
        </p>
      </div>
      <button className='btn_form' >Submit</button>
    </form> 
  )
}

export default Form

