export interface FormValues {
  full_name: string;
  furigana: string;
  email: string;
  tel: string;
  contact_method: 'email' | 'phone' | 'either';
  counseling_method: 'online' | 'offline';
  preferred_date_1: string;
  preferred_date_2: string;
  preferred_date_3: string;
  message?: string | null;
}
