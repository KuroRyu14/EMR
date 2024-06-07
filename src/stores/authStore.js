// authStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    userData: null,
  }),
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    login(userData) {
      this.isLoggedIn = true;
      this.userData = userData;
      // Here, you might also want to store a token or other data in localStorage
    },
    logout() {
      this.isLoggedIn = false;
      this.userData = null;
      // Don't forget to clear any stored tokens or data in localStorage
    },
  },
});
