"use client";
import { useState } from "react";
import Image from "next/image";

import study_support_1 from "../../../public/images/mask-group-21.webp";
import study_support_2 from "../../../public/images/mask-group-22.webp";
import study_support_3 from "../../../public/images/mask-group-23.webp";
import open_icon from "../../../public/images//open_icon.svg";
import close_icon from "../../../public/images/close_icon.svg";

export default function Support() {
  const [isExpanded01, setIsExpanded01] = useState(false);
  const [isExpanded02, setIsExpanded02] = useState(false);
  const [isExpanded03, setIsExpanded03] = useState(false);

  return (
    <section id="support" className="px-4 bg-white">
      <div
        className="w-full relative flex flex-col items-center justify-start py-10 md:py-20 px-0 md:px-30 md:mb-10
      box-border gap-6 text-center text-2xl md:text-3xl text-color-text font-text-sp-h3"
      >
        <b className="self-stretch relative">Growbase Lab の学習サポート</b>
        <div className="flex flex-col items-start justify-start gap-4 text-left text-xs max-w-[1400px] mx-auto w-full">
          <div className="w-full relative md:flex md:flex-row md:gap-8">
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
                  メンター制度
                </b>
              </div>
              <div
                className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden md:text-base ${
                  isExpanded01 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
                }`}
              >
                <p className="m-0">
                  学習のつまずきも、キャリアの不安も、相談できる&quot;味方&quot;がいる。
                </p>
                <div className="self-stretch relative leading-[18px]">
                  <p className="m-0">
                    <span className="font-text-sp-short text-gray">
                      Growbase Lab では、受講生一人ひとりに
                    </span>
                    <b className="font-text-sp-short text-blue-primary">
                      専属メンター
                    </b>
                    <span>がつきます。</span>
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    学習の進め方から技術的な質問、キャリア相談まで、なんでも気軽に相談OK。
                  </p>
                  <p className="m-0">
                    <span>学習のつまずきや不安を</span>
                    <b className="font-text-sp-short text-blue-primary">
                      チャットでいつでも質問可能。
                    </b>
                  </p>
                  <p className="m-0">
                    <span className="font-text-sp-short text-gray">
                      「次に何をやればいい？」が明確になる
                    </span>
                    <b className="font-text-sp-short text-blue-primary">
                      ロードマップの相談
                    </b>
                    <span className="font-text-sp-short text-gray">
                      や転職や副業に向けた
                    </span>
                    <b className="font-text-sp-short text-blue-primary">
                      キャリア相談・方向性の整理
                    </b>
                    <span>も対応。</span>
                  </p>
                  <p className="m-0">
                    「わからない」「続かない」を防ぐための、心強いサポート体制です。
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    メンターは、業界経験者・現役エンジニア／デザイナー。
                  </p>
                  <p className="m-0">
                    あなたの学習とキャリアに寄り添う&quot;頼れる伴走者&quot;です。
                  </p>
                </div>
              </div>
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

          <div className="w-full relative md:flex md:flex-row md:gap-8">
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
                  学習のつまずきも、キャリアの不安も、相談できる&quot;味方&quot;がいる。
                </p>
                <div className="self-stretch relative leading-[18px]">
                  <p className="m-0">わからない…と思ったら、すぐ聞ける。</p>
                  <p className="m-0">
                    <span className="font-text-sp-short text-gray">
                      Growbase Lab では、
                    </span>
                    <b className="font-text-sp-short text-blue-primary">
                      いつでも質問できるサポート体制
                    </b>
                    <span>を整えています。</span>
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    チャットで気軽に質問できるから、学習につまずいても安心。
                  </p>
                  <p className="m-0">
                    質問フォーマットも用意しているので質問の仕方がわからなくても大丈夫。
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    「調べてもよくわからない…」という悩みを、最小限に抑えます。
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    <span>学習中の「ちょっとした疑問」にも</span>
                    <b className="font-text-sp-short text-blue-primary">
                      気軽にチャットで質問OK。
                    </b>
                  </p>
                  <p className="m-0 ">
                    <span className="font-text-sp-short text-gray">
                      技術的なトラブルやエラーも、
                    </span>
                    <b className="text-blue-primary">
                      メンターや講師がわかりやすくサポート。
                    </b>
                  </p>
                  <p className="m-0">
                    <b className="font-text-sp-short text-blue-primary">{`回答はわかりやすさ重視！ `}</b>
                    <span>
                      コピペで済ませない&quot;本当に理解できる説明&quot;
                    </span>
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    初心者にありがちな「調べ疲れ」や「質問しにくさ」を解消し、
                  </p>
                  <p className="m-0">
                    安心して手を動かし続けられる環境を提供します。
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded02(!isExpanded02)}
                className="w-full flex items-center justify-end mt-2 items-center gap-2 text-xs "
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
          <div className="w-full relative md:flex md:flex-row md:gap-8">
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
                  豊富な勉強会の実施
                </b>
              </div>
              <div
                className={`self-stretch relative leading-[18px] transition-all duration-300 ease-in-out overflow-hidden md:text-base ${
                  isExpanded03 ? "max-h-[1000px] opacity-100" : "max-h-[56px] "
                }`}
              >
                <p className="m-0">勉強って、意外と楽しい。仲間がいれば。</p>
                <p className="m-0">
                  <span>Growbase Lab では、</span>
                  <b className="font-noto-sans-jp text-blue-primary">
                    定期的な勉強会やワークショップを多数開催。
                  </b>
                </p>
                <p className="m-0">
                  Growbase Lab
                  カフェ（交流会）では受講生同士のつながりもできる。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  講師への質問はもちろん、仲間との交流を通じて、学びがもっと楽しくなります。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <span>「他の人も頑張ってる」が感じられる、</span>
                  <b className="font-noto-sans-jp text-blue-primary">
                    学習習慣を育てる場。
                  </b>
                </p>
                <p className="m-0">
                  モチベーションも自然とアップ。&quot;一緒に頑張る&quot;が、あなたの継続を支えます。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  「自分一人だと不安で進まない…」という時期も、
                </p>
                <p className="m-0">
                  <b className="font-noto-sans-jp text-blue-primary">
                    一緒に頑張る仲間がいる空間
                  </b>
                  <span>があれば、自然と前に進めます。</span>
                </p>
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
        </div>
      </div>
    </section>
  );
}
