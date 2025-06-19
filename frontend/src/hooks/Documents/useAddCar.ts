import { useState } from "react";
const useAddCar = () => {
  const [errorMessage, setErrorMessage] = useState();
  const addCar = async (data: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/addCar`,
      {
        method: "POST",
        body: JSON.stringify({
          data: data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    setErrorMessage((await response.json()).message);
  };

  return { addCar, errorMessage };
};
export default useAddCar;
