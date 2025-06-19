const useSignNewExam = (id: string | undefined) => {
  const signNewExam = (result: string, type: string, date: string) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/signNewExam`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        result: result,
        type: type,
        date: date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };
  return { signNewExam };
};
export default useSignNewExam;
