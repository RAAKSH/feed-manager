"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./FormSubmit";

export default function PostFrom({ action }) {
  const [state, formAction] = useFormState(action, {});

  console.log("h12121212", state);

  return (
    <>
      <h1 className="text-2xl font-bold text-[#eee7ea] mb-6">
        Create a new post
      </h1>
      <form action={formAction}>
        <p className="mb-4">
          <label
            htmlFor="title"
            className="block mb-1 font-bold text-sm text-[#c7a7b7]"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 rounded bg-[#443f41] text-[#eee7ea] border-none"
            required
          />
        </p>

        <p className="mb-4">
          <label
            htmlFor="image"
            className="block mb-1 font-bold text-sm text-[#c7a7b7]"
          >
            Image URL
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            className="w-full p-2 rounded bg-[#443f41] text-[#eee7ea] border-none border"
            required
          />
        </p>

        <p className="mb-4">
          <label
            htmlFor="content"
            className="block mb-1 font-bold text-sm text-[#c7a7b7]"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={5}
            className="w-full p-2 rounded bg-[#443f41] text-[#eee7ea] border-none"
            required
          />
        </p>

        <p className="flex justify-end gap-4 mt-4">
          <FormSubmit />
        </p>
      </form>
      {state?.error && (
        <ul className="flex justify-end gap-4">
          {state?.error.map((item) => (
            <li key={item} className="my-1 text-[#f10e0e]">
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
