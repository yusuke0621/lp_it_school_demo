'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import arrowIcon from '../../../public/images/arrowIcon.svg';
import mainVisual from '../../../public/images/mainVisual.webp';
import mainVisual_2 from '../../../public/images/mainVisual_2.webp';
import mainVisual_3 from '../../../public/images/mainVisual_3.webp';
import mainVisual_4 from '../../../public/images/mainVisual_4.webp';
import mainVisual_5 from '../../../public/images/mainVisual_5.webp';

export default function Hero() {
  const slides = [
    {
      src: mainVisual,
      hashtag: '#手に職つけて生きていく',
      position: 'top-[12rem] md:top-[30rem] left-2',
      rotate: '-rotate-[8.4deg]',
      color: '[background:linear-gradient(-88.62deg,_#3718c3,_#a463ff)]',
    },
    {
      src: mainVisual_2,
      hashtag: '#私エンジニアになれるかも',
      position: 'top-[20px] md:top-[12rem] left-[10px]',
      rotate: '-rotate-[0deg]',
      color: '[background:linear-gradient(-88.62deg,_#c31895,_#ff63a9)]',
    },
    {
      src: mainVisual_3,
      hashtag: '#自由な場所で働ける',
      position: 'top-[12rem] md:top-[24rem] right-[40px]',
      rotate: '-rotate-[9.4deg]',
      color: '[background:linear-gradient(-88.62deg,_#18c34b,_#7ade32)]',
    },
    {
      src: mainVisual_4,
      hashtag: '#毎日仕事が楽しい',
      position: 'top-[8rem] md:top-[20rem] right-[10px]',
      rotate: 'rotate-[12deg]',
      color: '[background:linear-gradient(-88.62deg,_#18a4c3,_#2a95e2)]',
    },
    {
      src: mainVisual_5,
      hashtag: '#自分のやりがいを見つけた',
      position: 'top-[13rem] md:top-[30rem] left-[8px]',
      rotate: 'rotate-[-4deg]',
      color: '[background:linear-gradient(-88.62deg,_#c31818,_#e27d2a)] ',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4秒ごとに切り替え
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[current];

  return (
    <section className='relative overflow-hidden pt-2 md:pl-8'>
      {/* バブル背景 */}
      <div className='bubble-bg'>
        <span className='bubble'></span>
        <span className='bubble'></span>
        <span className='bubble'></span>
        <span className='bubble'></span>
        <span className='bubble'></span>
      </div>
      {/* SCROLL 矢印（PCのみ表示） */}
      <div className='md:flex absolute top-7/11 md:top-10/11 left-0 -translate-y-1/2 flex-col items-center gap-1'>
        <span className='text-xs tracking-widest [writing-mode:vertical-rl]'>
          SCROLL
        </span>
        <Image src={arrowIcon} alt='矢印' width={12} height={12} />
      </div>
      <div className='flex flex-col md:items-end justify-between  md:w-ful mx-auto pl-4 md:px-0'>
        {/* カルーセル画像（スマホでは上／PCでは右） */}
        <div className='order-2 md:order-2 w-full md:w-[60%] h-[268px] md:h-[530px] relative mt-0 md:z-1 md:m-0'>
          <Image
            src={currentSlide.src}
            alt={`carousel-${current}`}
            className='object-cover transition-opacity duration-1000 rounded-lg h-[268px] md:h-[590px]'
            priority
          />

          {/* ハッシュタグ */}
          <div
            className={`absolute ${currentSlide.position} ${currentSlide.rotate}`}
          >
            <div className='inline-block px-2 py-1 bg-white origin-top-left'>
              <span
                className={`text-base md:text-3xl font-bold text-transparent ${currentSlide.color} !bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]`}
              >
                {currentSlide.hashtag}
              </span>
            </div>
          </div>
          {/* スライダーインジケーター */}
          <div className='absolute bottom-[20px] md:bottom-[-40px] right-2 flex gap-2 z-20'>
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1 md:h-[2px] rounded-full transition-all duration-300 ${
                  current === i
                    ? 'w-5 bg-gray-600'
                    : 'w-4 bg-gray-300 opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
        <div className='md:absolute md:z-10 md:top-6 md:left-4 md:top-12 md:left-16 md:max-w-[550px] '>
          <h1 className='text-lg md:text-[40px] font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#187fc3] to-[#08adff] whitespace-pre-line'>
            未経験からIT転職を実現！
            <br className='hidden md:block' />
            <span className='block md:hidden'>
              スキル習得 × キャリア支援で未来を変える
            </span>
            <span className='hidden md:block'>
              スキル習得 × キャリア支援で未来を変える
            </span>
          </h1>

          <div className='hidden md:block text-2xlmd:text-sm text-gray-700 my-4 font-bold'>
            <p>現場で活躍できる実践的なスキルを学び、</p>
            <p>IT企業への転職を目指せる！</p>

            <div className='ms:hidden flex md:justify-start mt-4 '>
              <a
                href='#form'
                className='relative z-10 inline-block px-6 md:px-16 py-2 md:py-4 bg-gradient-to-r from-[#9b18c3] to-[#08adff] text-white text-sm md:text-2xl font-semibold rounded shadow hover:opacity-90 transition'
              >
                無料相談会に参加する
              </a>
            </div>
          </div>
        </div>
        <div className='order-3 md:hidden text-xs text-gray-700 mb-4 font-bold'>
          <p>現場で活躍できる実践的なスキルを学び、</p>
          <p>IT企業への転職を目指せる！</p>
        </div>
      </div>
      <div className='md:pt-12'>{''}</div>
      <div className='md:hidden flex items-center justify-center md:justify-start mb-4 md:pl-8'>
        <a
          href='#form'
          className='relative z-10 inline-block px-6 md:px-16 py-2 md:py-4 bg-gradient-to-r from-[#9b18c3] to-[#08adff] text-white text-sm md:text-2xl font-semibold rounded shadow hover:opacity-90 transition'
        >
          無料相談会に参加する
        </a>
      </div>
    </section>
  );
}
