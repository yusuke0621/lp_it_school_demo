"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../utils/contactFormSchema";
import type { FormValues } from "../types/contactFormTypes";

const FORM_ENDPOINT =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKGR0bqL7pvZjuWzqGQJ9OeHQNMg5g6y9vxGYJb8YakKGqKw/formResponse";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  const contactOptions = ["email", "phone", "either"] as const;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    // 初期値設定
    defaultValues: {
      contact_method: "email",
      counseling_method: "online",
      preferred_date_1: "2025-04-01T19:30",
      preferred_date_2: "2025-04-02T19:30",
      preferred_date_3: "2025-04-03T19:30",
    },
  });

  const sendGAEvent = () => {
    if (typeof window !== "undefined" && "gtag" in window) {
      window.gtag("event", "submit", {
        event_category: "form",
        event_label: "無料カウンセリング申し込み",
      });
    }
  };

  const onValid = async (data: FormValues) => {
    setIsSubmitting(true);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value ?? "");
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formData,
      });

      if (response.ok) {
        sendGAEvent();
        setStatus("送信完了しました！");
        reset();
        setTimeout(() => {
          router.push("/ThanksPage");
        }, 2000);
      } else {
        setStatus("送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      console.error("エラー:", error);
      setStatus("送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="form"
      className="w-full relative bg-white overflow-hidden
      flex flex-col items-center py-10 px-6"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
        無料キャリア相談の申し込み
      </h2>
      <form
        onSubmit={handleSubmit(onValid)}
        className="space-y-4 md:w-120"
        noValidate
      >
        <div>
          <label className="block text-sm md:text-base font-medium mb-2 font-semibold">
            お名前
            <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded ml-1">
              必須
            </span>
          </label>
          <input
            type="text"
            {...register("full_name")}
            placeholder="山田 太郎"
            className={`w-full p-3 border rounded ${
              errors.full_name
                ? "bg-err-bg border-red-400"
                : "bg-white border-gray-300"
            }`}
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm">{errors.full_name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 font-semibold">
            お名前（フリガナ）
            <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded">
              必須
            </span>
          </label>

          <input
            type="text"
            {...register("furigana")}
            placeholder="ヤマダ タロウ"
            className={`w-full p-3 border rounded ${
              errors.full_name
                ? "bg-err-bg border-red-400"
                : "bg-white border-gray-300"
            }`}
          />
          {errors.furigana && (
            <p className="text-red-500 text-sm">{errors.furigana.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 font-semibold">
            メールアドレス{" "}
            <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded">
              必須
            </span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="sample@mail.com"
            className={`w-full p-3 border rounded ${
              errors.full_name
                ? "bg-err-bg border-red-400"
                : "bg-white border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 font-semibold">
            電話番号{" "}
            <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded">
              必須
            </span>
          </label>
          <input
            type="tel"
            {...register("tel")}
            placeholder="080-1234-5678"
            className={`w-full p-3 border rounded ${
              errors.full_name
                ? "bg-err-bg border-red-400"
                : "bg-white border-gray-300"
            }`}
          />
          {errors.tel && (
            <p className="text-red-500 text-sm">{errors.tel.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 font-semibold">
            ご希望の連絡手段{" "}
            <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded">
              必須
            </span>
          </label>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
            {contactOptions.map((method) => (
              <label key={method} className="inline-flex items-center md:mr-3">
                <input
                  type="radio"
                  value={method}
                  {...register("contact_method")}
                  className="mr-2 "
                />
                {
                  {
                    email: "メール",
                    phone: "電話",
                    either: "どちらでも構わない",
                  }[method]
                }
              </label>
            ))}
          </div>
          {errors.contact_method && (
            <p className="text-red-500 text-sm">
              {errors.contact_method.message}
            </p>
          )}
        </div>

        {/* カウンセリング方法 */}
        <div>
          <label className="block text-sm font-medium mb-1 font-semibold">
            カウンセリング方法
          </label>
          <div className="flex flex-col">
            {["online"].map((method) => (
              <label key={method} className="inline-flex items-center">
                <input
                  type="radio"
                  value={method}
                  {...register("counseling_method")}
                  className="mr-2 "
                />
                {
                  {
                    online: "オンラインのみ",
                  }[method]
                }
              </label>
            ))}
          </div>
          {errors.counseling_method && (
            <p className="text-red-500 text-sm">
              {errors.counseling_method.message}
            </p>
          )}
        </div>

        {/* カウンセリング予約希望日 */}
        <div>
          <label className="block text-m md:text-2xl font-medium font-semibold text-center  mt-14 mb-6">
            カウンセリング予約希望日
          </label>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium font-semibold mb-1">
                第一希望日{" "}
                <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded">
                  必須
                </span>
              </label>
              <input
                type="datetime-local"
                {...register("preferred_date_1")}
                onChange={() => {
                  setHasSelected(true);
                }}
                className={`w-full p-3 border rounded ${
                  errors.preferred_date_1
                    ? "bg-err-bg border-red-400"
                    : hasSelected
                      ? "text-black border-gray-300"
                      : "text-gray-500 border-gray-300"
                }`}
              />
              {errors.preferred_date_1 && (
                <p className="text-red-500 text-sm">
                  {errors.preferred_date_1.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium font-semibold mb-1">
                第二希望日{" "}
                <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded">
                  必須
                </span>
              </label>
              <input
                type="datetime-local"
                {...register("preferred_date_2")}
                onChange={() => {
                  setHasSelected(true);
                }}
                className={`w-full p-3 border rounded ${
                  errors.preferred_date_1
                    ? "bg-err-bg border-red-400"
                    : hasSelected
                      ? "text-black border-gray-300"
                      : "text-gray-500 border-gray-300"
                }`}
              />
            </div>
            {errors.preferred_date_2 && (
              <p className="text-red-500 text-sm">
                {errors.preferred_date_2.message}
              </p>
            )}

            <div>
              <label className="block text-sm font-medium font-semibold mb-1">
                第三希望日{" "}
                <span className="bg-red-required text-white text-[10px] py-1 px-2 rounded">
                  必須
                </span>
              </label>
              <input
                type="datetime-local"
                {...register("preferred_date_3")}
                onChange={() => {
                  setHasSelected(true);
                }}
                className={`w-full p-3 border rounded ${
                  errors.preferred_date_1
                    ? "bg-err-bg border-red-400"
                    : hasSelected
                      ? "text-black border-gray-300"
                      : "text-gray-500 border-gray-300"
                }`}
              />
            </div>
            {errors.preferred_date_3 && (
              <p className="text-red-500 text-sm">
                {errors.preferred_date_3.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium font-semibold mb-1">
            お問い合わせ{" "}
            <span className="bg-blue-any text-white text-[10px] py-1 px-2 rounded">
              任意
            </span>
          </label>
          <textarea
            {...register("message")}
            placeholder="ご記入ください"
            className="w-full p-3 border border-gray-300 rounded h-54"
          ></textarea>
        </div>
        <p className="text-center text-[10px] ">
          ※確認画面はございませんので入力内容の確認お願いいたします。
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-3 text-white text-sm font-semibold px-4 py-4 rounded [background:linear-gradient(-88.62deg,_#9b18c3,_#08adff)] shadow hover:opacity-90 transition p-6
             ${
               isSubmitting
                 ? "bg-gray-400 cursor-not-allowed"
                 : "bg-blue-600 hover:bg-blue-700"
             }`}
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </section>
  );
}
