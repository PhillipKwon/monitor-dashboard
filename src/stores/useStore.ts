import { defineStore } from "pinia";

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false,
  }),
  actions: {
    login(user: User) {
      this.user = user;
      this.isLoggedIn = true;
    },
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    }
  },
  getters: {
    isAdmin: (state) => state.user?.role === "admin",
  }
})