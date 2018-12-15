#!/usr/bin/env node

require('dotenv').config();

const Blynk = require('blynk-library');
const ping = require('ping');

const blynk = new Blynk.Blynk(process.env.TOKEN, {
  connector: new Blynk.TcpClient(options = {
    addr: process.env.SERVER,
    port: process.env.PORT,
  })
});

const PIN_PING = new blynk.VirtualPin(process.env.PIN_PING);

const testPing = () => {
  ping.promise.probe(process.env.PING_IP).then(res => {
    const ping = res.time || null;
    console.log(`Ping: ${ping} ms`);
    PIN_PING.write(ping);
  });
};

blynk.on('connect', () => {
  console.log('Blynk ready.');
  setInterval(testPing, 1000);
});

blynk.on('disconnect', () => {
  console.log('DISCONNECT');
  return process.exit(1);
});
