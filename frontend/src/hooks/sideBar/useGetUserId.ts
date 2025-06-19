const useGetUserId = () => {
  const getUserId = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getProfileId`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return (await result.json()).id;
  };
  return { getUserId };
};
export default useGetUserId;
