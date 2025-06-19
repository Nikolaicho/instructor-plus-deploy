import { useEffect, useState } from "react";

const useGetAllExams = (id: string | undefined) => {
  const [exams, setExams] = useState<any>();
  const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/getAllExams`;
  let params: URLSearchParams;
  if (id != undefined) {
    params = new URLSearchParams({
      candidateId: id,
    });
  }

  const getAllExams = async () => {
    const result = await fetch(`${baseUrl}?${params}`, {
      method: "GET",
      credentials: "include",
    });

    setExams(await result.json());
  };

  useEffect(() => {
    getAllExams();
  }, []);

  return { exams };
};
export default useGetAllExams;
