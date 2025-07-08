// types/global.d.ts

export {};

declare global {
  interface Window {
    gtag: (
      command: string,
      event: string,
      params: {
        event_category: string;
        event_label: string;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
    dataLayer: Array<{
      [key: string]: string | number | boolean | undefined;
    }>;
  }
}
