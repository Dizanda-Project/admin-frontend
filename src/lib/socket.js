import { io } from 'socket.io-client';

const apiUrl = import.meta.env.VITE_ADMIN_API_URL || 'http://localhost:5000/api';
const socketUrl = apiUrl.replace(/\/api\/?$/, '');

const isServerlessWorker = socketUrl.includes('workers.dev');

export const socket = io(socketUrl, {
  autoConnect: !isServerlessWorker,
  reconnectionAttempts: 2,
  withCredentials: true,
});
