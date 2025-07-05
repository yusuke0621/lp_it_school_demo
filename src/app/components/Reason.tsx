import Image from 'next/image';
import reason_1 from '../../../public/images/reason_1.svg';
import reason_2 from '../../../public/images/reason_2.svg';

export default function CTA() {
  return (
    <section className=' px-4 [background:linear-gradient(-88.62deg,_#187fc3,_#08adff)]'>
      <div className='w-full relative [background:linear-gradient(-88.62deg,_#187fc3,_#08adff)] overflow-hidden flex flex-col items-center justify-start py-10 box-border gap-[25px] text-left text-base text-color-white font-text-sp-short'>
        <div className='self-stretch flex flex-row items-center justify-center gap-1 md:mb-6'>
          <div className='w-20 md:w-40 relative bg-white h-0.5' />
          <b className='relative text-white text-base md:text-2xl'>
            未経験でも採用される理由
          </b>
          <div className='w-20 md:w-40 relative bg-white h-0.5' />
        </div>
        <div className='self-stretch  md:h-[500px] flex flex-col md:flex-row justify-center gap-6 text-center '>
          <div className='md:w-[468px] rounded-lg bg-color-white flex flex-col items-center  p-8 box-border relative gap-2 bg-white'>
            <Image
              className='w-[232px] md:w-[300px] h-[114px]  overflow-hidden shrink-0 z-[3]'
              width={232}
              height={114}
              alt=''
              src={reason_1}
            />
            <b className='w-[260px] md:w-[441px] md:text-2xl relative inline-block z-[1]'>
              <span className='block '>現場で役立つ実践的スキルが学べる</span>
            </b>
            <div className='w-[260px] md:w-[441px] relative text-xs md:text-base leading-[18px] text-left inline-block  tracking-wide '>
              <p className='m-0'>
                「現場で本当に求められるスキル」を意識したカリキュラムを提供しています。
              </p>
              <p className='m-0'>&nbsp;</p>
              <p className='m-0'>
                デザインツールの使い方やコーディングの基本はもちろん、
                現場で頻出するトラブル対応や、チームでのやり取り・進行管理、最新技術までカバー。
              </p>
              <p className='m-0'>&nbsp;</p>
              <p className='m-0'>
                さらに、実際の業務を想定した「模擬プロジェクトや課題制作」を通じて、
                「知っている」から「使える」へとスキルを落とし込んでいきます。
              </p>
              <p className='m-0'>&nbsp;</p>
              <p className='m-0'>
                現場のリアルに近い環境で学ぶことで、就職・転職後にも自信を持って働ける力が身につきます。
              </p>
            </div>
          </div>
          <div className='md:w-[468px] rounded-lg bg-color-white flex flex-col items-center  p-8 box-border relative gap-2 bg-white'>
            <Image
              className='w-[232px] md:w-[300px] h-[114px]  overflow-hidden shrink-0 z-[3]'
              width={121}
              height={114}
              alt=''
              src={reason_2}
            />
            <b className='w-[260px] md:w-[441px] md:text-2xl relative inline-block z-[1]'>
              <span className='block'>企業と連携したカリキュラム</span>
            </b>
            <div className='w-[260px] md:w-[441px] relative text-xs md:text-base leading-[18px] text-left inline-block  tracking-wide'>
              <p className='m-0'>
                スタカレで使用しているカリキュラムは、実は&quot;IT人材を多数輩出してきた企業研修プログラムがベース”になっています。
              </p>
              <p className='m-0'>
                運営会社では、このプログラムを通じて未経験者を育成し、現在も多くのエンジニアが現場で活躍中。
              </p>
              <p className='m-0'>
                “実際にプロを育ててきたカリキュラム”だから、信頼性も実績も違います。
              </p>
              <p className='m-0'>&nbsp;</p>
              <p className='m-0'>
                学べる内容も、現場でそのまま使われているツールやスキルが中心。
              </p>
              <p className='m-0'>
                バナー制作やコーディングだけでなく、UI設計・チーム開発・レビュー文化までカバー。
              </p>
              <p className='m-0'>&nbsp;</p>
              <p className='m-0 font-semibold'>
                「知ってる」から「使える」へ。
              </p>
              <p className='m-0'>
                就職・転職後に即戦力として働ける力を、段階的に身につけていけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
