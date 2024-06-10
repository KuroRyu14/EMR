const routes = [
  {
    path: "/",
    component: () => import("pages/LoginForm.vue"), // Login page
  },
  // Doctor-specific routes
  {
    path: "/doctor",
    component: () => import("layouts/DoctorLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Dashboard-Doctor.vue"),
        meta: { role: "Doctor" },
      },
      // Future expansion for doctor-specific pages
    ],
  },
  // Secretary-specific routes
  {
    path: "/secretary",
    component: () => import("layouts/SecretaryLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Dashboard-Secretary.vue"),
        meta: { role: "Secretary" },
      },
      // Future expansion for secretary-specific pages
    ],
  },
  // Patient-specific routes
  {
    path: "/patient",
    component: () => import("layouts/PatientLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Dashboard-Patient.vue"),
        meta: { role: "Patient" },
      },
      // Future expansion for patient-specific pages
    ],
  },
  // Catch-all route for handling 404 errors
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
