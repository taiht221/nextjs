import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import * as React from 'react'

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>

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
    </div>
  )
}
