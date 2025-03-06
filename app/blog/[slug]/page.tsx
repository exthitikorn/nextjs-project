async function getBlog(slug: any) {
    const res = await fetch('https://67c6b8eb351c081993fe7070.mockapi.io/blogs/' + slug)

    if (!res.ok) {
        throw new Error('cannot fetch blog')
    }
    return res.json()

}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: any }>
}) {
    const { slug } = await params
    const blog = await getBlog(slug)
    return (
        <div>
            <div>
                ID: {slug}
            </div>
            <div>
                Blog Name: {blog.name}
            </div>
            <div>
                Blog Content: {blog.content}
            </div>
        </div>
    )
}