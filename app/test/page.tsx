"use client"

import { useState, useEffect } from 'react'

async function getBlogs() {
    const res = await fetch('https://67c6b8eb351c081993fe7070.mockapi.io/blogs')

    if (!res.ok) {
        throw new Error('cannot fetch blog')
    }
    return res.json()
}

export default function testPage() {

    const [blogState, setBlogState] = useState([])

    const initBlog = async () => {
        try {
            const result = await getBlogs()
            setBlogState(result)
        } catch (error) {
            console.log('Error:', error)
        }
    }

    useEffect(() => {
        initBlog()
        console.log('useEffect')
    }, [])

    console.log(blogState)

    return (
        <>
            <div>
                <h1>Test Page 2</h1>
            </div>
            {
                blogState.map((blog: any, index: any) => (
                    <div key={index}>
                        {blog.id} {blog.name}
                    </div>
                ))
            }
        </>
    );
}
