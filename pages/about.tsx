// import Header from '@/components/common/header'
import { AdminLayout, MainLayout } from '@/components/layout'
import dynamic from 'next/dynamic'
import * as React from 'react'

const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = React.useState([])
  React.useEffect(() => {
    ;(async () => {
      const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
      const data = await response.json()

      setPostList(data.data)
    })()
  }, [])
  return (
    <>
      <Header />
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

AboutPage.Layout = AdminLayout
