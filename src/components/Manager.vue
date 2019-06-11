<template>
  <div>
    <b-container class="profile-col">
      <br>
      <div class="text-center" v-show="welcomePage">
        <h1>Welcome to your page</h1>
        <br>
      </div>
      <div class="text-center" v-show="welcomePage">
        <p>Your Profile</p>
        <p>{{this.$route.params.Email}}</p>
        <b-button variant="success" @click="getByManagerId()">Details</b-button>
        <b-button variant="warning" @click="Logout()">Logout</b-button>
      </div>
    </b-container>
    <b-container>
      <div v-show="showManagerTable">
        <table class="table">
          <thead>
            <tr>
              <th>ManagerId</th>
              <th>ManagerName</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in arr" :key="index">
              <td>{{item.ManagerId}}</td>
              <td>{{item.Name}}</td>
              <td>{{item.Role}}</td>
              <td>
                <b-button variant="info" @click="showEmployeeTable=true,getByEmployeeId(item.ManagerId)">Employee Details</b-button>
              </td>>
            </tr>
          </tbody>
        </table>
        <b-button variant="success" style="float: right;" @click="pageshowfn()">Back</b-button>
      </div>
    </b-container>
    <b-container>
      <div v-show="showEmployeeTable">
        <table class="table">
          <thead>
            <tr>
              <th>EmployeeId</th>
              <th>Employee Name</th>
              <th>Employee Email</th>
              <th>Employee Role</th>
              <th>Employee ManagerId</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="form in arr" :key="form.ManagerId">
              <td>{{form.EmpId}}</td>
              <td>{{form.EmpName}}</td>
              <td>{{form.Email}}</td>
              <td>{{form.Role}}</td>
              <td>{{form.ManagerId}}</td>
            </tr>
          </tbody>
        </table>
        <b-button variant="success" style="float: right;" @click="pageshowfn()">Back</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "profile",
  data() {
    return {
      arr: [],
      welcomePage: true,
      showManagerTable: false,
      showEmployeeTable: false,
      value: {
        projectId: "",
        projectName: "",
        Name: "",
        ManagerId: ""
      },
      item: {
        Email: "",
        Name: "",
        ManagerId: "",
        Role:""
      },
      form: {
        ManagerId: "",
        EmpId: "",
        EmpName: "",
        Role: "",
        EmployeeEmail: "",
        PreOrganization: ""
      }
    };
  },
  methods: {
    getData: function() {
      this.welcomePage = false;
      this.showManagerTable = false;
      this.showTable = true;
      this.showEmployeeTable = false;
      axios({
        method: "GET",
        url: "http://localhost:3000/api/projectdetails",
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then(
        response => {
          console.log(response);
          this.arr = response.data;
        },
        error => {
          console.log(error);
        }
      );
    },
    getByManagerId: function() {
      this.welcomePage = false;
      this.showManagerTable = true;
      //this.showEmployeeTable = false;
      const Email = this.$route.params.Email;
      axios({
        method: "GET",
        url: `http://localhost:3000/api/getBy/${Email}`,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then(
        response => {
          console.log(response);
          this.arr = response.data;
        },
        error => {
          this.changePass = false;
          console.log(error.response.data.message);
          alert(error.response.data.message);
          this.$router.go(-1);
        }
      );
    },
    getByEmployeeId: function(ManagerId) {
      this.welcomePage = false;
      this.showManagerTable = false;
      //this.showEmployeeTable = true;
      axios({
        method: "GET",
        url: `http://localhost:3000/api/getManagerEmployee/${ManagerId}`,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then(
        response => {
          console.log(response);
          this.arr = response.data;
        },
        error => {
          console.log(error);
        }
      );
    },
    Logout: function() {
      //this.$router.go();
      this.$store.commit("removeToken");
      this.$router.go(-1);
    },
    pageshowfn: function() {
      this.welcomePage = true;
      this.showManagerTable = false;
      this.showEmployeeTable = false;
    }
  }
};
</script>

<style>
</style>

