/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PositionType, ToastProps, UseToastReturn } from "../types";
import UDToastComponent from "../components/UDToastComponent";

const useToast = (
  position: PositionType = "bottom-right"
): UseToastReturn => {

  const [notifications, setNotifications] = useState<(ToastProps & { id: string })[]>([]);

  const triggerToast = useCallback((toastProps: ToastProps) => {
    const toastId = uuidv4();

    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id: toastId, ...toastProps },
    ]);

    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((n) => n.id !== toastId)
      );
    }, toastProps.duration);
  }, []);

  const handleToastClose = (index: number) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = [...prevNotifications];
      updatedNotifications.splice(index, 1);
      return updatedNotifications;
    });
  };

  const ToastComponent = useMemo(() => (
    <div className={`toast-container ${position} ${position.split("-")[0]}`}>
      {notifications.map((notification, index) => (
        <UDToastComponent
          key={notification.id}
          {...notification}
          onClose={() => handleToastClose(index)}
        />
      ))}
    </div>
  ), [notifications, position]);

  return { ToastComponent, triggerToast };

};

export default useToast;
