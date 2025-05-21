const app = require("./app");
const { Eureka } = require('eureka-js-client');

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const client = new Eureka({
  instance: {
    instanceId: 'appnode-3000', // Unik!
    app: 'appnode',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      '$': 3000,
      '@enabled': true,
    },
    vipAddress: 'appnode',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
  },
});

client.start();
