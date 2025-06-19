import { useNavigate } from "react-router-dom";

const useGetProfileId = () => {
  const navigate = useNavigate();
  const redirectToProfilePage = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getProfileId`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    navigate("/profile/" + (await response.json()).id);
  };
  return { redirectToProfilePage };
};
export default useGetProfileId;
