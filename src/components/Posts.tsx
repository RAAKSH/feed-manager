"use client";
import { formatDate } from '@/lib/format';
import LikeButton from './LikeIcon';
import { toggleLikeStatus } from '@/actions/Posts';
import { useOptimistic } from 'react';

function Post({ post,action }) {
 
  return (
    <article className="flex gap-4 p-4 rounded-lg border border-[#443f41] bg-[#131011] shadow-[0_0_6px_rgba(0,0,0,0.5)] m-3">
      <div className="w-32 h-24">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <header className="mb-6 flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold text-[#eee7ea]">{post.title}</h2>
            <p className="text-sm text-[#b1a9ac]">
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={action.bind(null,post?.id)}>
            <LikeButton liked={post?.isLiked?"like":""}/>
            </form>
          </div>
        </header>
        <p className="text-[#eee7ea]">{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [ otpimisticPosts,updateOptimisticPosts]=useOptimistic(posts,(prevPost, updatePostId)=>{
    const updatePostIndex=prevPost.findIndex(post=>post.id===updatePostId);

    if(updatePostIndex===-1){
      return prevPost;
    }
    const updatedPosts={...prevPost[updatePostIndex]};
    updatedPosts.likes=updatedPosts.likes+(updatedPosts.isLiked?-1:1);
    updatedPosts.isLiked=!updatedPosts.isLiked;

    const newPosts=[...prevPost];
    
    newPosts[updatePostIndex]=updatedPosts;
    return newPosts;

  })

  async function updatePost(postId){
   
    updateOptimisticPosts(postId);
    await toggleLikeStatus(postId)
  }

  if (!otpimisticPosts || otpimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  console.log("******************",otpimisticPosts);
  

  return (
    <ul className="posts">
      {otpimisticPosts?.map((post) => (
        <li key={post.id}>
          <Post post={post}  action={updatePost}/>
        </li>
      ))}
    </ul>
  );
}
