import React, { useRef } from 'react';

import { IoMdClose } from "react-icons/io";
import { ToastProps } from "../types";
import "./ToastC.css";

const UDToast: React.FC<ToastProps> = ({
  type = 'info',
  title = '',
  message = '',
  onClose,
  animation = "fade",
}) => {

  const toastRef = useRef<HTMLDivElement>(null);
  
  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";

  return (
    <div className='ud-toast' role={ariaRole} tabIndex={-1} ref={toastRef}>
      <h4 className='ud-toast--title'>{title}</h4>
      <p className='ud-toast--message'>{message}</p>
      <span className='icon-close'><IoMdClose /></span>
    </div>
  )
};

export default UDToast;