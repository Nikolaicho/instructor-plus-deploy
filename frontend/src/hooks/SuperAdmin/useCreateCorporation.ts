const useCreateCorporation = () => {
  const createCorporation = (data: any) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/createCorporation`, {
      method: "POST",

      body: JSON.stringify({
        data: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };
  return { createCorporation };
};
export default useCreateCorporation;
