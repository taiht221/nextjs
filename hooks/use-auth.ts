import { authApi } from '@/api/index'
import useSWR from 'swr'
import * as React from 'react'
import { PublicConfiguration } from 'swr/dist/types'

export function useAuth(option?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    // re-fetch on changing tab and focus again
    revalidateOnFocus: false,

    // re-fetch on mounting
    // revalidateOnMount: true,

    // data will be old data in the milisecons if you triggle or change state in this time it will not fetch again
    dedupingInterval: 60 * 60 * 1000,

    ...option,
  })

  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authApi.login({
      username: 'alisa',
      password: '123456',
    })

    await mutate()
  }

  async function logout() {
    await authApi.logout()
    mutate({}, false)
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  }
}