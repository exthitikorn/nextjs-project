async function getBlogs() {
  const res = await fetch('https://67c6b8eb351c081993fe7070.mockapi.io/blogs')

  if (!res.ok) {
    throw new Error('cannot fetch blog')
  }
  return res.json()

}

export default async function ContentPage() {

  const blogs = await getBlogs()

  return (
    <>
      <h1>Content Page</h1>
      {
        blogs.map((blog: any, index: any) => (
          <div key={index}>
            {blog.id}{blog.name}
          </div>
        ))
      }
    </>
  )
}