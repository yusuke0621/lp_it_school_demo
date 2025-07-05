export default function Vision() {
  return (
    <section>
      <div className='w-full relative [background:linear-gradient(-88.62deg,_#187fc3,_#08adff)] overflow-hidden flex flex-col items-center justify-center py-10 px-0 box-border text-center text-base text-color-white font-text-sp-short'>
        {/* 🎯 背景テキスト：absoluteで最背面に配置 */}
        <div className='absolute bottom-[-20px] left-0 w-full z-0'>
          <b className='marquee text-[16vw] md:text-[72px] text-white opacity-20 whitespace-nowrap'>
            ITSTAR&nbsp;COLLAGE&nbsp;ITSTAR&nbsp;COLLAGE
            ITSTAR&nbsp;COLLAGE&nbsp;ITSTAR&nbsp;COLLAGE
            ITSTAR&nbsp;COLLAGE&nbsp;ITSTAR&nbsp;COLLAGE
          </b>
        </div>

        {/* フロント側の本文 */}
        <div className='w-full mx-auto flex flex-col items-center justify-start gap-3.5 z-10'>
          <b className='self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(90deg,_#d9e648,_#f1ab49)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)] md:text-2xl'>
            あなたの「〇〇になりたい」を叶えるために
          </b>
          <div className='self-stretch relative text-xs text-white leading-[18px] md:leading-[30px] md:text-base md:mb-4'>
            <p className='m-0'>
              スタカレはIT未経験者の第一歩をサポートしたい。
            </p>
            <p className='m-0'>そんな想いで誕生したサービスです。</p>
            <p className='m-0'>
              「自分にできるのかな。」「何が分からないのか分からない。」
            </p>
            <p className='m-0'>そんな不安を一緒に解決するために</p>
            <p className='m-0'>
              併走しながらあなたの成長をサポートしていきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
