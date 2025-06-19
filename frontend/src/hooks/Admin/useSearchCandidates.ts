import { useState } from "react";
import { Candidate } from "../../interfaces/candidate.interface";
const useSearchCandidate = () => {
  const [candidates, setCandidates] = useState<Candidate[]>();
  const searchCandidates = async (name: string) => {
    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/searchCandidates`,
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    setCandidates(await response.json());
  };

  return { searchCandidates, candidates };
};
export default useSearchCandidate;
