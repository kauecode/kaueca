type GAEventName =
  | "page_view"
  | "click"
  | "scroll"
  | "custom_event";

declare global {
  interface Window {
    gtag: (command: "config" | "event", eventName: GAEventName, params?: Record<string, any>) => void;
  }
}
  
export const trackGAEvent = (eventName: GAEventName, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  } else {
    console.warn("Google Analytics is not initialized.");
  }
};