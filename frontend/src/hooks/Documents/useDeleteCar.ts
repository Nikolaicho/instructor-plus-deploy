const useDeleteCar = () => {
  const deleteCar = (data: any) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteCar`, {
      method: "POST",
      body: JSON.stringify({
        data: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return { deleteCar };
};
export default useDeleteCar;
