import { useState } from "react";

const useGetTimeLeft = () => {
  //стейт за оставащото работно време
  const [workingTime, setWorkingTime] = useState<number>(0);

  const getTimeLeft = async (searchedDate: string) => {
    const params = new URLSearchParams({
      searchedDate: searchedDate,
    });

    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getTimeLeft?` + params,
      {
        method: "GET",
        credentials: "include",
      }
    );
    //time is send in milliseconds
    setWorkingTime((await response.json()).workTimeLeft / 60 / 1000);
  };
  return { getTimeLeft, workingTime };
};
export default useGetTimeLeft;
