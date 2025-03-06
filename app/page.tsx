import Link from 'next/link'

async function getBlogs() {
  const res = await fetch('https://67c6b8eb351c081993fe7070.mockapi.io/blogs')

  if (!res.ok) {
    throw new Error('cannot fetch blog')
  }
  return res.json()

}

export default async function Page() {

  const blogs = await getBlogs()

  return (
    <>
      <h1>Blog List:</h1>
      {
        blogs.map((blog: any, index: any) => (
          <div key={index}>
            {blog.id} {blog.name} 
            <Link
              href={`/blog/${blog.id}`}
              className="px-4 py-1 rounded-md bg-blue-400 text-white hover:bg-blue-500 hover:text-white">
              Detail
            </Link>
          </div>
        ))
      }
    </>
  )
}