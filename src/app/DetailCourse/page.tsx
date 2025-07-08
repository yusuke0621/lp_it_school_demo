// Components
import HeaderCurricurum from "../components/HeaderCurricurum";
import { CourseCard } from "../components/CourseCard";
import CTA from "../components/CTA";
import Support from "../components/Support";
import Carrer from "../components/Carrer";
import Footer from "../components/Footer";

import js_icon from "../../../public/images/js-1.svg";
import java_icon from "../../../public/images/java-1.svg";
import python_icon from "../../../public/images/python.svg";
import linux_icon from "../../../public/images/linux-1.svg";
import network_icon from "../../../public/images/network.svg";
import photoshop_icon from "../../../public/images/adobe-photoshop.svg";
import figma_icon from "../../../public/images/figma_icon.svg";
import chatgpt_icon from "../../../public/images/chatgpt-icon.svg";

export default function DetailCourse() {
  return (
    <>
      <main className="scroll-smooth ">
        {/* ヘッダー */}
        <HeaderCurricurum />
        <section
          id="DetailCourse"
          className="[background:linear-gradient(-28.16deg,_rgba(185,_120,_255,_0.2),_rgba(101,_186,_242,_0.2))] py-10 px-4"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
            カリキュラム詳細
          </h2>

          <div className="px-4 md:px-10 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <CourseCard
                title="フロントエンドエンジニアコース"
                icon={js_icon}
                description="JavaScriptの基本構文やDOM操作、イベント処理などの技術を習得し、動的なWEBサイトの構築を行います。その他、API連携や非同期処理、React等フレームワークの活用も学習できます。"
                skills={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Typescript",
                  "Next.js",
                  "設計書",
                  "SPA",
                ]}
              />

              <CourseCard
                title="Javaコース"
                icon={java_icon}
                description="Javaの基礎構文やWEB開発に必要なサーブレット、JSPなどの技術を習得し、WEBアプリケーションの開発を行います。その他フレームワークなども学ぶことが可能です。"
                skills={[
                  "変数",
                  "データ構造",
                  "二部検索",
                  "UML図",
                  "設計書",
                  "コードレビュー",
                  "グループ開発",
                ]}
              />

              <CourseCard
                title="Pythonコース"
                icon={python_icon}
                description="プログラミングの根本的な理解を深めるためのアルゴリズムやPythonの基本構文を中心に汎用知識を学び、Djangoを使用したWEBアプリケーション開発を行います。"
                skills={[
                  "フローチャート",
                  "データ構造",
                  "例外処理",
                  "Django",
                  "データベース基礎",
                  "Cookie",
                ]}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <CourseCard
                title="インフラコース"
                icon={linux_icon}
                description="プログラミングにおける汎用的な概念とExcelVBAの基本的な文法の学習やLinuxの仕組み、基礎的なコマンドを理解するための様々な基礎知識を学びます。"
                skills={[
                  "ITエンジニア基礎",
                  "ExcelVBA",
                  "NW基礎",
                  "Linux基礎",
                  "データベース基礎",
                  "設計・構築",
                ]}
              />
              <CourseCard
                title="ネットワークコース"
                icon={network_icon}
                description="ノードやリンクの基本、プロトコル、トポロジーやスイッチなどのデータの転送を管理する装置についての基礎を学び、それらを活用したネットワーク構築のスキルを習得します。"
                skills={[
                  "NW基礎",
                  "L2/L3基礎",
                  "トラブルシューティング",
                  "要件定義",
                  "詳細設計",
                  "インフラストラクチャーサービス",
                ]}
              />

              <div className=" w-[280px]">{""}</div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <CourseCard
                title="WEBデザインコース"
                icon={photoshop_icon}
                description="WEBデザイン基礎となるツールを学びます。バナーやLP、名刺などの制作を行なってデザインツールと共に必要な知識を学びます。"
                skills={[
                  "Photoshop",
                  "Illustrator",
                  "バナー",
                  "LP",
                  "コーディング",
                  "プロトタイプ",
                  "デザインルール",
                ]}
              />
              <CourseCard
                title="UI/UXコース"
                icon={figma_icon}
                description="プロトタイプを繋ぎ合わせてシステムデザインを制作します。デザインシステムなどの構築なども行い、情報設計のスキルを鍛えます。"
                skills={[
                  "Figma",
                  "XD",
                  "情報設計",
                  "プロトタイプ",
                  "UX",
                  "デザインシステム",
                  "機能要件定義",
                ]}
              />

              <div className=" w-[280px]">{""}</div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <CourseCard
                title="AIコース"
                icon={chatgpt_icon}
                description="ChatGPTをはじめとした様々な生成AIツールを学びます。ツールの活用方法だけでなく、AIの仕組みや倫理、実践的な活用方法を学びます。"
                skills={[
                  "AI基礎",
                  "機械学習",
                  "生成AI活用",
                  "業務効率",
                  "AI倫理・実践",
                  "プロンプト",
                ]}
              />
              <div className=" w-[280px]">{""}</div>
              <div className=" w-[280px]">{""}</div>
            </div>
          </div>
        </section>
        {/* 無料体験の CTA */}
        <CTA />

        {/* Growbase Labの学習サポート */}
        <Support />

        {/* 無料体験の CTA */}
        <CTA />

        {/* Growbase Labの転職サポート */}
        <Carrer />
      </main>
      <Footer />
    </>
  );
}
