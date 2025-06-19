import { useEffect, useState } from "react";
import { Car } from "../../interfaces/documents.interface";
const useGetAllCars = () => {
  const [cars, setCars] = useState<Car[]>();

  const getAllCars = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getAllCars`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    setCars(await response.json());
  };
  useEffect(() => {
    getAllCars();
  }, []);
  return { cars };
};
export default useGetAllCars;
