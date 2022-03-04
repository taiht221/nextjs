import { LayoutProps } from '@/models/common'
import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import * as React from 'react'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow="1">
        <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
          SM Container
        </Container>
        <Container sx={{ bgcolor: 'primary.main' }}>SM Container</Container>

        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/blog">
          <a>blog</a>
        </Link>

        <Link href="/works">
          <a>work</a>
        </Link>
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
