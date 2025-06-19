import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routers/auth.router";
import adminRouter from "./routers/profile.router";
import documentsRouter from "./routers/documents.router";
import classesRouter from "./routers/classes.router";
import superAdminRouter from "./routers/superAdmin.router";
import notificationRouter from "./routers/notifications.router";
import requestToJoinRouter from "./routers/requestToJoin.router";
import Corporation from "./models/corporation.model";
dotenv.config();

const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const obj = {};

io.on("connection", (socket) => {
  socket.on("message", async (message) => {
    let corporations = await Corporation.find({
      name: { $regex: `^${message}`, $options: "i" },
    });
    let info = [];
    if (message == "") {
      socket.emit("results", []);
    } else {
      corporations.map((corp) => {
        info.push({
          name: corp.name,
          id: corp._id,
          telephone: corp.telephone,
          address: corp.adress,
        });
      });
      socket.emit("results", info);
    }
  });
});

mongoose
  .connect(
    `mongodb+srv://chess:${process.env.MONGOOSE_PASSWORD}@cluster0.unabrut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .catch((error) => console.log(error));

const allowedOrigins = [
  "http://localhost:3000",
  "http://ipfrontend:3000",
  "http://ipfrontend:33567",
  "https://instructor-plus.ssgs.cloud",
  "https://instructor-plus-backend.ssgs.cloud",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// post, get, delete, patch, put
app.use(authRouter);
app.use(adminRouter);
app.use(documentsRouter);
app.use(classesRouter);
app.use(superAdminRouter);
app.use(notificationRouter);
app.use(requestToJoinRouter);

// MVC
// client -> WAN -> server -> router ( handles endpoint ) -> middleware (prepare requests ) -> controller ( handles requests ) -> view ( formats reponse )

const PORT = process.env.PORT || 8000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
