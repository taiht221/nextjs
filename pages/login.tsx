import * as React from 'react'
import { authApi } from '@/api/index'
import { useAuth } from '@/hooks/index'
import { useRouter } from 'next/router'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })

  async function handleLoginClick() {
    try {
      await login()
      router.push('/about')
    } catch (error) {
      console.log(error)
    }
  }
  // async function handleGetProfileClick() {
  //   try {
  //     await logout()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  async function handleLogoutClick() {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile:{JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Log out</button>
    </div>
  )
}
