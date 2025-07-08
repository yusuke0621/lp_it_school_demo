import Image from "next/image";
import Link from "next/link";
import logolImage from "../../../public/images/growbase-lab_logologo_bk.png";
import closeIcon from "../../../public/images/hamburgerClose.svg";

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenuCurricurum({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-[#111111] px-6 py-4 flex flex-col">
      {/* ヘッダー部分 */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/" onClick={onClose}>
          <Image
            src={logolImage}
            alt="Growbase Labロゴ"
            width={114}
            height={36}
            className="brightness-0 invert"
          />
        </Link>
        <button onClick={onClose}>
          <Image
            src={closeIcon}
            alt="閉じる"
            width={24}
            height={24}
            className="brightness-0 invert"
          />
        </button>
      </div>
      {/* メニューリンク */}
      <nav className="flex-1 flex flex-col space-y-4 text-base font-medium">
        <a
          href="#DetailCourse"
          onClick={onClose}
          className="bg-gradient-to-r from-[#ff2e9f] via-[#4e31ff] via-[#9916ff] to-[#d52bff] inline-block text-transparent bg-clip-text hover:opacity-80 transition-opacity"
        >
          カリキュラム一覧
        </a>
        <a
          href="#support"
          onClick={onClose}
          className="bg-gradient-to-r from-[#ff2e9f] via-[#4e31ff] via-[#9916ff] to-[#d52bff] inline-block text-transparent bg-clip-text hover:opacity-80 transition-opacity"
        >
          学習サポート
        </a>
        <a
          href="#career"
          onClick={onClose}
          className="bg-gradient-to-r from-[#ff2e9f] via-[#4e31ff] via-[#9916ff] to-[#d52bff] inline-block text-transparent bg-clip-text hover:opacity-80 transition-opacity"
        >
          転職サポート
        </a>
      </nav>

      {/* CTAボタン */}
      <Link
        href="/contact"
        onClick={onClose}
        className="mt-auto text-white text-sm font-semibold px-4 py-3 rounded text-center [background:linear-gradient(90deg,_#ff2e9f_6%,_#4e31ff_41%,_#9916ff_79%,_#d52bff)] shadow hover:opacity-90 transition"
      >
        無料相談会に参加する
      </Link>
    </div>
  );
}
