/// <reference types="vite/client" />

interface Window {
  posthog?: {
    capture: (eventName: string, properties?: Record<string, any>) => void;
    identify: (distinctId: string, userProperties?: Record<string, any>) => void;
    reset: () => void;
  };
}
