import { useEffect, useState } from "react";
import { Notification } from "../../interfaces/notification.interface";
const useGetNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>();
  const [notificationsLoaded, setNotificationsLoaded] =
    useState<boolean>(false);
  useEffect(() => {
    const awaitFetch = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/getNotifications`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      setNotifications(await response.json());
      setNotificationsLoaded(true);
    };
    awaitFetch();
  }, []);
  return { notifications, notificationsLoaded };
};
export default useGetNotification;
