import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { ROUTE_LIST } from './router'
export interface HeaderDeskTopProps {}

export function HeaderDeskTop(props: HeaderDeskTopProps) {
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={3}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} passHref href={route.path}>
              <MuiLink sx={{ ml: 2 }}>{route.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
