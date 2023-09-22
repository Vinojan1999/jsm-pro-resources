"use client"

import { useState } from "react";
import { useSearchParams ,useRouter } from "next/navigation";
import { formUrlQuery } from "@/sanity/utils";

const links = ['All', 'Next 13', 'Frontend', 'Backend', 'Fullstack'];

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl =  '';
    
    // Only has to happen if we currently have an active link
    if(active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: null,
      })
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false });     // scroll top when click filter
  }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}    // for using onClick, we have to use "use client"
          className={`
            ${ active === link ? 'gradient_blue-purple text-white' : '' }
            whitespace-nowrap rounded-lg px-8 py-2.5 capitalize
          `}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters