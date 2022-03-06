import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../models'

export interface WorkPageProps {}

export default function WorkPage(props: WorkPageProps) {
  return <div>WorkPage</div>
}

WorkPage.Layout = MainLayout
