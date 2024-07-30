<template>
  <div>
    <h2>{{ isEdit ? "Edit Patient" : "Add New Patient" }}</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="family_name">Family Name:</label>
        <input type="text" v-model="patient.family_name" required />
      </div>
      <div>
        <label for="first_name">First Name:</label>
        <input type="text" v-model="patient.first_name" required />
      </div>
      <div>
        <label for="middle_name">Middle Name:</label>
        <input type="text" v-model="patient.middle_name" />
      </div>
      <div>
        <label for="birthday">Birthday:</label>
        <input type="date" v-model="patient.birthday" required />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" v-model="patient.age" required />
      </div>
      <div>
        <label for="sex">Sex:</label>
        <select v-model="patient.sex" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label for="civil_status">Civil Status:</label>
        <input type="text" v-model="patient.civil_status" />
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" v-model="patient.address" />
      </div>
      <div>
        <label for="contact_number">Contact Number:</label>
        <input type="text" v-model="patient.contact_number" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="patient.email" />
      </div>
      <div>
        <label for="vital_signs">Vital Signs:</label>
        <textarea v-model="patient.vital_signs"></textarea>
      </div>
      <button type="submit">{{ isEdit ? "Update" : "Add" }} Patient</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import PatientService from "@/services/PatientService";

export default {
  props: {
    isEdit: Boolean,
    patientData: Object,
  },
  setup(props) {
    const patient = ref(
      props.isEdit
        ? { ...props.patientData }
        : {
            family_name: "",
            first_name: "",
            middle_name: "",
            birthday: "",
            age: "",
            sex: "",
            civil_status: "",
            address: "",
            contact_number: "",
            email: "",
            vital_signs: "",
          },
    );

    const handleSubmit = () => {
      if (props.isEdit) {
        PatientService.updatePatient(patient.value.id, patient.value)
          .then(() => {
            alert("Patient updated successfully");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        PatientService.addPatient(patient.value)
          .then(() => {
            alert("Patient added successfully");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };

    return {
      patient,
      handleSubmit,
    };
  },
};
</script>
