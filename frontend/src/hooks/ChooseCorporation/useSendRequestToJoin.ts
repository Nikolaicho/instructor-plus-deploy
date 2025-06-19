const useSendRequestToJoin = () => {
  const sendRequestToJoin = (corporationId: string | undefined) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sendRequestToJoin`, {
      method: "POST",
      body: JSON.stringify({
        corporationId: corporationId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };
  return { sendRequestToJoin };
};
export default useSendRequestToJoin;
