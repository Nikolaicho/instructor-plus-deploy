const useDeleteDocument = () => {
  const deleteDocument = (id: string) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteDocument`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
      credentials: "include",
    });
  };
  return { deleteDocument };
};
export default useDeleteDocument;
