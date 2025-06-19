import { useEffect, useState } from "react";

const useGetAllTransactions = (id: string | undefined) => {
  const [transactions, setTransactions] = useState<any>();
  let params: URLSearchParams;
  if (id != undefined) {
    params = new URLSearchParams({
      id: id,
    });
  }
  const getAllTransactions = async () => {
    let result = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getAllTransactions?` + params,
      {
        method: "GET",
      }
    );
    setTransactions(await result.json());
  };
  useEffect(() => {
    getAllTransactions();
  }, []);
  return { transactions };
};
export default useGetAllTransactions;
