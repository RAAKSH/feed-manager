import logo from '../app/icon.png';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <div
  id="main-header"
  className="w-[80%] max-w-[60rem] mx-auto my-8 flex justify-between items-center"
>
  <Link href="/">
    <Image
      src={logo}
      alt="Mobile phone with posts feed on it"
      className="w-20 h-20 drop-shadow-[0_0_3px_#000]"
    />
  </Link>

  <nav>
    <ul className="flex gap-4">
      <li>
        <Link
          href="/feed"
          className="text-[#eee7ea] text-xl px-4 py-2 rounded hover:bg-[#5f5a5c] transition-colors"
        >
          Feed
        </Link>
      </li>
      <li>
        <Link
          href="/new-post"
          className="bg-[#e32195] text-[#eee7ea] px-4 py-2 text-xl rounded hover:bg-[#c321e3] transition-colors"
        >
          New Post
        </Link>
      </li>
    </ul>
  </nav>
</div>
  );
}
