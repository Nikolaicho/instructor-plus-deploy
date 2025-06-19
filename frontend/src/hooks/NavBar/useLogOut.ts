const useLogOut = () => {
  const logOut = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/logOut`, {
      method: "POST",
      credentials: "include",
    });
  };
  return { logOut };
};
export default useLogOut;
