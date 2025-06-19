const useDeleteTransaction = () => {
  const deleteTransaction = (id: string) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteTransaction`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };
  return { deleteTransaction };
};

export default useDeleteTransaction;

//return {deleteTransaction}
