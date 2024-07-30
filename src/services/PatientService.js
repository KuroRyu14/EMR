import axios from "axios";

const API_URL = "http://webinargo.live/EMRConnect/backend/patients.php";

class PatientService {
  getPatients() {
    return axios.get(API_URL);
  }

  getPatient(id) {
    return axios.get(`${API_URL}?id=${id}`);
  }

  addPatient(patient) {
    return axios.post(API_URL, patient);
  }

  updatePatient(id, patient) {
    return axios.put(`${API_URL}?id=${id}`, patient);
  }

  deletePatient(id) {
    return axios.delete(`${API_URL}?id=${id}`);
  }
}

export default new PatientService();
