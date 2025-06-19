import { useState, useEffect } from "react";
const useIsSuperAdmin = () => {
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean | null>(null);

  const getRole = async () => {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/isSuperAdmin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      return res.json();
    });

    return res.isSuperAdmin;
  };

  useEffect(() => {
    const authorize = async () => {
      let role = await getRole();
      setIsSuperAdmin(role);
    };

    authorize();
  }, []);

  return { isSuperAdmin };
};
export default useIsSuperAdmin;
