// src/stores/authStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    login(username, password) {
      // Dummy logic to simulate login
      const users = {
        doctor: { username: "doctor", role: "Doctor", password: "doc123" },
        secretary: {
          username: "secretary",
          role: "Secretary",
          password: "sec123",
        },
        patient: {
          username: "patient",
          role: "Patient",
          password: "123",
        },
      };

      const user = users[username];
      if (user && user.password === password) {
        this.user = user;
        this.isLoggedIn = true;
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },
  },
});
