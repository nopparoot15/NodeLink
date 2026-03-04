export default {
  server: {
    port: Number(process.env.PORT) || 2333,
    host: "0.0.0.0",
    password: "saltybotstrongpass"
  },

  playerUpdateInterval: 1000,

  maxSearchResults: 10,

  cluster: {
    enabled: true
  }
}
