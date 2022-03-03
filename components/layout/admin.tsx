import { useAuth } from '@/hooks/index'
import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Auth } from '../common'

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter()
  const { profile, logout } = useAuth({
    revalidateOnMount: false,
  })

  async function handleLogoutClick() {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>SideBar</div>
      <p>Profile: {JSON.stringify(profile)}</p>
      <button onClick={handleLogoutClick}>Logout</button>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/posts">
        <a>Post</a>
      </Link>

      <div>{children}</div>
    </Auth>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
