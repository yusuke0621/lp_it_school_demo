import Image from 'next/image';
import Link from 'next/link';
import logolImage from '../../../public/images/star-college-yoko-color-1.webp';

export default function Thanks() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-6 bg-white text-center'>
      {/* ロゴ */}
      <div className='mb-8 '>
        <Image
          src={logolImage}
          alt='スタカレロゴ'
          width={226}
          height={72}
          className='md:w-[428px]'
        />
      </div>

      {/* メッセージ */}
      <h1 className='text-2xl md:text-3xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#187fc3] to-[#8c27d6] mt-13'>
        無料相談会へのお申し込み
        <br />
        ありがとうございます
      </h1>

      {/* 補足 */}
      <p className='text-xs md:text-base text-gray-500 mt-4'>
        担当者よりご連絡差し上げますので
        <br />
        しばらくお待ちください。
      </p>

      {/* TOPへ戻るボタン */}
      <div className='mt-42'>
        <Link
          href='/'
          className='inline-block border border-[#187fc3] text-[#187fc3] px-13 py-2 text-sm md:text-base rounded hover:bg-[#187fc3] hover:text-white transition'
        >
          TOPへ戻る
        </Link>
      </div>
    </div>
  );
}
