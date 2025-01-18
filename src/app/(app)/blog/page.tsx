import { Metadata } from "next";
import { payload } from "../payload-instance";
import Link from "next/link";
import dayjs from "dayjs";

const getPosts = async () => await payload.find({ collection: "posts", select: { introduction: true, slug: true, title: true, createdAt: true }})

export const metadata: Metadata = {
    title: 'Florian Lovasi - Blog'
}

export default async function Blog() {
    const posts = await getPosts();

    return (
        <div className="flex justify-center flex-col items-center gap-4">
            {posts.docs && posts.docs.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="max-w-screen-md hover:text-gray-400 transition-colors duration-300 cursor:pointer mb-2">
                    <h2 className="font-geist-sans text-2xl font-bold cursor:pointer">{post.title as string}</h2>
                    <h5>{dayjs(post.createdAt as Date).format("YYYY-MM-DD")}</h5>
                    <p className="cursor:pointer">{post.introduction as string}</p>
                </Link>
            ))}
            {posts.docs.length === 0 && (
                <p>No posts found :(</p>
            )}
        </div>
    )
}