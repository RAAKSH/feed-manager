"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();

  if(status.pending){
    return<p className="text-xl">Creating post...</p>
  }
  return (
    <>
      <button
        type="reset"    
        className="px-4 py-2 rounded text-[#eee7ea] hover:text-[#e299b6] bg-transparent"
      >
        Reset
      </button>
      <button
        type="submit"
        className="px-4 py-2 rounded bg-[#e32195] text-[#eee7ea] hover:bg-[#a80a69]"
      >
        Create Post
      </button>
    </>
  );
}
