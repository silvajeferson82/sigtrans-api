const socket = io('http://localhost:3000');

const handleAlert = (alert) => {
  console.log(alert);
  socket.emit('alert', alert);
};

socket.on('message', () => {
  console.log('connected');
  handleAlert('test');
});
