import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost, BlogPostWithHtml } from "../../types";
import { promises as fs } from "fs";

const postsDirectory = path.join(process.cwd(), 'blogposts');

export async function getSortedPostData(): Promise<BlogPost[]> {
  try {
    const fileNames = await fs.readdir(postsDirectory);

    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        if (!matterResult.data.title || !matterResult.data.date) {
          throw new Error(`Missing metadata in file: ${fileName}`);
        }

        return {
          id,
          title: matterResult.data.title,
          date: matterResult.data.date,
          imagepath: matterResult.data.imagepath,
          imagedesc: matterResult.data.imagedesc,
          author: matterResult.data.author,
        } satisfies BlogPost;
      })
    );

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error fetching sorted post data:", error);
    return [];
  }
}

export async function getPostData(id: string): Promise<BlogPostWithHtml | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      imagepath: matterResult.data.imagepath,
      imagedesc: matterResult.data.imagedesc,
      author: matterResult.data.author,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error fetching post data for ID ${id}`, error);
    return null;
  }
}