import getFormattedDate from "@/utils/getFormattedDate";
import { getPostData, getSortedPostData } from "@/utils/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata(props : {params : Promise<{postId : string}>}) : Promise<Metadata>{
  try{

    const params = await props.params
    const {postId} = params

    const blog = await getPostData(postId)

    if(!blog){
      return {
        title: "Blog not found"
      }
    }

    return {
      title: blog.title,
      description: blog.contentHtml.substring(0, 80)
    }

  }catch(error){
    console.error({error: "Failed to generate metadata"}, error)
    return {
      title: "Metadata Failed"
    }
  }
}

export default async function page(props : {params : Promise<{postId : string}>}) {

  const params = await props.params
  const {postId} = params

  const blog = await getPostData(postId)

  if(!blog) return notFound()

  const {contentHtml, title, date, imagepath, imagedesc, author} = blog

  const formattedDate = getFormattedDate(date)

  return (
    <main className="p-8 bg-off-white min-h-screen text-primary">
      <div className="mx-auto max-w-[600px]">
          <Link href="/blog" className="font-light hover:text-grassroots inline-block mb-4">&#8592; return to blog</Link>
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="font-light text-sm">Written by {author}</p>
          <p className="font-light text-sm mb-8">{formattedDate}</p>
          <Image 
            src={imagepath}
            alt={imagedesc}
            width={400}
            height={400}
            className="w-full h-[300px] object-cover mb-8"
          />
          <section dangerouslySetInnerHTML={{__html: contentHtml}} className="prose prose-sm" />
      </div>
    </main>
  )
}

export async function generateStaticParams(){
  const blogs = await getSortedPostData()
  return blogs.map(post => ({postId: post.id}))
}
