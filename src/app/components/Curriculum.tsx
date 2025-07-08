"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import engineer_course from "../../../public/images/engineer_course_new.svg";
import designer_course from "../../../public/images/designer_course_new.svg";
import ai_course from "../../../public/images/ai_course.svg";
import arrowIcon_2 from "../../../public/images/arrowIcon.svg";

export default function Curriculum() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const courseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = courseRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    courseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      courseRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  return (
    <section
      id="curriculum"
      className="w-full relative bg-black overflow-hidden
      flex flex-col items-center text-center py-10"
    >
      <div>
        <b className="relative text-2xl md:text-3xl text-white">
          カリキュラム内容
        </b>
      </div>

      <div
        className=" 
      flex flex-col md:flex-row items-center justify-center py-10 px-[16px] box-border gap-8 md:gap-16 text-center text-5xl text-color-text font-text-sp-short max-w-[1400px] mx-auto"
      >
        <div
          ref={(el: HTMLDivElement | null) => {
            courseRefs.current[0] = el;
          }}
          className={`course-item w-full bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col h-[360px] ${
            visibleItems.includes(0) ? "visible" : ""
          }`}
        >
          <Image
            src={engineer_course}
            alt=""
            width={214}
            height={143}
            className="mx-auto mb-6 object-contain"
          />
          <h3 className="text-base font-bold text-center mb-6 text-color-black">
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
                className="w-[100px] h-[25px] flex items-center justify-center text-xs bg-cornsilk text-color-black"
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
              <span className="text-xs text-color-black">一覧を見る</span>
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

        <div
          ref={(el: HTMLDivElement | null) => {
            courseRefs.current[1] = el;
          }}
          className={`course-item w-full bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col h-[360px] ${
            visibleItems.includes(1) ? "visible" : ""
          }`}
        >
          <Image
            src={designer_course}
            alt=""
            width={214}
            height={163}
            className="mx-auto mb-6 object-contain"
          />
          <h3 className="text-base font-bold text-center mb-6 text-color-black">
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
                className="w-[100px] h-[25px] flex items-center justify-center text-xs bg-cornsilk text-color-black"
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
              <span className="text-xs text-color-black">一覧を見る</span>
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

        <div
          ref={(el: HTMLDivElement | null) => {
            courseRefs.current[2] = el;
          }}
          className={`course-item w-full bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col h-[360px] ${
            visibleItems.includes(2) ? "visible" : ""
          }`}
        >
          <Image
            src={ai_course}
            alt=""
            width={214}
            height={163}
            className="mx-auto mb-6 object-contain"
          />
          <h3 className="text-base font-bold text-center mb-6 text-color-black">
            AIコース
          </h3>
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
                className="w-[100px] h-[25px] flex items-center justify-center text-xs bg-cornsilk text-color-black"
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
              <span className="text-xs text-color-black">一覧を見る</span>
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
