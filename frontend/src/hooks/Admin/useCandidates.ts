import { useEffect, useState } from "react";

const useCandidates = () => {
  const [availableCandidates, setAvailableCandidates] = useState<string[]>();

  async function getCandidates() {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getAllAvailableCandidates`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    setAvailableCandidates((await response.json()).allCandidates);
  }

  useEffect(() => {
    getCandidates();
  }, []);

  return { availableCandidates };
};

export default useCandidates;
