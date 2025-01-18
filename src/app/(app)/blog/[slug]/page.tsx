import { notFound } from "next/navigation";
import { payload } from "../../payload-instance";
import { RichText } from "@payloadcms/richtext-lexical/react";
import dayjs from "dayjs";
import { Metadata } from "next";

const getPost = async (slug: string) =>
  (await payload.db.findOne({
    collection: "posts",
    //@ts-expect-error - This works, but types are not inferred
    where: { slug },
    select: { introduction: true, title: true, createdAt: true, content: true },
  })) as unknown as {
    introduction: string;
    title: string;
    createdAt: Date;
    content: unknown;
  };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      description: "Post not found",
      authors: [{ name: "Flórián Lovasi" }],
    };
  }

  return {
    description: post.introduction,
    authors: [{ name: "Flórián Lovasi" }],
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex justify-center flex-col items-center w-full">
          <div>
            <h1 className="font-bold text-4xl">{post.title}</h1>
            <p className="text-lg">
              {dayjs(post.createdAt).format("YYYY-MM-DD")}
            </p>
            <hr className="my-4 h-[2px] bg-current" />
          </div>
        </div>
        <div className="container">
          {/* @ts-expect-error - types not inferred */}
          <RichText data={post.content} />
        </div>
      </div>
    </div>
  );
}
