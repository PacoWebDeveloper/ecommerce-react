import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk, logOutThunk } from '../store/slices/userInfo.slice'


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
    <main>
      {
        token ? (
          <section>
            <i className='bx bx-user-circle'></i>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <button onClick={handleClickLogout}>Loguot</button>
          </section>
        ) : (
          <form onSubmit={handleSubmit(submit)}>
            <h3>Welcome! Enter your email and password to continue</h3>
            <div>
              <h4>Test data</h4>
              <p><i className='bx bx-envelope'></i> john@gmail.com</p>
              <p><i className='bx bx-lock-alt'></i> john1234</p>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" {...register("email")} />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" {...register/"password"} />
            </div>
            <button>Login</button>
            <p>Don't have an acconut? <span>Sing up</span></p>
          </form>
        )
      }
    </main>
  )
}

export default Login