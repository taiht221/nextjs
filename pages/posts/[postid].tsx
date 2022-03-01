import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostDetailPageProps {
  post: any
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter()

  if (!post) return null

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <p>{post.author}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // sever side run build time
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    paths: data.data.map((post: any) => ({ params: { postid: post.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postid = context.params?.postid
  if (!postid)
    return {
      notFound: true,
    }
  // sever side run build time
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postid}`)
  const data = await response.json()
  return {
    //   filter data only get id and title
    props: {
      post: data,
    },
  }
}
