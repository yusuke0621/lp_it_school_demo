export default function Vision() {
  return (
    <section>
      <div className="w-full relative background:black overflow-hidden flex flex-col items-center justify-center py-10 px-0 box-border text-center text-base text-color-white font-text-sp-short">
        {/* 🎯 背景テキスト：absoluteで最背面に配置 */}
        <div className="absolute bottom-[-20px] left-0 w-full z-0">
          <b className="marquee text-[16vw] md:text-[72px] text-white opacity-20 whitespace-nowrap">
            GROWBASE&nbsp;LAB&nbsp;GROWBASE&nbsp;LAB&nbsp;GROWBASE&nbsp;LAB
            GROWBASE&nbsp;LAB&nbsp;GROWBASE&nbsp;LAB&nbsp;GROWBASE&nbsp;LAB
            GROWBASE&nbsp;LAB&nbsp;GROWBASE&nbsp;LAB&nbsp;GROWBASE&nbsp;LAB
          </b>
        </div>

        {/* フロント側の本文 */}
        <div className="w-full mx-auto flex flex-col items-center justify-start gap-3.5 z-10">
          <b className="self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(90deg,_#ff2e9f_6%,_#4e31ff_41%,_#9916ff_79%,_#d52bff)] [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)] md:text-2xl">
            IT人材になりたい──
          </b>
          <div className="self-stretch relative text-xs text-white leading-[18px] md:leading-[30px] md:text-base md:mb-4">
            <p className="m-0">
              その想いを、Growbase Lab は全力で受け止めます。
            </p>
            <p className="m-0">そんな想いで誕生したサービスです。</p>
            <p className="m-0">
              「自分にできるのかな。」「何から始めればいいのか、そもそもわからない」
            </p>
            <p className="m-0">そんな不安、みんなが一度は通る道です。</p>
            <p className="m-0">
              Growbase Lab は、一歩目からあなたの隣で伴走し、
            </p>
            <p className="m-0">実践を交えながら、一緒に成長していきます。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
