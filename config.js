export default {
  server: {
    port: Number(process.env.PORT) || 2333,
    host: "0.0.0.0",
    password: "saltybotstrongpass"
  },

  cluster: {
    enabled: true,
    workers: 1
  },

  playerUpdateInterval: 1000,

  maxSearchResults: 10,
  maxAlbumPlaylistLength: 200,
  trackStuckThresholdMs: 10000,
  zombieThresholdMs: 30000,

  cluster: {
    enabled: true
  }
}
