// src/boot/axios.js
import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "http://192.168.1.69/EMR/backend/" });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
