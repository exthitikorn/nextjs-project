export default async function Page({
  params,
}: {
  params: Promise<{ slug: string, id: string }>
}) {
  return <h1>My Page {(await params).slug} {(await params).id}</h1>
}