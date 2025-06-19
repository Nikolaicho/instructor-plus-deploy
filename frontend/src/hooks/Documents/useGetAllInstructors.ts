import { useEffect, useState } from "react";
import { Instructor } from "../../interfaces/documents.interface";
const useGetAllInstructors = () => {
  const [instructors, setInstructors] = useState<Instructor[]>();
  useEffect(() => {
    async function getAllInstructors() {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/getAllInstructors`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      setInstructors(await response.json());
    }

    getAllInstructors();
  }, []);
  return { instructors };
};
export default useGetAllInstructors;
