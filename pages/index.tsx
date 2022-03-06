import { HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  )
}
Home.Layout = MainLayout
export default Home
