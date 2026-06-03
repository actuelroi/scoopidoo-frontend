import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PortableTextRenderer from "@/components/PortableTextRenderer";

const POSTS_QUERY = `*[_type == "product"][0...12]`;

const options = { next: { revalidate: 30 } };

const Page = async () => {
  const posts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border rounded-lg p-4"
          >
            <h2 className="text-xl font-semibold mb-4">
              {post.slug?.current}
            </h2>

            <PortableTextRenderer value={post.detail} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;