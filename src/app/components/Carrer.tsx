"use client";
import { useState } from "react";
import Image from "next/image";

import rounded01 from "../../../public/images/a-otf_01.svg";
import rounded02 from "../../../public/images/a-otf_02.svg";
import rounded03 from "../../../public/images/a-otf_03.svg";
import rounded04 from "../../../public/images/a-otf_04.svg";

import career_support_1 from "../../../public/images/mask-group-31.webp";
import career_support_2 from "../../../public/images/mask-group-32.webp";
import career_support_3 from "../../../public/images/mask-group-33.webp";
import career_support_4 from "../../../public/images/mask-group-34.webp";
import open_icon from "../../../public/images//open_icon.svg";
import close_icon from "../../../public/images/close_icon.svg";

export default function Support() {
  const [isExpanded01, setIsExpanded01] = useState(false);
  const [isExpanded02, setIsExpanded02] = useState(false);
  const [isExpanded03, setIsExpanded03] = useState(false);
  const [isExpanded04, setIsExpanded04] = useState(false);

  return (
    <section id="career" className="px-4 bg-white">
      <div className="w-full relative flex flex-col items-center justify-start py-10 md:py-20 px-0 md:px-30 box-border gap-4  ">
        <b className="self-stretch relative text-2xl md:text-3xl text-center">
          Growbase Lab の転職サポート
        </b>
        <div className="w-full self-stretch  flex flex-row items-center justify-start gap-1 mb-2">
          <p className="w-full md:w-[300px] text-base md:text-xl text-black justify-start font-semibold">
            転職活動のフルサポート
          </p>
          <div className="w-full relative [background:linear-gradient(-88.62deg,_#187fc3,_#08adff)] h-0.5 md:h-1" />
        </div>
        <div className="w-full relative md:flex md:flex-row md:gap-4 md:mt-6">
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
                あなたの"やりたい"を一緒に探す、キャリア相談
              </b>
            </div>

            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded01 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <p className="m-0 ">
                Growbase Lab
                では、技術だけでなく"あなたに合ったキャリア"も一緒に考えます。
              </p>
              <p className="m-0 ">
                キャリアに悩む未経験者の"最初の相談先"です。
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                「何を目指せばいいか分からない」「エンジニアとデザイナー、どっちが合ってる？」
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                そんな悩みも、経験豊富なキャリアアドバイザーに気軽に相談できます。
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                <span>受講初期に行う</span>
                <b className=" text-blue-primary">
                  キャリアヒアリング・適性整理セッション
                </b>
                <span className=" text-gray">
                  から学習途中の悩みにも対応！定期的な
                </span>
                <b className=" text-blue-primary">キャリア振り返り面談</b>
                <span className=" text-gray">あり。</span>
              </p>
              <p className="m-0">&nbsp;</p>
              <p>
                <b className="m-0 text-blue-primary">
                  スキルを教えるだけでなく、"なりたい姿"を一緒に探すパートナー
                </b>
                <span className=" text-gray">
                  として、あなたのキャリア形成を支えていきます。
                </span>
              </p>
            </div>

            <div className="">
              <button
                onClick={() => setIsExpanded01(!isExpanded01)}
                className="w-full flex items-center justify-end gap-2 mt-2 flex items-center gap-2 text-xs "
              >
                <span
                  className={`flex items-center gap-2 text-xs ${
                    isExpanded01 ? "text-close-icon" : "text-blue-secondary"
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

        <div className="w-full relative md:flex md:flex-row-reverse md:gap-4 md:mt-6">
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
                ポートフォリオ制作 / 経歴書添削支援
              </b>
            </div>
            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded02 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <div className="md:flex md:flex-col ">
                <p className="m-0 text-sm">
                  <b className=" text-blue-primary">
                    ポートフォリオや履歴書・職務経歴書
                  </b>
                  <span>の言語化・見せ方・伝え方まで、</span>
                  <b className=" text-blue-primary">徹底サポート。</b>
                </p>
                <p className="m-0 text-sm">
                  「何を載せたらいいかわからない」「アピールポイントが思いつかない」そんな状態でも大丈夫。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  これまでのキャリア相談や学習期間などの内容からあなたの強みや経験を分析し、伝わる"カタチ"に落とし込むお手伝いをします。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <span>作品だけじゃなく、</span>
                  <b className="text-blue-secondary">
                    自分自身の価値をどう伝えるか
                  </b>
                  <span className=" text-gray">までサポート。</span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  「誰かに見せるのがこわい」から「見せたくなる！」に変わる自分に出会えます。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  ハイスキル未経験としての第一歩を一緒に踏み出しましょう！
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
                    isExpanded02 ? "text-close-icon" : "text-blue-secondary"
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

        <div className="w-full relative md:flex md:flex-row md:gap-4 md:mt-6">
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
              <b className="text-base md:text-2xl">面接対策</b>
            </div>
            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded03 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <div className="md:flex md:flex-col ">
                <p className="m-0 text-sm">
                  聞かれること、見られるポイント、全部一緒に準備。
                </p>
                <p className="m-0 text-sm">
                  スキルや作品があっても、「面接でうまく話せるか不安…」という声は多いもの。
                </p>
                <p className="m-0 text-sm">
                  Growbase Lab では、
                  <b className=" text-blue-primary">
                    "未経験ならではのアピール"に特化した面接対策
                  </b>
                  <span> を行っています。</span>
                </p>
                <p className="m-0">
                  面接官として、たくさんの経験してきた講師が対応してくれるのも安心ポイント。
                </p>
                <p className="m-0">
                  <b className=" text-blue-primary">よくある質問と意図の解説</b>
                  <span>
                    で、想定外の質問にも柔軟に対応できる力も身につきます。
                  </span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  面接がこわいなら、それは"準備不足"なだけ。
                </p>
                <p className="m-0">
                  <span>準備と練習を通して、</span>
                  <b className=" text-blue-primary">
                    「あ、これなら話せる！」という自信
                  </b>
                  <span className=" text-gray">をつくります。</span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  質問傾向から自己PRの伝え方まで、あなたに合った対策を一緒に進めていきましょう。
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded03(!isExpanded03)}
              className="w-full flex items-center justify-end gap-2 mt-2 flex items-center gap-2 text-xs "
            >
              <span
                className={`flex items-center gap-2 text-xs ${
                  isExpanded03 ? "text-close-icon" : "text-blue-secondary"
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
        <div className="w-full relative md:flex md:flex-row-reverse md:gap-4 md:mt-6">
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
              <b className="text-base md:text-2xl">企業紹介</b>
            </div>
            <div
              className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden text-sm ${
                isExpanded04 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
              }`}
            >
              <div className="md:flex md:flex-col ">
                <p className="m-0 text-sm">
                  Growbase Lab
                  では、技術だけでなく"あなたに合ったキャリア"も一緒に考えます。
                </p>
                <p className="m-0 text-sm">
                  <b className=" text-blue-primary">
                    未経験歓迎の企業を中心に、あなたに合った職場をご紹介します。
                  </b>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <span>単なるスキルマッチだけでなく、</span>
                  <b className=" text-blue-primary">
                    価値観・働き方・キャリアの方向性まで考慮
                  </b>
                  <span>したマッチングを大切にしています。</span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  紹介先ごとの"求める人物像・面接傾向"も事前に共有。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  「未経験だから」と遠慮する必要はありません。
                </p>
                <p className="m-0">
                  Growbase Lab
                  で積み上げた努力とスキルがあれば、ハイスキル未経験として必要としてくれる企業があります。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  "学んで終わり"じゃなく、"働く未来"までしっかりつなげる。
                </p>
                <p className="m-0">
                  あなたの"なりたい自分"に近づける企業との出会いを届けます。
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded04(!isExpanded04)}
              className="w-full flex items-center justify-end gap-2 mt-2 flex items-center gap-2 text-xs "
            >
              <span
                className={`flex items-center gap-2 text-xs ${
                  isExpanded04 ? "text-close-icon" : "text-blue-secondary"
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
