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
                <div
                  class="absolute-bottom-right q-pr-md"
                  style="transform: translateY(50%)"
                >
                  <q-btn fab icon="add" color="purple-4" />
                </div>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl">
                  <q-input
                    square
                    clearable
                    filled
                    v-model="username"
                    label="Username"
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
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-lg">
                <q-btn
                  unelevated
                  size="lg"
                  color="purple-4"
                  class="full-width text-white"
                  label="Sign In"
                />
              </q-card-actions>
              <q-card-section class="text-center q-pa-sm">
                <p class="text-grey-6">Forgot your password?</p>
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
import { useAuthStore } from "stores/authStore";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const authStore = useAuthStore();

    const handleLogin = async () => {
      try {
        await authStore.login(username.value, password.value);
        alert(`Welcome, ${authStore.user.role}!`);
        // Redirect or perform actions based on role
      } catch (error) {
        alert(error.message);
      }
    };

    return { username, password, handleLogin };
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
