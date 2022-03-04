import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  function gotoAbout() {
    router.push({
      pathname: '/posts/[postid]',
      query: {
        postid: 123,
        ref: 'social',
      },
    })
  }
  return <Box>Home Page</Box>
}
Home.Layout = MainLayout
export default Home
