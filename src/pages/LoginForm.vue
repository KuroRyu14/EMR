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
                  <q-input square clearable label="Email">
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input square clearable label="Password">
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginForm ",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
});
</script>

<style>
.page-container {
  background: linear-gradient(#887ace, #4521e7);
}
.card-login {
  width: 600px;
  height: 485px;
  border-radius: 20px;
}
</style>
