import Layout from '@/components/Layout'
import {mdxFileList, POSTS_PATH} from '@/functions/getMdx'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

export default function PostArchive({posts}) {
  return (
    <Layout>
      <h1>Blog Posts</h1>
      <p>Entries from the blog.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/blog/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = mdxFileList.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const {content, data} = matter(source)

    return {
      content,
      data,
      filePath
    }
  })

  return {props: {posts}}
}
