export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params // 'a', 'b', or 'c'
    return Response.json({
        name: 'ThisX',
        id: id
    })
}