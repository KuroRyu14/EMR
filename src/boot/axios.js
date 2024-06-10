// src/boot/axios.js
import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "http://192.168.1.69/" }); // Use your PHP server IP

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios; // Make axios available throughout your app
  app.config.globalProperties.$api = api; // Dedicated API interaction
});

export { api };
