import { GetStaticProps, GetStaticPropsContext } from 'next'
import { title } from 'process'
import * as React from 'react'

export interface PostPageProps {
  posts: any[]
}

export default function PostPage({ posts }: PostPageProps) {
  console.log(posts)
  return (
    <div>
      <h1 id="postDetailTitle">fdggdf</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  // sever side run build time
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  return {
    //   filter data only get id and title
    props: {
      posts: data.data.map((e: any) => ({ id: e.id, title: e.title })),
    },
  }
}
