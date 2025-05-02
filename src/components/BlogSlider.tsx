import getFormattedDate from "@/utils/getFormattedDate";
import { BlogPost } from "../../types"
import Image from "next/image";
import Link from "next/link";

interface BlogSliderProps {
  blogs: BlogPost[];
  currentTitle: string;
}

export default function BlogSlider({blogs, currentTitle} : BlogSliderProps) {

  const blogList = blogs.filter(post => post.title !== currentTitle)

  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl">Read More</h3>
      <p className="font-light mb-4">Discover even more great news, tips and tricks from the refresh team.</p>
      <div className="flex gap-4 overflow-scroll">
      {blogList.map(post => {
        const formattedDate = getFormattedDate(post.date)
        return (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="min-w-[60vw] md:min-w-[34vw] lg:min-w-[26vw] bg-grassroots text-bluey-black rounded-sm overflow-hidden border-b-4 border-primary relative"
          >
            <Image 
              src={post.imagepath}
              alt={post.imagedesc}
              width={400}
              height={400}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold">{post.title}</h4>
              <p className="font-light text-sm">Written by {post.author}</p>
              <p className="font-light text-sm">{formattedDate}</p>
            </div>
            <p className="absolute bottom-4 right-4 font-bold text-2xl text-off-white">&#8594;</p>
          </Link>
        )
      })}
      </div>
    </div>
  )
}

