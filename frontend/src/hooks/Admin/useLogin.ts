import React from "react";
import { useState } from "react";

interface UserInfo {
  role: string;
  id: string;
}

const useLogIn = () => {
  const logIn = async (data: any) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/logIn`, {
      method: "POST",
      body: JSON.stringify({
        data: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const result: UserInfo = await response.json();
    return result;
  };
  return { logIn };
};
export default useLogIn;
