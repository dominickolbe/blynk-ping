# Blynk Ping Tester (Node.js)

I created this application to monitor my local ping. This app is running on my Raspberry Pi and is sending the values to my own blynk server.

[Install your own blynk server using my docker image](https://github.com/dominickolbe/blynk-server-dockerized)

### Install node dependencies

```bash
// install node dependencies
yarn

// create .env file and add your server + token
cp .env.example .env
```

### Run

```bash
node index.js
```

### PM2

```bash
pm2 start pm2.json
```

## License

MIT License - 2018 - [Dominic Kolbe](https://dominickolbe.dk)
