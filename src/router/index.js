<<<<<<< Updated upstream
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
=======
import { createRouter, createWebHashHistory } from "vue-router";
>>>>>>> Stashed changes

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue'),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
