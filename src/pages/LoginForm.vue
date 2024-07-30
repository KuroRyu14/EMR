<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="page-container window-height window-width row justify-center items-center"
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card rounded class="card-login shadow-24">
              <q-card-section class="bg-deep-purple-7">
                <h4 class="text-center text-h5 text-white q-my-md">
                  Electronic Medical Record
                </h4>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl" @submit.prevent="handleLogin">
                  <q-input
                    square
                    clearable
                    filled
                    v-model="username"
                    label="Username"
                    autocomplete="username"
                    :rules="[(val) => !!val || 'Username is required']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input
                    square
                    clearable
                    filled
                    v-model="password"
                    type="password"
                    label="Password"
                    autocomplete="current-password"
                    :rules="[(val) => !!val || 'Password is required']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                  <q-btn
                    unelevated
                    size="lg"
                    color="purple-4"
                    class="full-width text-white"
                    label="Sign In"
                    type="submit"
                    :loading="loading"
                    :disable="loading"
                  />
                </q-form>
              </q-card-section>
              <q-card-section class="text-center q-pa-sm">
                <q-btn
                  flat
                  label="Forgot your password?"
                  @click="forgotPassword"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "src/stores/authStore";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const loading = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const $q = useQuasar();

    const handleLogin = async () => {
      if (!username.value || !password.value) {
        $q.notify({
          color: "negative",
          position: "top",
          message: "Username and Password are required",
          icon: "report_problem",
        });
        return;
      }

      loading.value = true;
      try {
        await authStore.login(username.value, password.value);
        $q.notify({
          color: "positive",
          position: "top",
          message: "Login successful!",
          icon: "thumb_up",
        });
        switch (authStore.user.role) {
          case "Doctor":
            router.push("/doctor");
            break;
          case "Secretary":
            router.push("/secretary");
            break;
          case "Patient":
            router.push("/patient");
            break;
          default:
            router.push("/"); // Redirect to home if no specific role
        }
      } catch (error) {
        console.error("Login Error:", error.message);
        $q.notify({
          color: "negative",
          position: "top",
          message: error.message,
          icon: "error",
        });
      } finally {
        loading.value = false;
      }
    };

    const forgotPassword = () => {
      $q.notify({
        color: "info",
        position: "top",
        message: "Please contact support for password recovery.",
        icon: "info",
      });
    };

    return { username, password, handleLogin, forgotPassword, loading };
  },
};
</script>

<style>
.page-container {
  background: linear-gradient(#887ace, #4521e7);
}
.card-login {
  width: 100%;
  max-width: 600px; /* Max width for large screens */
  height: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 767px) {
  /* Adjustments for tablets and mobile phones */
  .card-login {
    max-width: 90%; /* Slightly smaller on smaller screens */
    margin: 10px;
  }
}
</style>
