import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import avatar from '@/images/avatar.png'
export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  return (
    <Box component="section" pt={{ md: 18, xs: 4 }} pb={{ md: 9, xs: 7 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ md: 'flex-start', xs: 'center' }}
          spacing={8}
          textAlign={{ md: 'left', xs: 'center' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ md: 5, xs: 3 }}>
              Hi, I am John, <br /> Creative Tecnologist
            </Typography>
            <Typography mb={{ md: 5, xs: 3 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" sx={{ color: 'white' }} size="large">
              Download Resum
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px ',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={avatar} alt="avatar" layout="responsive" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
