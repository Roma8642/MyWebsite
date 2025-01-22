"use client";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { RxHome, RxPerson } from "react-icons/rx";

const Sidebar = () => {
    const path = usePathname();

    return (
        <div className="fixed right-2.5 md:right-8 top-[40%] z-[20] h-[150px] w-[48px] rounded-full bg-gray-800/50 border border-gray-700/30 transition-all duration-300">
            <div className="flex flex-col gap-5 pb-3 justify-center items-center h-full">
                {NavLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.link}
                        className={`p-2 rounded-full transition-colors ${
                            path === link.link
                                ? "text-green-500 bg-green-900/20" // Изменено на зеленый
                                : "text-gray-300 hover:text-gray-100" // Убраны синие ховеры
                        }`}
                    >
                        <link.icon className="w-6 h-6" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;