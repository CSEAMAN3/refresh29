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

export type User = {
id: number,
name: string;
username: string;
email: string;
address: {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  }
},
phone: string;
swebsite: string;
company: {
  name: string;
  catchPhrase: string;
  bs: string;
}
}