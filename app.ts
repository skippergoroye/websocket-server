// server.js
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen for chat messages
  socket.on("chatMessage", ({ sender, message }) => {
    console.log(`${sender}: ${message}`);

    // Broadcast to all clients
    io.emit("chatMessage", { sender, message });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

httpServer.listen(4000, () => {
  console.log("✅ Socket.IO server running at http://localhost:4000");
});
