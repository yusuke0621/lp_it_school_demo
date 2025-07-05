export default function CTA() {
  return (
    <section className="bg-blue-secoundary">
      <div className="w-full text-7xl font-bold relative bg-aliceblue overflow-hidden flex flex-col items-center justify-start py-10 px-4 md:py-20 box-border gap-4 text-center text-53xl text-color-text font-text-sp-h3">
        <div
          className="w-full md:text-8xl absolute !m-[0] top-[0px] inline-block md:flex md:space-x-2 md:justify-start
        text-transparent !bg-clip-text [background:linear-gradient(-88.62deg,_rgba(24,_127,_195,_0.1),_rgba(8,_173,_255,_0.1))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left z-[0]"
        >
          <p className="m-0 ">GROWBASE</p>
          <p className="m-0 ">LAB</p>
        </div>
        <div
          className="w-full text-7xl md:text-8xl absolute !m-[0] bottom-[0] inline-block md:flex md:space-x-2 md:justify-end
        text-transparent !bg-clip-text [background:linear-gradient(-88.62deg,_rgba(24,_127,_195,_0.1),_rgba(8,_173,_255,_0.1))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right z-[1]"
        >
          <p className="m-0 ">GROWBASE</p>
          <p className="m-0 ">LAB</p>
        </div>
        <div className="relative md:flex md:justify-center font-bold text-2xl items-center md:text-3xl z-[2]">
          <p className="m-0">まずは無料相談会へ</p>
          <p className="m-0">ご参加ください</p>
        </div>
        <div className=" relative text-xs md:text-sm leading-[18px] z-[3] ">
          <div className=" md:flex md:justify-center ">
            <p className="m-0">「自分に向いているか分からない...」</p>
            <p className="m-0">「全くの未経験でできるのか不安...」</p>
          </div>
          <div className=" md:flex md:space-x-2">
            <p className="m-0">
              IT業界の第一歩を踏み出そうとしている方のために
            </p>
            <p className="m-0">
              何でも相談できる無料カウンセリングを実施しています。
            </p>
          </div>

          <p className="m-0">&nbsp;</p>
          <p className="m-0">お気軽にご参加ください。</p>
        </div>
        <div className=" relative z-[3]">
          <a
            href="#form"
            className="w-[361px] h-[56px] inline-flex items-center justify-center text-base text-white rounded-lg [background:linear-gradient(-88.62deg,_#9b18c3,_#08adff)] shadow hover:opacity-90 transition"
          >
            無料相談会に参加する
          </a>
        </div>
      </div>
    </section>
  );
}
