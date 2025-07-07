import Image from "next/image";
import logo_black from "../../../public/images//logo_black.webp";

export default function Header() {
  return (
    <footer className=" pt-10 px-4 md:px-30 bg-black text-white text-sm">
      <div className="mb-6">
        <Image
          className="overflow-hidden shrink-0 z-[3]"
          width={123}
          height={40}
          alt=""
          src={logo_black}
        />
      </div>
      {/* ドメイン取得後遷移先URLを明示的に指定 */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-10 mb-10 text-xs md:text-base md:w-[50%]">
        <a href="#feature">Growbase Labの特徴</a>
        <a href="/contact">お問い合わせ</a>

        <a href="#curriculum">カリキュラムについて</a>
        <a href=""></a>
        <a href="/DetailCourse">カリキュラム一覧</a>
        <a href=""></a>
        <a href="#support">学習サポート</a>
        <a href=""></a>
        <a href="#career">転職サポート</a>
        <a href=""></a>
        <a href="#faq">よくある質問</a>
      </div>

      {/* コピーライト */}
      <p className="text-xs text-center text-white/70">
        © Growbase Lab Inc. ALL right reserved
      </p>
    </footer>
  );
}
