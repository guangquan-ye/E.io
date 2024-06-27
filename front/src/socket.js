import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000';

export const socket = io("http://localhost:3000");

//   const ioClient = new Server({
//     cors: {
//       origin: "http://localhost:3000"
//     }
//   });
  
//   ioClient.listen(5173);