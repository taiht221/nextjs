import { LayoutProps } from '@/models/common'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { Footer } from '../common'
import { Header } from '../common/header'
export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow="1">
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
