const useDeleteExams = () => {
  const deleteExam = (id: string) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteExam`, {
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
  return { deleteExam };
};
export default useDeleteExams;
