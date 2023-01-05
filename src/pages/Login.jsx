import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk, logOutThunk } from '../store/slices/userInfo.slice'
import './styles/Login.css'


const Login = () => {

  const {token, user} = useSelector(state => state.userInfo)
  const {register, handleSubmit} = useForm()

  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(loginUserThunk(data))
  }

  const handleClickLogout = () => {
    dispatch(logOutThunk())
  }
  return (
    <main className='login'>
      {
        token ? (
          <section className='login-loged'>
            <i className='login-loged-icon bx bx-user-circle'></i>
            <h3 className='login-loged-name'>{`${user.firstName} ${user.lastName}`}</h3>
            <button className='login-loged-btn' onClick={handleClickLogout}>Logout</button>
          </section>
        ) : (
          <form className='login-form' onSubmit={handleSubmit(submit)}>
            <h3 className='login-title'>Welcome! Enter your email and password to continue</h3>
            <div className='login-container-test'>
              <h4 className='login-test-title'>Test data</h4>
              <p className='login-test-email'><i className='bx bx-envelope'></i> john@gmail.com</p>
              <p className='login-test-password'><i className='bx bx-lock-alt'></i> john1234</p>
            </div>
            <div className='login-field'>
              <label className='login-label' htmlFor="">Email</label>
              <input className='login-input' type="email" {...register("email")} />
            </div>
            <div className='login-field'>
              <label className='login-label' htmlFor="">Password</label>
              <input className='login-input' type="password" {...register("password")} />
            </div>
            <button className='login-btn'>Login</button>
            <p className='login-test-footer'>Don't have an acconut? <span>Sing up</span></p>
          </form>
        )
      }
    </main>
  )
}

export default Login