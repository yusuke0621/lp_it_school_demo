"use client";
import { useState } from "react";

const FAQ_LIST = [
  {
    question: "完全未経験でも大丈夫ですか？",
    answer: `完全未経験でも問題ございません。
未経験者向けのカリキュラムを準備しておりますので、安心していただけます。
特別なスキルや知識は一切必要ありません！

Growbase Lab は「なにが分からないかも分からない」という方のためのカリキュラム設計になっているため、IT・デザインの知識ゼロからでも安心して学べます。`,
  },
  {
    question: "どれくらいの期間で転職できますか？",
    answer: `人によって進度は異なりますが、平均して6〜12ヶ月での転職成功を目標としています。
    
        Growbase Lab では「最短での就職」をゴールにせず、"自分に合ったペースで学び、納得して働ける転職"を大切にしています。
        週15~20時間以上の学習時間を確保できる方で、6ヶ月未満で内定獲得できるケースもあります。
        
        学習ペースやゴールに応じて、個別にプラン設計も可能ですのでご相談ください。`,
  },
  {
    question: "どんな人が受講していますか？",
    answer: `受講者の多くは20〜30代の未経験者で、「これからITスキルを身につけたい」という方ばかりです。
    
      中には以下のような背景の方が多くいます：
      ・飲食・接客業からキャリアチェンジしたい方
      ・事務職から手に職をつけたいと考えた方
      ・美大・芸大出身でデザインに興味があった方
      ・大学卒業後に進路に迷っていた第二新卒の方 「PCが苦手」「デザイン・プログラミングは完全未経験」という方が多く、ゼロからのスタートに特化したサポートを提供しています。`,
  },
  {
    question: "料金はどのくらいですか？",
    answer: `受講料はプランやサポート内容によって異なりますが、基本的に月額制 or 分割払いにも対応しています。
    
      「できるだけ費用を抑えたい」「まずは試してみたい」という方には、無料体験会や個別相談もご案内しています。
      ※Growbase Lab では転職成功後に企業からの紹介料で収益化するモデルのため、学習者の自己負担は極力少なく抑えています。
      
      詳しいプランについては、お気軽にご相談ください！`,
  },
  {
    question: "忙しくても続けられますか？",
    answer: `はい、大丈夫です！

Growbase Lab では、「無理なく続けられる」ことを大前提にカリキュラム設計をしています。
・週5〜10時間でも学べるように学習を細分化
・あなたのスケジュールに合わせて柔軟に進捗管理
・不定期でも勉強会／面談でペースを立て直せる仕組みあり

「フルタイムで働きながら」「家事や育児と両立しながら」という方も多く、メンターチャットサポートが継続をサポートします。`,
  },
  {
    question: "デザイナーとエンジニア、どっちが合ってるか分かりません。",
    answer: `ご安心ください。Growbase Lab では、最初に「キャリア相談」や「適性セッション」を行い、あなたの興味・価値観・得意不得意に応じて、どちらが合っているかを一緒に見つけていきます。
    また、実際に両方に触れてみる体験型の講座もあるので、学びながら選ぶこともできます。`,
  },
  {
    question: "他のスクールと何が違うんですか？",
    answer: `Growbase Lab の特徴は、「未経験者が"ちゃんと続けられて、ちゃんと仕事にできる"」仕組みがあることです。
    ・自分のペースで進められる段階的カリキュラム
    ・メンター・勉強会・コミュニティで挫折させない環境
    ・キャリア相談から企業紹介まで、転職までフルサポート`,
  },
  {
    question: "オンラインだけですか？対面はありますか？",
    answer: `基本はオンラインですが、「Growbase Lab カフェ（勉強会・交流会）」として対面イベントも実施しています。
    
      オンラインでも、メンターとのビデオ通話や、オンラインイベントなど、しっかりとコミュニケーションが取れる仕組みを用意しています。`,
  },
  // 他の質問も同様に
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  function highlight(text: string, keywords: string[]) {
    let highlighted = text;
    keywords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "g");
      highlighted = highlighted.replace(
        regex,
        '<span class="text-[#08adff] font-semibold">$1</span>'
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  }

  return (
    <section id="faq" className="px-4 md:py-20 md:px-30 bg-blue-bg">
      <div className="max-w-4xl mx-auto py-10 text-color-text font-text-sp-short">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-6">
          よくある質問
        </h2>
        <div className="space-y-4 md:py-10 md:px-20">
          {FAQ_LIST.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow px-4 py-4 cursor-pointer"
              onClick={() => toggleOpen(idx)}
            >
              {/* Qライン */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 max-w-3xs">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#187fc3] to-[#08adff] font-bold text-base">
                    Q
                  </span>
                  <p className="text-xs md:text-base font-semibold md:whitespace-nowrap">
                    {faq.question}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full ${openIndex === idx ? "bg-gray-500" : "bg-gradient-to-r from-[#187fc3] to-[#08adff]"} flex items-center justify-center text-white text-base font-bold`}
                >
                  {openIndex === idx ? "ー" : "+"}
                </div>
              </div>

              {/* Aエリア */}
              {openIndex === idx && (
                <div className="my-4 bg-white border-t-[0.5px] border-gray-300 ">
                  <p className="text-base font-bold text-blue-secondary my-2">
                    A
                  </p>
                  <div className="text-xs md:text-sm leading-relaxed text-gray-700 space-y-2">
                    {faq.answer.split("\n").map((line, i) => (
                      <p key={i}>
                        {highlight(line, [
                          "平均して6〜12ヶ月での転職成功を目標としています。",
                          "6ヶ月未満で内定獲得できるケース",
                          "20〜30代の未経験者",
                          "プランやサポート内容によって異なりますが、基本的に月額制 or 分割払い",
                          "無料体験会や個別相談もご案内",
                          "転職成功後に企業からの紹介料で収益化するモデル",
                          "「無理なく続けられる」ことを大前提に",
                          "どちらが合っているかを一緒に見つけていきます。",
                          "段階的カリキュラム",
                          "メンター・勉強会・コミュニティ",
                          "キャリア相談",
                          "「Growbase Lab カフェ（勉強会・交流会）」として対面イベントも実施",
                        ])}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
