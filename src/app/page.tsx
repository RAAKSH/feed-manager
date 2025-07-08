import { Suspense } from 'react';

import Posts from '@/components/Posts';
import { getPosts } from '@/lib/posts';

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
       <h1 className="text-3xl font-bold text-[#eee7ea] mb-2">Welcome back!</h1>
      <p className="text-lg text-[#eee7ea] mb-6">
        Here&apos;s what you might&apos;ve missed.
      </p>
      <section
        id="latest-posts"
        className="mt-8"
      >
        <Suspense fallback={<p className="text-[#eee7ea]">Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
