import { useState, useEffect } from "react";
const useIsAdmin = () => {
  const [isAdmin, setAdmin] = useState<boolean | null>(null);

  const getRole = async () => {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/isAdmin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      return res.json();
    });

    return res.isAdmin;
  };

  useEffect(() => {
    const authorize = async () => {
      let role = await getRole();
      setAdmin(role);
    };

    authorize();
  }, []);

  return { isAdmin };
};
export default useIsAdmin;
