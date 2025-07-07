import Image from "next/image";
import Link from "next/link";
import logolImage from "../../../public/images/star-college-yoko-color-1.webp";
import closeIcon from "../../../public/images/hamburgerClose.svg";

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white px-6 py-4 flex flex-col">
      {/* ヘッダー部分 */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/" onClick={onClose}>
          <Image
            src={logolImage}
            alt="Growbase Lab ロゴ"
            width={114}
            height={36}
          />
        </Link>
        <button onClick={onClose}>
          <Image src={closeIcon} alt="閉じる" width={24} height={24} />
        </button>
      </div>
      {/* メニューリンク */}
      <nav className="flex-1 flex flex-col space-y-4 text-blue-secondary text-base font-medium">
        <a href="#feature" onClick={onClose}>
          Growbase Lab の特徴
        </a>
        <a href="#curriculum" onClick={onClose}>
          カリキュラムについて
        </a>
        <a href="/DetailCourse" onClick={onClose}>
          カリキュラム一覧
        </a>
        <a href="#support" onClick={onClose}>
          学習サポート
        </a>
        <a href="#career" onClick={onClose}>
          転職サポート
        </a>
        <a href="#faq" onClick={onClose}>
          よくある質問
        </a>
      </nav>

      {/* CTAボタン */}
      <Link
        href="/contact"
        onClick={onClose}
        className="mt-auto text-white text-sm font-semibold px-4 py-3 rounded text-center rounded [background:linear-gradient(-88.62deg,_#9b18c3,_#08adff)] shadow hover:opacity-90 transition"
      >
        無料相談会に参加する
      </Link>
    </div>
  );
}
