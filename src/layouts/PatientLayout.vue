<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title> Patient Dashboard </q-toolbar-title>
        <q-btn dense flat icon="logout" @click="logout" label="Logout" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above>
      <q-list>
        <PatientSidebar
          v-for="link in links"
          :key="link.title"
          :title="link.title"
          :caption="link.caption"
          :link="link.link"
          :icon="link.icon"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page>
        <q-btn dense flat icon="menu" @click="toggleDrawer" class="q-mb-md" />
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import PatientSidebar from "components/Patients/PatientSidebar.vue";

export default {
  components: {
    PatientSidebar,
  },
  setup() {
    const drawerOpen = ref(false);
    const links = ref([
      {
        title: "Home",
        caption: "Dashboard",
        link: "/patient/home",
        icon: "home",
      },
      {
        title: "Medical Records",
        caption: "View your records",
        link: "/patient/records",
        icon: "medical_services",
      },
      {
        title: "Appointments",
        caption: "Manage your appointments",
        link: "/patient/appointments",
        icon: "event",
      },
      {
        title: "Messages",
        caption: "Contact your doctor",
        link: "/patient/messages",
        icon: "message",
      },
    ]);

    const toggleDrawer = () => {
      drawerOpen.value = !drawerOpen.value;
    };

    const logout = () => {
      // Add logout logic here
      this.$router.push("/login");
    };

    return { drawerOpen, links, toggleDrawer, logout };
  },
};
</script>
