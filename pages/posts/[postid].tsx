import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter()

  console.log(router)

  return <div>Query: {JSON.stringify(router.query)}</div>
}
