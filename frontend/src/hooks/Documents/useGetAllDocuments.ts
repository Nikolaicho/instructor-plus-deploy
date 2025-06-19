import { useEffect, useState } from "react";
import { Document } from "../../interfaces/documents.interface";
const useGetAllDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>();
  useEffect(() => {
    async function getAllDocuments() {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/getAllDocuments`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      setDocuments(await response.json());
    }
    getAllDocuments();
  }, []);
  return { documents, setDocuments };
};
export default useGetAllDocuments;
