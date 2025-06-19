const useAuth = () => {
  async function Register(data: any) {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/register`,
      {
        method: "POST",
        body: JSON.stringify({
          data: data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
  }
  return { Register };
};
export default useAuth;
