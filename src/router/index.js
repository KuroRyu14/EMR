import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { useAuthStore } from "src/stores/authStore";
import { Notify } from "quasar";

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const userRole = authStore.user?.role;

    if (to.meta.role && userRole !== to.meta.role) {
      Notify.create({
        color: "negative",
        position: "top",
        message: "Access denied. You do not have permission to view this page.",
        icon: "report_problem",
      });

      if (userRole) {
        next({ path: `/${userRole.toLowerCase()}` });
      } else {
        next({ path: "/login" });
      }
    } else {
      next();
    }
  });

  return Router;
});
