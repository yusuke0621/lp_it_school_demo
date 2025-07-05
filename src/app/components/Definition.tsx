import Image from "next/image";

import mokumoku_1 from "../../../public/images/mokumoku-1.webp";
import mokumoku_2 from "../../../public/images/mokumoku-2.webp";
import mokumoku_3 from "../../../public/images/mokumoku-3.webp";
import mokumoku_4 from "../../../public/images/mokumoku-4.webp";
import worryPerson_1 from "../../../public/images/worryPerson_1.svg";
import worryPerson_2 from "../../../public/images/worryPerson_2.svg";

export default function Definition() {
  const messages = [
    "転職活動が不安で、一歩踏み出せない",
    "自分には無理かもって思ってしまう",
    "独学では続かないし、誰かに相談したい",
    "IT業界に興味はあるけど、\n何を学べばいいのかわからない",
    "やりたいことが見つからない",
  ];

  const backgroundImages = [mokumoku_1, mokumoku_2, mokumoku_3, mokumoku_4]; // 交互に使いたい画像
  return (
    <section className="bg-white">
      <div className="w-full relative bg-color-white h-[406px] overflow-hidden text-left px-4">
        <h2 className="text-center text-lg font-bold mt-6 mb-6">
          こんなお悩みありませんか？
        </h2>

        <div className="flex flex-col items-center gap-0 md:px-50 ">
          {messages.map((text, i) => (
            <div
              key={i}
              className={`relative inline-block max-w-[240px] text-center -mt-[10px]  ${
                i % 2 === 0 ? "self-end" : "self-start"
              } 
                ${i === 0 ? "w-[220px] md:absolute md:top-[20%] md:left-[48%]" : ""}
                ${i === 1 ? "w-[220px] md:absolute md:top-[35%] md:left-[32%]" : ""}
                ${i === 2 ? "w-[240px] md:absolute md:top-[45%] md:left-[55%]" : ""}      
                ${i === 3 ? "w-[190px] md:absolute md:top-[60%] md:left-[28%]" : ""}
                ${i === 4 ? "w-[180px] md:absolute md:top-[70%] md:left-[60%]" : ""}
            `}
            >
              {/* 吹き出し背景（交互に切り替え） */}
              <Image
                src={
                  text ===
                  "IT業界に興味はあるけど、\n何を学べばいいのかわからない"
                    ? backgroundImages[2]
                    : text === "やりたいことが見つからない"
                      ? backgroundImages[3]
                      : i % 2 === 0
                        ? backgroundImages[1]
                        : backgroundImages[0]
                }
                alt=""
                width={280}
                height={54}
                className="w-full h-auto"
              />
              {/* 吹き出しテキスト */}
              <p className="absolute top-2 left-3 text-xs font-semibold text-middle leading-tight ">
                {text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <Image
          className="absolute top-[239px] left-[196px] md:left-[50%] w-[105px] h-[169px] overflow-hidden"
          width={105}
          height={169}
          alt=""
          src={worryPerson_1}
        />
        <Image
          className="absolute top-[252px] left-[97px] md:left-[42%] w-[87.1px] h-[159.1px]"
          width={87}
          height={159}
          alt=""
          src={worryPerson_2}
        />

        {/*  */}
      </div>
      <div
        className="relative [background:linear-gradient(-88.62deg,_#187fc3,_#08adff)] 
          w-full flex flex-col items-center justify-center text-white text-center px-4 py-12"
      >
        <p className="text-s md:text-2xl leading-none">そんなあなたのために</p>
        <p className="text-2xl md:text-3xl font-bold leading-tight">
          Growbase Lab があります！
        </p>
      </div>
    </section>
  );
}
