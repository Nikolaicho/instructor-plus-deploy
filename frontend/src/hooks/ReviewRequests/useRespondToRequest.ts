const useRespondToRequest = () => {
  const respondToRequest = (
    isAccepted: boolean,
    userId: string,
    requestId: string
  ) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/respondToRequest`, {
      method: "POST",
      body: JSON.stringify({
        isAccepted: isAccepted,
        userId: userId,
        requestId: requestId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };
  return { respondToRequest };
};
export default useRespondToRequest;
