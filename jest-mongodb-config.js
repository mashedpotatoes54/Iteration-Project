module.exports = {
    mongodbMemoryServerOptions: {
      instance: {
        dbName: 'jest'
      },
      binary: {
        version: '6.0.0', // Version of MongoDB
        skipMD5: true
      },
      autoStart: false
    }
  };