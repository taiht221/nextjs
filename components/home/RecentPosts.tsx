import { Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import * as React from 'react'
import PostCard from './PostCard'

export interface RecentPostsProps {}

export function RecentPosts(props: RecentPostsProps) {
  return (
    <Box component="section" bgcolor="secondary.light" pb={4} pt={2}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ md: 'space-between', xs: 'center' }}
          alignItems="center"
        >
          <Typography variant="h5" fontWeight="400">
            Recent Posts
          </Typography>
          <Link passHref href="/blog">
            <MuiLink color="secondary" sx={{ display: { xs: 'none', md: 'inline' } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
