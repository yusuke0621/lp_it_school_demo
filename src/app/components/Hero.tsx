"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../../../public/images/arrowIcon.svg";
import mainVisual from "../../../public/images/mainVisual.webp";
import mainVisual_2 from "../../../public/images/mainVisual_2.webp";
import mainVisual_3 from "../../../public/images/mainVisual_3.webp";
import mainVisual_4 from "../../../public/images/mainVisual_4.webp";
import mainVisual_5 from "../../../public/images/mainVisual_5.webp";

export default function Hero() {
  const slides = [
    {
      src: mainVisual,
      hashtag: "#手に職つけて生きていく",
      position: "top-[12rem] md:top-[30rem] left-2",
      rotate: "-rotate-[8.4deg]",
      color: "[background:linear-gradient(-88.62deg,_#3718c3,_#a463ff)]",
    },
    {
      src: mainVisual_2,
      hashtag: "#私エンジニアになれるかも",
      position: "top-[20px] md:top-[12rem] left-[10px]",
      rotate: "-rotate-[0deg]",
      color: "[background:linear-gradient(-88.62deg,_#c31895,_#ff63a9)]",
    },
    {
      src: mainVisual_3,
      hashtag: "#自由な場所で働ける",
      position: "top-[12rem] md:top-[24rem] right-[40px]",
      rotate: "-rotate-[9.4deg]",
      color: "[background:linear-gradient(-88.62deg,_#18c34b,_#7ade32)]",
    },
    {
      src: mainVisual_4,
      hashtag: "#毎日仕事が楽しい",
      position: "top-[8rem] md:top-[20rem] right-[10px]",
      rotate: "rotate-[12deg]",
      color: "[background:linear-gradient(-88.62deg,_#18a4c3,_#2a95e2)]",
    },
    {
      src: mainVisual_5,
      hashtag: "#自分のやりがいを見つけた",
      position: "top-[13rem] md:top-[30rem] left-[8px]",
      rotate: "rotate-[-4deg]",
      color: "[background:linear-gradient(-88.62deg,_#c31818,_#e27d2a)] ",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4秒ごとに切り替え
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[current];

  return (
    <section className="relative overflow-hidden pt-2">
      {/* バブル背景 */}
      <div className="bubble-bg">
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
      </div>
      {/* SCROLL 矢印（PCのみ表示） */}
      <div className="md:flex absolute top-9/11 right-0 -translate-y-1/2 flex-col items-center gap-1 md:mr-4">
        <span className="text-xs tracking-widest [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <Image src={arrowIcon} alt="矢印" width={12} height={12} />
      </div>

      <div className="relative max-w-none">
        {/* 左側：カルーセル画像とハッシュタグ */}
        <div className="w-full md:w-2/3 relative ml-0">
          <div className="w-full h-[268px] md:h-[520px] relative">
            <Image
              src={currentSlide.src}
              alt={`carousel-${current}`}
              className="object-cover transition-opacity duration-1000 rounded-lg h-[268px] md:h-[520px] w-full"
              priority
            />

            {/* スライダーインジケーター */}
            <div className="absolute bottom-4 left-4 flex gap-2 z-20">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 md:h-[2px] rounded-full transition-all duration-300 ${
                    current === i ? "w-5 bg-white" : "w-4 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* メインテキスト */}
        <div className="absolute top-1/3 right-0 transform -translate-y-1/2 w-full md:w-1/2 px-4 md:px-8">
          <h1 className="text-2xl md:text-[64px] font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#187fc3] to-[#08adff] whitespace-pre-line">
            教材を眺めるだけじゃ、
            <br className="hidden md:block" />
            <span className="block md:hidden">力にはならない</span>
            <span className="hidden md:block">力にはならない</span>
          </h1>
        </div>

        {/* 説明テキストとCTA */}
        <div className="w-full md:absolute md:right-0 md:top-1/2 md:w-1/3 px-4 md:px-8  md:mt-20 md:translate-y-0">
          <div className="text-sm md:text-base text-gray-700 font-bold">
            <p>仲間と手を動かす。リアルな成果を出す。</p>
            <p>IT企業への転職を目指せる！</p>
          </div>

          <div className="flex justify-center md:justify-start mt-6 mb-10">
            <Link
              href="/contact"
              className="relative z-10 inline-block px-6 md:px-16 py-2 md:py-4 bg-gradient-to-r from-[#9b18c3] to-[#08adff] text-white text-sm md:text-2xl font-semibold rounded shadow hover:opacity-90 transition"
            >
              無料相談会に参加する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
