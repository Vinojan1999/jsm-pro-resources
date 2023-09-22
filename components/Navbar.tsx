import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-black-100/90 flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-6 text-white">
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
            <Link href='/'>
                <Image 
                    src='/jsm-logo2.svg' 
                    alt="Logo"
                    width={180}
                    height={40}
                />
            </Link>

            {/* Mobile menu button */}
            <Image 
                src='/hamburger-menu.svg'
                alt="Hamburger menu"
                width={30}
                height={30}
                className="block md:hidden cursor-pointer"
            />

            <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
                <li className="body-text text-gradient_blue-purple !font-semibold">
                    <Link
                        href='https://www.youtube.com/@javascriptmastery'
                        target="_blank"
                    >
                        JSM YouTube
                    </Link>
                </li>
                <li className="flex flex-row gap-x-4">
                    <Link 
                        href='https://github.com/Vinojan1999'
                        target="_blank"
                    >
                        <Image 
                            src='/github.svg'
                            alt="github"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                        />
                    </Link>
                    <Link 
                        href='https://www.linkedin.com/in/iam-vinojan/'
                        target="_blank"
                    >
                        <Image 
                            src='/linkedin.svg'
                            alt="github"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar