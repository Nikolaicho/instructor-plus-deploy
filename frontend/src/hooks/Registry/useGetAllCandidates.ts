import { useEffect, useState } from "react";
import { Candidate } from "../../interfaces/candidate.interface";
function useGetAllCandidates() {
  const [userInfo, setUserInfo] = useState<Candidate[]>();
  async function getAllCandidates() {
    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getAllAvailableCandidates`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    setUserInfo(await response.json());
  }
  useEffect(() => {
    getAllCandidates();
  }, []);
  return { userInfo };
}
export default useGetAllCandidates;
