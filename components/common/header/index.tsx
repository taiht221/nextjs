import { Box } from '@mui/material'
import * as React from 'react'
import { HeaderDeskTop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      <HeaderMobile />
      <HeaderDeskTop />
    </>
  )
}
