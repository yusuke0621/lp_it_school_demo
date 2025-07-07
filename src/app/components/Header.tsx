"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logolImage from "../../../public/images/star-college-yoko-color-1.webp";
import hamburgerMenu from "../../../public/images/hamburgerMenu.svg";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky bg-white top-0 z-50 shadow-md w-full md:w-[95%] mx-auto md:mt-2">
      <div
        className="flex justify-between items-center px-4 py-3 mx-auto 
          shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)] rounded bg-color-white h-[60px] "
      >
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="relative overflow-hidden max-h-full object-cover"
              width={114}
              height={36}
              alt="Growbase Lab ロゴ"
              src={logolImage}
            />
          </Link>
          {/* ナビゲーション（PCのみ表示） */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-blue-secondary ml-4">
            <a href="#feature">Growbase Lab の特徴</a>
            <a href="#curriculum">カリキュラムについて</a>
            <a href="/DetailCourse">カリキュラム一覧</a>
            <a href="#support">学習サポート</a>
            <a href="#career">転職サポート</a>
            <a href="#faq">よくある質問</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="text-white text-sm font-semibold px-4 py-2 rounded [background:linear-gradient(-88.62deg,_#9b18c3,_#08adff)] shadow hover:opacity-90 transition p-6"
          >
            無料相談会に参加する
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Image src={hamburgerMenu} alt="メニュー" width={30} height={25} />
          </button>
        </div>
      </div>
      {/* モバイルメニュー */}
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}
