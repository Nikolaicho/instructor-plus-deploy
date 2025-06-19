import { io } from "socket.io-client";

const SOCKET_SERVER_URL =
  process.env.REACT_APP_BACKEND_URL || "http://ipbackend:8000";
console.log("WebSocket Connecting to:", SOCKET_SERVER_URL);

export const socket = io(SOCKET_SERVER_URL, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});
