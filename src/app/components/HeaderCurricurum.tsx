"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logolImage from "../../../public/images/growbase-lab_logologo_bk.png";
import hamburgerMenu from "../../../public/images/hamburgerMenu.svg";
import MobileHeaderCurricurum from "./MobileHeaderCurricurum";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]">
      <div className="w-full md:w-[95%] mx-auto md:mt-2">
        <div
          className="flex justify-between items-center px-4 py-3 mx-auto 
            shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)] rounded bg-[#111111] h-[60px]"
        >
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="relative overflow-hidden max-h-full object-cover brightness-0 invert"
                width={114}
                height={36}
                alt="Growbase Labロゴ"
                src={logolImage}
              />
            </Link>
            {/* ナビゲーション（PCのみ表示） */}
            <nav className="hidden md:flex space-x-6 text-sm font-semibold ml-4">
              <a
                href="#DetailCourse"
                className="bg-gradient-to-r from-[#ff2e9f] via-[#4e31ff] via-[#9916ff] to-[#d52bff] inline-block text-transparent bg-clip-text hover:opacity-80 transition-opacity"
              >
                カリキュラム一覧
              </a>
              <a
                href="#support"
                className="bg-gradient-to-r from-[#ff2e9f] via-[#4e31ff] via-[#9916ff] to-[#d52bff] inline-block text-transparent bg-clip-text hover:opacity-80 transition-opacity"
              >
                学習サポート
              </a>
              <a
                href="#career"
                className="bg-gradient-to-r from-[#ff2e9f] via-[#4e31ff] via-[#9916ff] to-[#d52bff] inline-block text-transparent bg-clip-text hover:opacity-80 transition-opacity"
              >
                転職サポート
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              className="text-white text-sm font-semibold px-4 py-2 rounded [background:linear-gradient(90deg,_#ff2e9f_6%,_#4e31ff_41%,_#9916ff_79%,_#d52bff)] shadow hover:opacity-90 transition p-6"
              href="/contact"
            >
              無料相談会に参加する
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(true)}>
              <Image
                src={hamburgerMenu}
                alt="メニュー"
                width={30}
                height={25}
                className="brightness-0 invert"
              />
            </button>
          </div>
        </div>
        {/* モバイルメニュー */}
        {isOpen && <MobileHeaderCurricurum onClose={() => setIsOpen(false)} />}
      </div>
    </header>
  );
}
