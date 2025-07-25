import Posts from '@/components/Posts';
import { getPosts } from '@/lib/posts';

export default async function FeedPage() {
  const posts = await getPosts();
  console.log("===",posts);
  
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
