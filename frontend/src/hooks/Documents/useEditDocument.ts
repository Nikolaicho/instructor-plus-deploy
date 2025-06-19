const useEditDocument = () => {
  const editDocument = (data: any) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/editDocument`, {
      method: "POST",
      body: JSON.stringify({
        data: data,
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return { editDocument };
};
export default useEditDocument;
