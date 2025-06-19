const useAddDocument = () => {
  const addDocument = async (data: any) => {
    const result = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/createNewDocument`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: data,
        }),
        credentials: "include",
      }
    );
    return await result.json();
  };
  return { addDocument };
};
export default useAddDocument;
