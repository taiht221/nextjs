import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { ROUTE_LIST } from './router'
import clsx from 'clsx'

export function HeaderDeskTop() {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={3}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} passHref href={route.path}>
              <MuiLink
                color="black"
                sx={{ ml: 2, fontWeight: '700' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
