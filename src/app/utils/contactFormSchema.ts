import * as yup from 'yup';
import type { ObjectSchema } from 'yup';
import type { FormValues } from '../types/contactFormTypes';

export const contactFormSchema: ObjectSchema<FormValues> = yup.object({
  full_name: yup.string().required('お名前は必須です'),
  furigana: yup
    .string()
    .required('フリガナは必須です')
    .matches(/^[ァ-ンヴー\s　]+$/, '全角カタカナで入力してください'),
  email: yup
    .string()
    .email('正しいメールアドレスを入力してください')
    .required('メールアドレスは必須です'),
  tel: yup
    .string()
    .required('電話番号は必須です')
    .matches(
      /^0\d{1,4}-\d{1,4}-\d{3,4}$/,
      '電話番号の形式が正しくありません（例: 080-1234-5678）',
    ),
  contact_method: yup
    .mixed<'email' | 'phone' | 'either'>()
    .oneOf(['email', 'phone', 'either'], '連絡手段を選択してください')
    .required('連絡手段を選択してください'),
  counseling_method: yup
    .mixed<'online' | 'offline'>()
    .oneOf(['online', 'offline'], 'カウンセリング方法を選択してください')
    .required('カウンセリング方法を選択してください'),
  preferred_date_1: yup.string().required('第一希望日を選択してください'),
  preferred_date_2: yup.string().required('第二希望日を選択してください'),
  preferred_date_3: yup.string().required('第三希望日を選択してください'),
  message: yup.string().nullable().notRequired(),
});
