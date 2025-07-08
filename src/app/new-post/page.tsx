"use client";
import { createPost } from "@/actions/Posts";
import PostFrom from "@/components/PostForm";

export default function NewPostPage() {
  

  return <PostFrom action={createPost} />;
}
