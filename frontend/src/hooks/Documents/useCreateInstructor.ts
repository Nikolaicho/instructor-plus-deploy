const useCreateInstructor = () => {
  const createInstructor = (data: any) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/createInstructor`, {
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
  return { createInstructor };
};
export default useCreateInstructor;
