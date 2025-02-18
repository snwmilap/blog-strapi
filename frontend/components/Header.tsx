"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <header className=" bg-white shadow-sm dark:bg-zinc-800 sticky top-0 z-40 w-full">
      <div className="max-w-screen-xl flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="font-semibold text-2xl">
          MiniBlog
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
         
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border transition-all "
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              /* Sun SVG for Light Mode */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500"
              >
                <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0L7.64 6.2a1 1 0 11-1.42 1.42L4.22 5.64a1 1 0 010-1.42zM2 13a1 1 0 010-2h2a1 1 0 110 2H2zm16.36-8.78a1 1 0 011.42 1.42L18.36 7.64a1 1 0 01-1.42-1.42l1.42-1.42zM12 20a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm7.78-3.78a1 1 0 00-1.42-1.42l-1.42 1.42a1 1 0 101.42 1.42l1.42-1.42zM22 13a1 1 0 000-2h-2a1 1 0 000 2h2zm-10 3a4 4 0 110-8 4 4 0 010 8z"></path>
              </svg>
            ) : (
              /* Moon SVG for Dark Mode */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-800 "
              >
                <path d="M21.75 15.34A9 9 0 1111.66 2.25a1 1 0 00-1.18 1.3 7 7 0 109.87 9.87 1 1 0 001.3-1.18z"></path>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
