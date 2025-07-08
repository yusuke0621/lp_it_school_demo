"use client";
import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import features_1 from "../../../public/images/faizur-rehman-pHPzdEHN6Os-unsplash.jpg";
import features_2 from "../../../public/images/ming-labs-HmkNHtKVhXk-unsplash.jpg";
import features_3 from "../../../public/images/mapbox-D8yv3j37S9Y-unsplash.jpg";
import rounded01 from "../../../public/images/a-otf_01.png";
import rounded02 from "../../../public/images/a-otf_02.png";
import rounded03 from "../../../public/images/a-otf_03.png";
import viewmore from "../../../public/images/viewmore.svg";

export default function Feature() {
  type Feature = {
    title: string[];
    image: StaticImageData;
    list: StaticImageData;
    description: string;
    modalDescription: string;
  };

  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  const features = [
    {
      title: [
        "初めてでも、安心して踏み出せる",
        '成長を支える"はじめの一歩設計"',
      ],
      image: features_1,
      list: rounded01,
      description:
        "Growbase では、IT・デザインが初めての方でも無理なく学べるように設計された、共創型の学習コミュニティです。\n自分のペースでステップアップでき、わからないことはすぐに相談できる環境が整っています。",
      modalDescription:
        "Growbase では、IT・デザインが初めての方でも無理なく学べるように設計された、共創型の学習コミュニティです。\n自分のペースでステップアップでき、わからないことはすぐに相談できる環境が整っています。\n\nたとえば…\n【STEP 1】「何から始めればいい？」を一緒に見つけるオリエンテーション\n【STEP 2】仲間と一緒に進める超基礎講座＋チャットサポート\n【STEP 3】実践演習→講師のフィードバックで理解が深まる\n\n質問はいつでもOK。ひとりじゃないから、挫折しづらい。\nGrowbase は、あなたの「最初の一歩」に並走します。",
    },
    {
      title: [
        '"使えるスキル"を育てる',
        '"現場基準のアウトプット型カリキュラム"',
      ],
      image: features_2,
      list: rounded02,
      description:
        'Growbase のカリキュラムは"作って学ぶ"が基本。\n現場で使われているツールや考え方を取り入れ、すぐに活かせる実践力を育みます。',
      modalDescription:
        'Growbase のカリキュラムは"作って学ぶ"が基本。\n現場で使われているツールや考え方を取り入れ、すぐに活かせる実践力を育みます。\n\nカリキュラムの一部：\n- GitHubでのチーム開発演習\n- Figmaを使ったUI設計\n- Reactや生成AIを使ったミニアプリ制作\n- ChatGPTを活用した業務効率化の実例共有\n\n"知識"だけではなく、"アウトプット"にこだわる。Growbase は、実務に近い経験を通じて"できる自分"を育てます。',
    },
    {
      title: ["スキルだけで終わらせない", 'あなたの"働く"を一緒に叶える'],
      image: features_3,
      list: rounded03,
      description:
        'Growbase では、学ぶだけで終わらず、"仕事につなげる"までをサポートします。\n副業・転職・フリーランスなど、それぞれのゴールに合わせてキャリア戦略を設計します。',
      modalDescription:
        'Growbase では、学ぶだけで終わらず、"仕事につなげる"までをサポートします。\n副業・転職・フリーランスなど、それぞれのゴールに合わせてキャリア戦略を設計します。\n\nサポート内容の例：\n- プロによるキャリア面談\n- 履歴書・ポートフォリオ添削\n- 副業獲得の戦略サポート\n- 模擬面接・面談トレーニング\n- AI×自分の強みを活かす提案型ワーク\n\n"学んで終わり"ではなく、"働く"まで一緒に歩む。\nGrowbase は、あなたの理想のキャリアに寄り添います。',
    },
  ];

  return (
    <section
      id="feature"
      className="bg-black py-10 px-4 md:px-20 text-color-text"
    >
      <h2 className="text-center text-lg md:text-2xl font-bold">Growbase</h2>
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-10">
        3つの特徴
      </h3>

      <div className="flex flex-col gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              featureRefs.current[i] = el;
            }}
            className={`feature-item flex flex-col md:flex-row items-center md:items-start gap-6 ${
              visibleItems.includes(i) ? "visible" : ""
            }`}
          >
            <div className="w-full md:w-[453px] h-[201px] md:h-[300px] relative">
              <Image
                src={feature.image}
                alt=""
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 453px"
              />
            </div>
            <div>
              <div className="flex items-start gap-3 mb-3">
                <Image
                  src={feature.list}
                  alt=""
                  width={79}
                  height={48}
                  className="mt-4 md:w-[120px]"
                />
                <div className="mt-4">
                  <h4 className="text-base md:text-2xl font-bold leading-snug">
                    {feature.title.map((line, j) => (
                      <p key={j} className="m-0">
                        {line}
                      </p>
                    ))}
                  </h4>
                </div>
              </div>
              <p className="text-xs md:text-base mt-2 leading-relaxed text-left">
                {feature.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="flex justify-end">
                <button
                  className="flex justify-end gap-3 mb-3 cursor-pointer"
                  onClick={() => setSelectedFeature(feature)}
                >
                  <Image
                    src={viewmore}
                    alt=""
                    width={91}
                    height={18}
                    className="mt-2"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedFeature && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50
        opacity-100 md:scale-100 transition-opacity transition-transform duration-300 ease-out"
        >
          <div
            className="bg-black w-[90%] max-w-md md:max-w-7xl px-4 py-16 rounded-lg shadow-lg relative
           "
          >
            {/* 閉じるボタン */}
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer"
            >
              ×
            </button>

            {/* モーダル内容 */}
            <div
              className={`flex flex-col ${
                selectedFeature.image === features_2
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } gap-6 md:gap-4 items-start bg-black`}
            >
              <Image
                src={selectedFeature.image}
                alt=""
                width={345}
                height={201}
                className="w-full md:w-[420px] h-auto rounded-lg mb-4"
              />
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <Image
                    src={selectedFeature.list}
                    alt=""
                    width={79}
                    height={48}
                    className="mt-2 md:w-[120px]"
                  />
                  <div>
                    <h4 className="text-base md:text-2xl font-bold leading-snug">
                      {selectedFeature.title.map((line, j) => (
                        <p key={j} className="m-0">
                          {line}
                        </p>
                      ))}
                    </h4>
                  </div>
                </div>
                <p className="text-xs md:text-base mt-2 leading-relaxed text-left text-base">
                  {selectedFeature.modalDescription
                    .split("\n")
                    .map((line, index) => (
                      <span
                        key={index}
                        className={
                          line.includes(
                            "つまずいても講師にすぐ相談できるので、「一人で挫折」はさせません。"
                          )
                            ? "text-blue-secondary font-bold"
                            : line.includes(
                                  "ツールやプログラミング言語やUI設計、チーム開発、レビュー文化"
                                )
                              ? "text-blue-secondary font-bold"
                              : line.includes(
                                    "未経験でも一歩踏み出せる仕組みが整っています。"
                                  )
                                ? "text-blue-secondary font-bold"
                                : ""
                        }
                      >
                        {line}
                        <br />
                      </span>
                    ))}
                </p>
              </div>
            </div>
            <div className="mt-16 flex justify-center ">
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-14 py-2 text-sm border rounded-md [background:linear-gradient(90deg,_#ff2e9f_6%,_#4e31ff_41%,_#9916ff_79%,_#d52bff)] hover:bg-[#08adff] hover:opacity-90 transition cursor-pointer"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
