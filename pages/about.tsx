// import Header from '@/components/common/header'
import { AdminLayout, MainLayout } from '@/components/layout'
import { Box, Typography } from '@mui/material'
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
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Box>
  )
}

AboutPage.Layout = AdminLayout
