import { useEffect, useState } from "react";
interface formattedRequest {
  requestId: string;
  userId: string;
  fisrtName: string;
  lastName: string;
}
const useGetAllRequests = () => {
  const [requests, setRequests] = useState<formattedRequest[]>([]);
  const getAllRequests = async () => {
    let result = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getAllRequests`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    setRequests(await result.json());
  };
  useEffect(() => {
    getAllRequests();
  }, []);
  return { requests, setRequests };
};
export default useGetAllRequests;
