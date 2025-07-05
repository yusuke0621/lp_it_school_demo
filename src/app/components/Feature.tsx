'use client';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import features_1 from '../../../public/images/adobe-stock-4725746772.webp';
import features_2 from '../../../public/images/adobe-stock-3642848732.webp';
import features_3 from '../../../public/images/adobe-stock-5690156661.webp';
import rounded01 from '../../../public/images/a-otf_01.svg';
import rounded02 from '../../../public/images/a-otf_02.svg';
import rounded03 from '../../../public/images/a-otf_03.svg';
import viewmore from '../../../public/images//viewmore.svg';

export default function Feature() {
  type Feature = {
    title: string[];
    image: StaticImageData;
    list: StaticImageData;
    description: string;
    modalDescription: string;
  };
  const features = [
    {
      title: ['未経験の不安を', '段階的なカリキュラムでゼロに'],
      image: features_1,
      list: rounded01,
      description:
        'スタカレでは、IT初心者のために「基礎からステップアップできるカリキュラム」を用意しています。\n知識ゼロの状態からでも、無理なくスキルを身につけていける仕組みがあります。',
      modalDescription:
        'スタカレでは、IT初心者のために「基礎からステップアップできるカリキュラム」を用意しています。\n知識ゼロの状態からでも、無理なくスキルを身につけていける仕組みがあります。\n\nたとえば…\n【ステップ1】ITってなに？というところから始める「超基礎講座」\n【ステップ2】実際に手を動かしながら学べる「実践トレーニング」\n【ステップ3】現場で通用するスキルまで伸ばす「応用・選択カリキュラム」\nさらに、自分のスピードに合わせて進められるので、焦らず学べるのもポイント。\n\nつまずいても講師にすぐ相談できるので、「一人で挫折」はさせません。 ',
    },
    {
      title: ['机上の学習では終わらせない', '“働く”に直結するカリキュラム'],
      image: features_2,
      list: rounded02,
      description:
        'スタカレのカリキュラムは、ただ学ぶだけで終わりません。\n現役エンジニア/デザイナーが作ったカリキュラムなので実際の現場で使われているツールや手法を取り入れ、仕事で活かせる“リアルなスキル”を段階的に学べます。',
      modalDescription:
        'スタカレのカリキュラムは、ただ学ぶだけで終わりません。\n現役エンジニア/デザイナーが作ったカリキュラムなので実際の現場で使われているツールや手法を取り入れ、仕事で活かせる“リアルなスキル”を段階的に学べます。\n\n実際によく使われるトレンドのツールやプログラミング言語やUI設計、チーム開発、レビュー文化など現場の考え方も習得できます。\n\n「知ってる」だけではなく、「できる」状態に。スタカレでは、未経験からでも“現場で活躍できる自分”を目指せます。',
    },
    {
      title: ['学んだその先へ', '“働く”までを、伴走します'],
      image: features_3,
      list: rounded03,
      description:
        'スタカレでは、学び始める前に転職のプロによるキャリア面談からスタートします。\nキャリア面談を経て、それぞれの「どうすれば仕事にできるか」までを考えたカリキュラム目標を決めてサポートしていきます。',
      modalDescription:
        'スタカレでは、学び始める前に転職のプロによるキャリア面談からスタートします。\nキャリア面談を経て、それぞれの「どうすれば仕事にできるか」までを考えたカリキュラム目標を決めてサポートしていきます。\n\nまた、転職支援、ポートフォリオ/履歴書添削、模擬面接、企業紹介など、未経験でも一歩踏み出せる仕組みが整っています。希望者には副業やフリーランスの第一歩サポートも。\n\n「手に職をつけて終わり」ではなく、「現場に出る」「収入を得る」までしっかり伴走。目指す未来へ、二人三脚で進んでいきましょう。',
    },
  ];
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  return (
    <section
      id='feature'
      className='bg-white py-10 px-4 md:px-20 text-color-text'
    >
      <h2 className='text-center text-lg md:text-2xl font-bold '>スタカレ</h2>
      <h3 className='text-center text-2xl md:text-3xl font-bold mb-10'>
        3つの特徴
      </h3>

      <div className='flex flex-col gap-6'>
        {features.map((feature, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center md:items-start gap-6`}
          >
            <Image
              src={feature.image}
              alt=''
              width={345}
              height={201}
              className='w-full md:w-[453px] h-auto rounded-lg'
            />
            <div>
              <div className='flex items-start gap-3 mb-3 '>
                <Image
                  src={feature.list}
                  alt=''
                  width={79}
                  height={48}
                  className=' mt-4 md:w-[120px]'
                />
                <div className='mt-4'>
                  <h4 className='text-base md:text-2xl font-bold  leading-snug'>
                    {feature.title.map((line, j) => (
                      <p key={j} className='m-0'>
                        {line}
                      </p>
                    ))}
                  </h4>
                </div>
              </div>
              <p className='text-xs md:text-base mt-2 leading-relaxed text-left'>
                {feature.description.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className='flex justify-end'>
                <button
                  className='flex justify-end gap-3 mb-3 cursor-pointer'
                  onClick={() => setSelectedFeature(feature)}
                >
                  <Image
                    src={viewmore}
                    alt=''
                    width={91}
                    height={18}
                    className=' mt-2'
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedFeature && (
        <div
          className='fixed inset-0 bg-black/70 flex items-center justify-center z-50
        opacity-100 md:scale-100 transition-opacity transition-transform duration-300 ease-out'
        >
          <div
            className='bg-white w-[90%] max-w-md md:max-w-7xl px-4 py-16 rounded-lg shadow-lg relative
           '
          >
            {/* 閉じるボタン */}
            <button
              onClick={() => setSelectedFeature(null)}
              className='absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold'
            >
              ×
            </button>

            {/* モーダル内容 */}
            <div
              className={`flex flex-col ${
                selectedFeature.image === features_2
                  ? 'md:flex-row-reverse'
                  : 'md:flex-row'
              } gap-6 md:gap-4 items-start`}
            >
              <Image
                src={selectedFeature.image}
                alt=''
                width={345}
                height={201}
                className='w-full md:w-[420px] h-auto rounded-lg mb-4'
              />
              <div>
                <div className='flex items-start gap-3 mb-3'>
                  <Image
                    src={selectedFeature.list}
                    alt=''
                    width={79}
                    height={48}
                    className='mt-2 md:w-[120px]'
                  />
                  <div>
                    <h4 className='text-base md:text-2xl font-bold leading-snug'>
                      {selectedFeature.title.map((line, j) => (
                        <p key={j} className='m-0'>
                          {line}
                        </p>
                      ))}
                    </h4>
                  </div>
                </div>
                <p className='text-xs md:text-base mt-2 leading-relaxed text-left text-base'>
                  {selectedFeature.modalDescription
                    .split('\n')
                    .map((line, index) => (
                      <span
                        key={index}
                        className={
                          line.includes(
                            'つまずいても講師にすぐ相談できるので、「一人で挫折」はさせません。',
                          )
                            ? 'text-blue-secondary font-bold'
                            : line.includes(
                                  'ツールやプログラミング言語やUI設計、チーム開発、レビュー文化',
                                )
                              ? 'text-blue-secondary font-bold'
                              : line.includes(
                                    '未経験でも一歩踏み出せる仕組みが整っています。',
                                  )
                                ? 'text-blue-secondary font-bold'
                                : ''
                        }
                      >
                        {line}
                        <br />
                      </span>
                    ))}
                </p>
              </div>
            </div>
            <div className='mt-16 flex justify-center '>
              <button
                onClick={() => setSelectedFeature(null)}
                className='px-14 py-2 text-sm text-[#08adff] border border-[#08adff] rounded-md hover:bg-[#08adff] hover:text-white transition'
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
