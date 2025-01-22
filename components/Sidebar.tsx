"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Transition from "./Transition";

const Sidebar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [prevPath, setPrevPath] = useState("/");
  const path = usePathname();

  // Определяем активную иконку по текущему пути
  const getActiveIcon = () => {
    const currentLink = NavLinks.find(link => link.link === path);
    return currentLink?.name || "Home";
  };

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
      <div className="fixed right-2.5 md:right-8 top-[40%] z-[20] h-[150px] w-[48px] rounded-full bg-gray-500 bg-opacity-50">
        <AnimatePresence mode="wait">
          {isRouting && <Transition />}
          <div className="flex flex-col gap-5 pb-3 justify-center items-center h-full">
            {NavLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.link}
                    className="hover:scale-125 transition-transform"
                >
                  <link.icon
                      className={`w-[28px] h-[28px] ${
                          path === link.link ? "text-green-700" : "text-white"
                      }`}
                  />
                </Link>
            ))}
          </div>
        </AnimatePresence>
      </div>
  );
};

export default Sidebar;