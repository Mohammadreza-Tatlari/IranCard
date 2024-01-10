'use client'
import React from "react";

export default function Footer() {
  
  return (
    <>
      <footer id="footerBar" className="lg:fixed w-full bottom-0 bg-gray-800">
        <div className=" mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://iranmta.ir/" target="_blank" className="hover:underline">
              Iran MTA™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://telegram.org/iranmta" target="_blank" className="hover:underline me-4 md:me-6">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                TeamSpeak
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                DIscord
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
