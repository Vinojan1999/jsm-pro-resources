"use client"

import { useState } from "react";

const links = ['All', 'Next 13', 'Frontend', 'Backend', 'Fullstack'];

const Filters = () => {
  const [active, setActive] = useState('');

  const handleFilter = (link: string) => {
    setActive(link);
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