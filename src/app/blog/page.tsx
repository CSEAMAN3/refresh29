import { getSortedPostData } from "@/utils/posts"
import Link from "next/link"

export default async function BlogPage() {

  const blogs = await getSortedPostData()

  return (
    <main className="p-8 min-h-screen bg-off-white text-primary">
        <h1 className="font-bold text-3xl capitalize mb-2">refresh blogposts</h1>
        <p className="font-light mb-4">Read the latest news, tips and tricks from the refresh team.</p>
        <nav>
          <ul>
            {blogs.map(post => {
              return (
                <li key={post.id} className="px-2 mb-4 font-light">
                  <Link href={`/blog/${post.id}`} className="font-bold hover:text-grassroots">&#8594; {post.title}</Link>
                  <p className="ml-5 text-sm">Written by {post.author}</p>
                </li>
              )
            })}
          </ul>
        </nav>
    </main>
  )
}
