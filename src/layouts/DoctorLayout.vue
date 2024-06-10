<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Doctor Dashboard </q-toolbar-title>
        <q-btn dense flat icon="logout" @click="logout" label="Logout" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>
