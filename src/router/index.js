import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Aulas",
    name: "Aulas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Aulas.vue"),
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("UserLog");
      user = JSON.parse(user);
      if (user) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
  },
  {
    path: "/Aulas/assign",
    name: "Aula-assign",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AulasAssing.vue"),
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("UserLog");
      user = JSON.parse(user);
      if (user) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
  },
  {
    path: "/Reports",
    name: "Reports",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/charts.vue"),
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("UserLog");
      user = JSON.parse(user);
      if (user) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
  },
  {
    path: "/RegisterClass",
    name: "RegisterClass",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterClass.vue"),
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("UserLog");
      user = JSON.parse(user);
      if (user) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
  },
  {
    path: "/CovidAlerts",
    name: "CovidAlerts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CovidAlerts.vue"),
    beforeEnter(to, from, next) {
      let user = localStorage.getItem("UserLog");
      user = JSON.parse(user);
      if (user) {
        next();
      } else {
        next({
          name: "Login", // back to safety route //
        });
      }
    },
  },
  {
    path: "/Register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/Socioeconomic/:id",
    name: "Socioeconomic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Socioeconomic.vue"),
  },
  {
    path: "/Health/:id",
    name: "Health",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Health.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
