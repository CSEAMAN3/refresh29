export type Nav = {
  href: string;
  title: string;
}

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  imagepath: string;
  imagedesc: string;
  author: string;
}

export interface BlogPostWithHtml extends BlogPost {
  contentHtml: string;
}