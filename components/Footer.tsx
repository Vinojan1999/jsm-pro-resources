import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-10 text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-10 max-md:flex-col">
      <p>Copyright © 2023 <span className="font-semibold">Pro Resources</span>. All rights reserved.
      </p>

      <p className="">
        Developed by&nbsp;
        <Link 
          href='https://vinojan.online'
          target="_blank"
          className="text-gradient_blue-purple font-medium"
        >
          Vinojan Abhimanyu
        </Link>.
      </p>
    </footer>
  )
}

export default Footer