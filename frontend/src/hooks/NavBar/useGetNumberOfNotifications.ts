import { useEffect, useState } from "react";

const useGetNumberOfNotifications = () => {
  const [number, setNumber] = useState<number>();
  useEffect(() => {
    const awaitFetch = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/getNotifications`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      setNumber((await response.json()).length);
    };
    awaitFetch();
  }, []);
  return { number };
};
export default useGetNumberOfNotifications;
