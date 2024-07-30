<template>
  <div>
    <h2>Patient Detail</h2>
    <div v-if="patient">
      <p><strong>Family Name:</strong> {{ patient.family_name }}</p>
      <p><strong>First Name:</strong> {{ patient.first_name }}</p>
      <p><strong>Middle Name:</strong> {{ patient.middle_name }}</p>
      <p><strong>Birthday:</strong> {{ patient.birthday }}</p>
      <p><strong>Age:</strong> {{ patient.age }}</p>
      <p><strong>Sex:</strong> {{ patient.sex }}</p>
      <p><strong>Civil Status:</strong> {{ patient.civil_status }}</p>
      <p><strong>Address:</strong> {{ patient.address }}</p>
      <p><strong>Contact Number:</strong> {{ patient.contact_number }}</p>
      <p><strong>Email:</strong> {{ patient.email }}</p>
      <p><strong>Vital Signs:</strong> {{ patient.vital_signs }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PatientService from "@/services/PatientService";

export default {
  props: {
    id: Number,
  },
  setup(props) {
    const patient = ref(null);

    const fetchPatient = () => {
      PatientService.getPatient(props.id)
        .then((response) => {
          patient.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    onMounted(fetchPatient);

    return {
      patient,
    };
  },
};
</script>
