const useDeleteInstructor = () => {
  const deleteInstructor = (data: any) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteInstructor`, {
      method: "POST",
      body: JSON.stringify({
        data: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return { deleteInstructor };
};

export default useDeleteInstructor;
