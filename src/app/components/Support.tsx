"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import study_support_1 from "../../../public/images/sunset-1807524_1280.jpg";
import study_support_2 from "../../../public/images/technology-3361983_1280.jpg";
import study_support_3 from "../../../public/images/bruce-mars-xj8qrWvuOEs-unsplash.jpg";
import open_icon from "../../../public/images//open_icon.svg";
import close_icon from "../../../public/images/close_icon.svg";

export default function Support() {
  const [isExpanded01, setIsExpanded01] = useState(false);
  const [isExpanded02, setIsExpanded02] = useState(false);
  const [isExpanded03, setIsExpanded03] = useState(false);

  const support1Ref = useRef<HTMLDivElement>(null);
  const support2Ref = useRef<HTMLDivElement>(null);
  const support3Ref = useRef<HTMLDivElement>(null);

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
      support1Ref.current,
      support2Ref.current,
      support3Ref.current,
    ];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section id="support" className="px-4 bg-black">
      <div
        className="w-full relative flex flex-col items-center justify-start py-10 md:py-20 px-0 md:px-30 md:mb-10
      box-border gap-6 text-center text-2xl md:text-3xl text-color-text font-text-sp-h3"
      >
        <b className="self-stretch relative">Growbase の学習サポート</b>
        <div className="flex flex-col items-start justify-start gap-4 text-left text-xs max-w-[1400px] mx-auto w-full">
          <div
            ref={support1Ref}
            className="w-full relative md:flex md:flex-row md:gap-8 fade-in-right"
          >
            <Image
              className="w-full md:w-[480px] object-cover rounded-lg"
              width={520}
              height={200}
              alt=""
              src={study_support_1}
            />

            <div className="md:flex md:flex-col items-start md:flex-1">
              <div className="text-center my-[4px]">
                <b className="relative text-base md:text-2xl text-center">
                  伴走サポート
                </b>
              </div>
              <div
                className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden md:text-base ${
                  isExpanded01 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
                }`}
              >
                <p className="m-0">ひとりで頑張らなくていい。</p>
                <div className="self-stretch relative leading-[18px]">
                  <p className="m-0">
                    <span className="font-text-sp-short text-gray">
                      Growbaseでは、あなたの「できたらいいな」を一緒に形にしてくれる、
                    </span>
                    <b className="font-text-sp-short text-pink-primary">
                      心強い伴走パートナー
                    </b>
                    <span>がつきます。</span>
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    わからないこと、つまずいたとき、不安なとき、
                  </p>
                  <p className="m-0">
                    <b className="font-text-sp-short text-pink-primary">
                      気軽にチャットで相談できるから、ひとりで抱え込まずに前に進めます。
                    </b>
                  </p>
                  <p className="m-0">
                    <span className="font-text-sp-short text-gray">
                      「次に何をやればいいんだろう？」という迷いも、
                    </span>
                    <b className="font-text-sp-short text-pink-primary">
                      一緒にロードマップを整理することで、やるべきことがクリアに。
                    </b>
                    <span className="font-text-sp-short text-gray">
                      学習のことだけじゃなく、「仕事につなげたい」「自信がない」そんな思いにも寄り添いながら、
                    </span>
                    <b className="font-text-sp-short text-pink-primary">
                      あなたらしいゴールまで、一緒に歩いていきます。
                    </b>
                  </p>
                  <p className="m-0">
                    「わからない」「続かない」を防ぐための、心強いサポート体制です。
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    サポートするのは、現役エンジニアやデザイナー、キャリア経験も豊富な人たち。
                  </p>
                  <p className="m-0">
                    ひとりじゃないって、きっと思えるはずです。
                  </p>
                </div>
              </div>
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

          <div
            ref={support2Ref}
            className="w-full relative md:flex md:flex-row md:gap-8 fade-in-right"
          >
            <Image
              className="w-full md:w-[480px] object-cover rounded-lg"
              width={361}
              height={200}
              alt=""
              src={study_support_2}
            />
            <div className="md:flex md:flex-col items-start md:flex-1">
              <div className="text-center my-[4px]">
                <b className="relative text-base md:text-2xl text-center">
                  質問対応
                </b>
              </div>

              <div
                className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden md:text-base ${
                  isExpanded02 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
                }`}
              >
                <p className="m-0">
                  「これ、なんだろう？」「エラーが消えない…」
                </p>
                <div className="self-stretch relative leading-[18px]">
                  <p className="m-0">
                    そんな時、すぐ聞けたら、きっと安心できるはず。
                  </p>
                  <p className="m-0">
                    <span className="font-text-sp-short text-gray">
                      Growbase では、
                    </span>
                    <b className="font-text-sp-short text-pink-primary">
                      いつでもチャットで質問OK。
                    </b>
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Growbaseでは、
                    わからないことをため込まず、その場で解決できます。
                  </p>
                  <p className="m-0">
                    「どんな風に聞けばいいか分からない…」という人も大丈夫。
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    質問のテンプレートも用意しているから、初めてでも気軽に使えます。
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    <span>
                      調べてもよく分からない、同じところで止まってしまう…。
                    </span>
                  </p>
                  <p className="m-0 ">
                    <span className="font-text-sp-short text-gray">
                      そんなもやもや時間を、できるだけ減らして、前に進めるように。
                    </span>
                    <b className="text-pink-primary">
                      現役エンジニアや講師が、ただ答えるだけじゃなく、ちゃんと理解できるようにサポート。
                    </b>
                  </p>
                  <p className="m-0">
                    <b className="font-text-sp-short text-pink-primary">{`回答はわかりやすさ重視！ `}</b>
                    <span>
                      「なるほど、そういうことか！」と腑に落ちるまで、一緒に向き合います。
                    </span>
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    わからないことがあっても、ここには“すぐ聞ける場所”があります。
                  </p>
                  <p className="m-0">
                    だから、安心して手を動かし続けられるんです。
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded02(!isExpanded02)}
                className="w-full flex items-center justify-end mt-2 items-center gap-2 text-xs "
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
          <div
            ref={support3Ref}
            className="w-full relative md:flex md:flex-row md:gap-8 fade-in-right"
          >
            <Image
              className="w-full md:w-[480px] object-cover rounded-lg"
              width={361}
              height={200}
              alt=""
              src={study_support_3}
            />
            <div className="md:flex md:flex-col items-start md:flex-1">
              <div className="text-center my-[4px]">
                <b className="relative text-base md:text-2xl text-center">
                  つながると、学びはもっと楽しくなる
                </b>
              </div>
              <div
                className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden md:text-base ${
                  isExpanded03 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
                }`}
              >
                <p className="m-0">ひとりで学ぶのは、ちょっと心細い。</p>
                <p className="m-0">
                  でも、一緒に頑張る仲間がいるだけで、学びはぐっと前向きになります。
                </p>
                <p className="m-0">
                  Growbaseでは、勉強会・ワークショップ・雑談交流会などを定期的に開催。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  気軽に参加できるオンラインの集まりで、自然とつながりが生まれます。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <span>
                    「こんなふうに進めてるんだ！」「その考え方いいね」仲間の学び方やつまずきに触れることで、
                  </span>
                  <b className="font-noto-sans-jp text-pink-primary">
                    自分の理解も深まっていく。
                  </b>
                </p>
                <p className="m-0">
                  横のつながりが生まれるから、孤独感なく続けられるのも大きな魅力です。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  「ちょっと今日はやる気出ないな…」という日も、
                </p>
                <p className="m-0">
                  <b className="font-noto-sans-jp text-pink-primary">
                    仲間の頑張る姿に背中を押されて、自然と手が動く。
                  </b>
                  <span>
                    Growbaseには、一人じゃない安心感と、学び続けられる空気があります。
                  </span>
                </p>
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
        </div>
      </div>
    </section>
  );
}
