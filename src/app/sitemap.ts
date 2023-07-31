// check out this http://localhost:3000/sitemap.xml

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function sitemap() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json()) as post[];

  const post = posts.map((post) => {
    return {
      url: `/post/${post.id}`,
      lastModified: new Date().toISOString(),
    };
  });

  const routes = ["", "/post", "/blog"].map((route) => {
    return {
      url: route,
      lastModified: new Date().toISOString(),
    };
  });

  return [...routes, ...post];
}
