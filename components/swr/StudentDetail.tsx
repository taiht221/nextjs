import * as React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
  studentId: string
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    // re-fetch on changing tab and focus again
    revalidateOnFocus: false,

    // re-fetch on mounting
    revalidateOnMount: true,

    // data will be old data in the milisecons if you triggle or change state in this time it will not fetch again
    dedupingInterval: 2000,
  })

  function handleMutateClick() {
    //   update tạm một dữ liệu mà người ta submit trong form sau đó get lại dữ liệu trên sever nếu hai cái giống nhau thì user ko cảm nhận được nhanh hơn
    //   will pre-fetch when mutate is true
    mutate({ name: 'abc' }, true)
  }

  return (
    <div>
      Name:{data?.name || 123} <button onClick={handleMutateClick}>mutate</button>
    </div>
  )
}
