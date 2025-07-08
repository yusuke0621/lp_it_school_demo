"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import rounded01 from "../../../public/images/a-otf_01.png";
import rounded02 from "../../../public/images/a-otf_02.png";
import rounded03 from "../../../public/images/a-otf_03.png";
import rounded04 from "../../../public/images/a-otf_04.png";

import career_support_1 from "../../../public/images/interview-4835116_1280.jpg";
import career_support_2 from "../../../public/images/application-1756282_1280.jpg";
import career_support_3 from "../../../public/images/resume-genius-72D3z_LfrQA-unsplash.jpg";
import career_support_4 from "../../../public/images/job-3790033_1280.jpg";
import open_icon from "../../../public/images//open_icon.svg";
import close_icon from "../../../public/images/close_icon.svg";

export default function Support() {
  const [isExpanded01, setIsExpanded01] = useState(false);
  const [isExpanded02, setIsExpanded02] = useState(false);
  const [isExpanded03, setIsExpanded03] = useState(false);
  const [isExpanded04, setIsExpanded04] = useState(false);

  const career1Ref = useRef<HTMLDivElement>(null);
  const career2Ref = useRef<HTMLDivElement>(null);
  const career3Ref = useRef<HTMLDivElement>(null);
  const career4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [
      career1Ref.current,
      career2Ref.current,
      career3Ref.current,
      career4Ref.current,
    ];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section id="career" className="px-4 bg-black">
      <div className="w-full relative flex flex-col items-center justify-start py-10 md:py-20 px-0 md:px-30 box-border gap-4  ">
        <b className="self-stretch relative text-2xl md:text-3xl text-center">
          Growbase の転職サポート
        </b>
        <div className="w-full self-stretch  flex flex-row items-center justify-start gap-1 mb-2">
          <p className="w-full md:w-[300px] text-base md:text-xl text-white justify-start font-semibold">
            転職活動のフルサポート
          </p>
          <div className="w-full relative [background:linear-gradient(90deg,_#ff2e9f_6%,_#4e31ff_41%,_#9916ff_79%,_#d52bff)] h-0.5 md:h-1" />
        </div>
        <div
          ref={career1Ref}
          className="w-full relative md:flex md:flex-row md:gap-4 md:mt-6 fade-in-left"
        >
          <div className="flex items-start relative w-full md:max-w-[480px] gap-3 mb-3">
            <Image
              src={rounded01}
              alt=""
              width={79}
              height={48}
              className=" absolute top-[-16px] md:top-[-24px]"
            />

            <Image
              className="w-full object-cover rounded-lg md:max-w-[480px]"
              width={361}
              height={200}
              alt=""
              src={career_support_1}
            />
          </div>
          <div className="md:flex md:flex-col ">
            <div className="my-[4px]">
              <b className="text-base md:text-2xl">
                やりたいこと、見つけるところからサポート
              </b>
            </div>

            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded01 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <p className="m-0 ">
                Growbaseでは、スキルだけじゃなく、「あなたがどう働きたいか」まで一緒に考えるキャリア支援を行っています。
              </p>
              <p className="m-0 ">
                「何から始めたらいいの？」「自分に向いてる働き方って？」
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                そんな悩みを持つ人が、一番はじめに相談できる場所です。
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                たとえば、エンジニアがいいのか、デザイナーが向いているのか…
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                <span> 迷ったときも、</span>
                <b className=" text-pink-primary">
                  キャリア経験豊富なアドバイザー
                </b>
                <span className=" text-gray">が丁寧にヒアリングします。</span>
              </p>
              <p className="m-0">&nbsp;</p>
              <p>
                <b className="m-0 text-pink-primary">
                  最初のキャリア面談で、やりたいことや得意なことを整理。
                </b>
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                その後も、定期的な面談で方向性の確認や見直しを一緒に進めていきます。
              </p>
              <p className="m-0">
                Growbaseは、ただスキルを教えるだけじゃありません。
              </p>
              <p className="m-0">
                「なりたい自分」に近づくための伴走者として、あなたのキャリアの一歩を支えます。
              </p>
            </div>
            <div className="">
              <button
                onClick={() => setIsExpanded01(!isExpanded01)}
                className="w-full flex items-center justify-end gap-2 mt-2 flex items-center gap-2 text-xs "
              >
                <span
                  className={`flex items-center gap-2 text-xs ${
                    isExpanded01 ? "text-close-icon" : "text-pink-secondary"
                  }`}
                >
                  {isExpanded01 ? "とじる" : "もっと見る"}
                </span>
                <Image
                  src={isExpanded01 ? close_icon : open_icon}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={career2Ref}
          className="w-full relative md:flex md:flex-row-reverse md:gap-4 md:mt-6 fade-in-right"
        >
          <div className="flex items-start relative w-full md:max-w-[480px] gap-3 mb-3">
            <Image
              src={rounded02}
              alt=""
              width={79}
              height={48}
              className=" absolute top-[-16px] md:top-[-24px] md:left-[-24px] "
            />
            <Image
              className="w-full object-cover rounded-lg  md:max-w-[480px]"
              width={361}
              height={200}
              alt=""
              src={career_support_2}
            />
          </div>
          <div className="md:flex md:flex-col ">
            <div className="my-[4px]">
              <b className="text-base md:text-2xl">
                伝わるカタチを、一緒につくる
              </b>
            </div>
            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded02 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <div className="md:flex md:flex-col ">
                <p className="m-0 text-sm">
                  Growbaseでは、
                  <b className=" text-pink-primary">
                    ポートフォリオや履歴書・職務経歴書
                  </b>
                  <span>
                    まで、"あなたらしさ"が伝わるように一緒に言語化・ブラッシュアップしていきます。
                  </span>
                </p>
                <p className="m-0 text-sm">
                  「何を書けばいいか分からない」「アピールできる経験なんてない…」そんな不安からスタートしても、大丈夫です。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  これまでの学びやキャリア相談の内容をもとに、あなたの強みや魅力を丁寧に抽出。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <span>
                    見る人に届く形でアウトプットできるよう、具体的な構成や言葉選びまでサポートします。
                  </span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  プロダクトだけじゃなく、「どんな人なのか」まで伝えるのがGrowbaseのこだわり。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  最初は「人に見せるのが不安だった」人も、
                  気づけば「自信をもって提出できる！」に変わっていきます。
                </p>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => setIsExpanded02(!isExpanded02)}
                className="w-full flex items-center justify-end gap-2 mt-2 flex items-center gap-2 text-xs "
              >
                <span
                  className={`flex items-center gap-2 text-xs ${
                    isExpanded02 ? "text-close-icon" : "text-pink-secondary"
                  }`}
                >
                  {isExpanded02 ? "とじる" : "もっと見る"}
                </span>
                <Image
                  src={isExpanded02 ? close_icon : open_icon}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={career3Ref}
          className="w-full relative md:flex md:flex-row md:gap-4 md:mt-6 fade-in-left"
        >
          <div className="flex items-start relative w-full md:max-w-[480px] gap-3 mb-3">
            <Image
              src={rounded03}
              alt=""
              width={79}
              height={48}
              className=" absolute top-[-16px] md:top-[-24px] md:left-[-24px] "
            />

            <Image
              className="w-full object-cover rounded-lg  md:max-w-[480px]"
              width={361}
              height={200}
              alt=""
              src={career_support_3}
            />
          </div>
          <div className="md:flex md:flex-col ">
            <div className="my-[4px]">
              <b className="text-base md:text-2xl">
                自信を持って話せる自分になる
              </b>
            </div>
            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded03 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <div className="md:flex md:flex-col ">
                <p className="m-0 text-sm">
                  「質問にちゃんと答えられるかな…」
                  そんな不安を、自信に変えるのがGrowbaseの面接サポートです。
                </p>
                <p className="m-0 text-sm">
                  Growbaseでは、未経験でもしっかり伝えられるよう、"伝え方"に特化した面接対策を行っています。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 text-sm">
                  対応するのは、
                  <b className=" text-pink-primary">
                    面接官経験も豊富な講師陣。
                  </b>
                </p>
                <p className="m-0">
                  よくある質問だけでなく、その「聞かれる意図」まで解説するから、
                  どんな質問にも落ち着いて答えられる力が身についていきます。
                </p>
                <p className="m-0">
                  「面接が苦手」なのは、まだ準備が足りてないだけ。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  何をどう話すかを整理し、実践練習を重ねることで、ちゃんと「話せる自分」に出会えます。
                </p>
                <p className="m-0">
                  <span>準備と練習を通して、</span>
                  <b className=" text-pink-primary">
                    自己紹介や志望動機の言い回し、あなたらしい強みの伝え方まで、
                  </b>
                  <span className=" text-gray">
                    一緒にじっくり練って、あなたに合った対策を進めていきましょう。
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded03(!isExpanded03)}
              className="w-full flex items-center justify-end gap-2 mt-2 flex items-center gap-2 text-xs "
            >
              <span
                className={`flex items-center gap-2 text-xs ${
                  isExpanded03 ? "text-close-icon" : "text-pink-secondary"
                }`}
              >
                {isExpanded03 ? "とじる" : "もっと見る"}
              </span>
              <Image
                src={isExpanded03 ? close_icon : open_icon}
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div
          ref={career4Ref}
          className="w-full relative md:flex md:flex-row-reverse md:gap-4 md:mt-6 fade-in-right"
        >
          <div className="flex items-start relative w-full md:max-w-[480px] gap-3 mb-3">
            <Image
              src={rounded04}
              alt=""
              width={79}
              height={48}
              className=" absolute top-[-16px] md:top-[-24px] md:left-[-24px] "
            />

            <Image
              className="w-full object-cover rounded-lg  md:max-w-[480px]"
              width={361}
              height={200}
              alt=""
              src={career_support_4}
            />
          </div>
          <div className="md:flex md:flex-col ">
            <div className="my-[4px]">
              <b className="text-base md:text-2xl">
                自分らしく働ける場所と出会うために
              </b>
            </div>
            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded04 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <div className="md:flex md:flex-col ">
                <p className="m-0 text-sm">
                  Growbaseでは、技術を教えるだけでなく、「あなたがどんな場所で輝けるか」まで一緒に考える就職支援を行っています。
                </p>
                <p className="m-0 text-sm">
                  紹介するのは、未経験でも歓迎してくれる企業を中心に、あなたの価値観や希望に合った職場ばかり。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <span>スキルだけでなく、</span>
                  <b className=" text-pink-primary">
                    働き方・チームとの相性・目指すキャリアまで丁寧にヒアリングし、ぴったりの環境とのマッチング
                  </b>
                  <span>を大切にしています。</span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  紹介する企業ごとに、面接の傾向や求める人物像の事前共有もあるので、安心して選考に臨めます。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  「未経験だから」と遠慮する必要はありません。
                </p>
                <p className="m-0">
                  Growbaseで積み重ねてきた努力は、ちゃんと評価してくれる企業に届きます。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">学んで終わりじゃなく、その先の未来まで。</p>
                <p className="m-0">
                  あなたらしく働ける場所と出会うサポートを、Growbaseは本気で取り組んでいます。
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded04(!isExpanded04)}
              className="w-full flex items-center justify-end gap-2 mt-2 flex items-center gap-2 text-xs "
            >
              <span
                className={`flex items-center gap-2 text-xs ${
                  isExpanded04 ? "text-close-icon" : "text-pink-secondary"
                }`}
              >
                {isExpanded04 ? "とじる" : "もっと見る"}
              </span>
              <Image
                src={isExpanded04 ? close_icon : open_icon}
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
