import * as React from 'react'
import { authApi } from '@/api/index'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: 'alisa',
        password: '123456',
      })
    } catch (error) {
      console.log(error)
    }
  }
  async function handleGetProfileClick() {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log(error)
    }
  }
  async function handleLogoutClick() {
    try {
      await authApi.logout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Log out</button>
    </div>
  )
}
