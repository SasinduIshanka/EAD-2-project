import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/all';
const INSERT_REST_API_URL = 'http://localhost:8080/api/insert';
const GETBYID_REST_API_URL = 'http://localhost:8080/api/find';
const UPDATE_REST_API_URL = 'http://localhost:8080/api/update';
const DELETE_REST_API_URL = 'http://localhost:8080/api/delete';

class StuderntService {

    getAllDetails(){
        return axios.get(USERS_REST_API_URL);
    }

    createStudent(student){
        return axios.post(INSERT_REST_API_URL,student);
    }

    getStudentById(id){
        return axios.get(GETBYID_REST_API_URL+"/"+id);
    }
    updateStudent(student, id){
        return axios.put(UPDATE_REST_API_URL + '/' + id, student);
    }

    deleteStudent(id){
        return axios.delete(DELETE_REST_API_URL + '/' + id);
    }
  
}

export default new StuderntService();
