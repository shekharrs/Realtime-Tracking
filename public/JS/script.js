const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
    const { longitude, latitude } = position.coords;
    socket.emit("send-location", { longitude, latitude });
    },
    (error) => {
        console.error(error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
);
}
