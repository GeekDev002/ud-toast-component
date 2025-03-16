import { JSX } from "react/jsx-runtime";

export interface ToastProps {
    type: "success" | "info" | "warning" | "error";
    message: string;
    onClose: () => void;
    animation?: "fade" | "pop" | "slide";
  }
  
  // Define the allowed positions
  export type PositionType = "top-left" | "top-right" | "center" | "top-full-width" | "bottom-full-width" | "bottom-left" | "bottom-right";
  
  // Define the properties of a Toast
  export interface ToastProps {
    type: "success" | "info" | "warning" | "error";
    title: string,
    message: string;
    duration: number;
    animation?: "fade" | "pop" | "slide";
  }
  
  // Define the return type of the hook
  export interface UseToastReturn {
    ToastComponent: JSX.Element;
    triggerToast: (ToastProps: ToastProps) => void;
  }