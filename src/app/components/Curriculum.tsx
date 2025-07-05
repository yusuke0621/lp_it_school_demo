"use client";

import Link from "next/link";
import Image from "next/image";
import engineer_course from "../../../public/images/engineer_course_new.svg";
import designer_course from "../../../public/images/designer_course_new.svg";
import ai_course from "../../../public/images/ai_course.svg";
import arrowIcon_2 from "../../../public/images/arrowIcon.svg";

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="w-full relative [background:linear-gradient(-88.62deg,_#187fc3,_#08adff)] overflow-hidden
      flex flex-col items-center text-center py-10"
    >
      <div>
        <b className="relative text-2xl md:text-3xl text-white">
          カリキュラム内容
        </b>
      </div>

      <div
        className=" 
      flex flex-col md:flex-row items-center justify-center py-10 px-[16px] box-border gap-8 md:gap-16 text-center text-5xl text-color-white font-text-sp-short max-w-[1400px] mx-auto"
      >
        <div className="w-full bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col h-[360px]">
          <Image
            src={engineer_course}
            alt=""
            width={214}
            height={143}
            className="mx-auto mb-6 object-contain"
          />
          <h3 className="text-base font-bold text-center mb-6">
            エンジニアコース
          </h3>
          <div className="grid grid-cols-3 gap-x-2 gap-y-3 justify-items-center mb-auto">
            {[
              "#HTML/CSS",
              "#JavaScript",
              "#React",
              "#SQL",
              "#インフラ",
              "#Java",
            ].map((tag) => (
              <span
                key={tag}
                className="w-[100px] h-[25px] flex items-center justify-center text-xs bg-cornsilk text-color-text"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/DetailCourse"
            className="flex items-center justify-end gap-2 mt-4"
          >
            <div className="w-28 flex justify-end gap-2">
              <span className="text-xs text-blue-secondary">一覧を見る</span>
              <Image
                className="w-4 h-4 rounded-full p-1 bg-gradient-to-r from-[#187fc3] to-[#08adff] flex items-center justify-center"
                width={4}
                height={4}
                alt=""
                src={arrowIcon_2}
              />
            </div>
          </Link>
        </div>

        <div className="w-full bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col h-[360px]">
          <Image
            src={designer_course}
            alt=""
            width={214}
            height={163}
            className="mx-auto mb-6 object-contain"
          />
          <h3 className="text-base font-bold text-center mb-6">
            デザイナーコース
          </h3>
          <div className="grid grid-cols-3 gap-x-2 gap-y-3 justify-items-center mb-auto">
            {[
              "#デザイン基礎",
              "#UI/UX",
              "#Figma",
              "#LP制作",
              "#バナー制作",
              "#コーディング",
            ].map((tag) => (
              <span
                key={tag}
                className="w-[100px] h-[25px] flex items-center justify-center text-xs bg-cornsilk text-color-text"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/DetailCourse"
            className="flex items-center justify-end gap-2 mt-4"
          >
            <div className="w-28 flex justify-end gap-2">
              <span className="text-xs text-blue-secondary">一覧を見る</span>
              <Image
                className="w-4 h-4 rounded-full p-1 bg-gradient-to-r from-[#187fc3] to-[#08adff] flex items-center justify-center"
                width={4}
                height={4}
                alt=""
                src={arrowIcon_2}
              />
            </div>
          </Link>
        </div>

        <div className="w-full bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col h-[360px]">
          <Image
            src={ai_course}
            alt=""
            width={214}
            height={163}
            className="mx-auto mb-6 object-contain"
          />
          <h3 className="text-base font-bold text-center mb-6">AIコース</h3>
          <div className="grid grid-cols-3 gap-x-2 gap-y-3 justify-items-center mb-auto">
            {[
              "#AI基礎",
              "#機械学習",
              "#生成AI活用",
              "#業務効率",
              "#AI倫理・実践",
              "#プロンプト",
            ].map((tag) => (
              <span
                key={tag}
                className="w-[100px] h-[25px] flex items-center justify-center text-xs bg-cornsilk text-color-text"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/DetailCourse"
            className="flex items-center justify-end gap-2 mt-4"
          >
            <div className="w-28 flex justify-end gap-2">
              <span className="text-xs text-blue-secondary">一覧を見る</span>
              <Image
                className="w-4 h-4 rounded-full p-1 bg-gradient-to-r from-[#187fc3] to-[#08adff] flex items-center justify-center"
                width={4}
                height={4}
                alt=""
                src={arrowIcon_2}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
