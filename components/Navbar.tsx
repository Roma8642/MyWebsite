import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5">
            <h1 className="text-white text-[45px]">
                <Link href="/">Roman <span className="font-thin">Isak</span></Link>
            </h1>
            <div className="flex flex-row gap-5">
                <Link href="https://github.com/Roma8642" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-2xl" />
                </Link>
                <Link href="https://t.me/psyop_p" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="text-white text-2xl" />
                </Link>
                <Link href="https://www.linkedin.com/in/roma-isac-bbb7582a5/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-2xl" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
