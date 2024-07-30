<template>
  <div>
    <h2>Patient List</h2>
    <ul>
      <li v-for="patient in patients" :key="patient.id">
        <router-link
          :to="{ name: 'PatientDetail', params: { id: patient.id } }"
        >
          {{ patient.family_name }}, {{ patient.first_name }}
          {{ patient.middle_name }}
        </router-link>
        <button @click="editPatient(patient.id)">Edit</button>
        <button @click="deletePatient(patient.id)">Delete</button>
      </li>
    </ul>
    <router-link to="/add-patient">Add New Patient</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PatientService from "@/services/PatientService";

export default {
  setup() {
    const patients = ref([]);

    const fetchPatients = () => {
      PatientService.getPatients()
        .then((response) => {
          patients.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const deletePatient = (id) => {
      PatientService.deletePatient(id)
        .then(() => {
          fetchPatients();
          alert("Patient deleted successfully");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    onMounted(fetchPatients);

    return {
      patients,
      deletePatient,
    };
  },
};
</script>
