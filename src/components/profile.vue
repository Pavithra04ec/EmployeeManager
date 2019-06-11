<template>
  <div>
    <b-container class="profile-col">
      <div class="text-center" v-show="welcomePage">
        <h1>Welcome to your page</h1>
        <p>Profile</p>
        <p>{{this.$route.params.Email}}</p>
        <b-button variant="success" @click="changePass=false,getDataByEmail()">Details</b-button>
        <b-button variant="warning" @click="Logout()">Logout</b-button>
      </div>
    </b-container>
    <b-container class="table-row-col">
      <div>
        <div v-for="x in arr" :key="x.Email">
          <b-row>
            <b-button
              v-show="lableShow"
              style="float:left"
              variant="outline-primary"
              @click="EdtData(),value=x"
            >Edit</b-button>
          </b-row>
          <b-row>
            <ul>
              <li v-show="lableShow">EmpName :{{x.EmpName}}</li>
              <li v-show="inputShow">
                EmpName :
                <input
                  v-model="value.EmpName"
                  type="text"
                  class="form-control"
                  placeholder="Enter EmpName"
                >
              </li>
            </ul>
          </b-row>
          <b-row>
            <ul>
              <li v-show="lableShow">ManagerId:{{x.ManagerId}}</li>
              <li v-show="inputShow">
                ManagerId:
                <input
                  v-model="value.ManagerId"
                  type="text"
                  class="form-control"
                  placeholder="Enter ManagerId"
                >
              </li>
            </ul>
          </b-row>
          <b-row>
            <ul>
              <li v-show="lableShow">Role :{{x.Role}}</li>
              <li v-show="inputShow">
                Role :
                <input
                  v-model="value.Role"
                  type="text"
                  class="form-control"
                  placeholder="Enter Address"
                >Role
              </li>
            </ul>
          </b-row>
        </div>
        <b-button v-show="savebtn" style="float:left" @click="putData()">Save</b-button>
        <b-row class="my-1">
          <b-col sm="4">
            <b-button
              v-show="changePass"
              variant="outline-danger"
              style="float:left"
              @click="passShow=true,inputShow=false,lableShow=false,changePass=false,welcomePage=false"
            >Change Password</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container v-show="passShow">
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-default">Password:</label>
        </b-col>
        <b-col sm="4" v-show="passShow">
          <b-form-input
            v-validate="'required'"
            v-model="item.Password"
            name="Password"
            type="password"
            required
            placeholder="Enter Password"
          ></b-form-input>
          <span>{{ errors.first('Password') }}</span>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-default">ConfirmPassword:</label>
        </b-col>
        <b-col sm="4">
          <b-form-input
            v-validate="'required|confirmed:Password'"
            v-model="item.ConfirmPassword"
            name="ConfirmPassword"
            type="password"
            required
            placeholder="Enter your ConfirmPassword"
          ></b-form-input>
          <span>{{ errors.first('ConfirmPassword') }}</span>
        </b-col>
      </b-row>
      <b-button variant="primary" style="float:center;" @click="updatePassword()">Update Password</b-button>
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
      savebtn: false,
      inputShow: false,
      lableShow: false,
      passShow: false,
      changePass: false,
      welcomePage:true,
      value: {
        EmpName: "",
        Email: "",
        ManagerId: "",
        Role: "",
        Token: ""
      },
      item: {
        Password: "",
        ConfirmPassword: ""
      }
    };
  },
  methods: {
    getData: function() {
      //const Email = this.$route.params.Email;
      axios({
        method: "GET",
        url: "http://localhost:3000/api/get"
        // headers : {
        //     Authorization : `Bearer ${token}`
        //   }
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
    getDataByEmail: function() {
      this.changePass = true;
      this.lableShow = true;
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
    putData: function() {
      var Email = this.value.Email;
      var data = {
        EmpName: this.value.EmpName,
        ManagerId: this.value.ManagerId,
        Role: this.value.Role,
      };
      console.log(data);
      axios({
        method: "PUT",
        url: `http://localhost:5000/api/Employee/update/${Email}`,
        data,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`
        }
      })
        .then(response => {
          console.log("result  :" + response);
         //this.arr.push(response);
          this.inputShow = false;
          this.lableShow = true;
          this.savebtn = false;
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    EdtData: function() {
      this.savebtn = true;
      this.inputShow = true;
      this.lableShow = false;
    },
    Logout: function() {
      //this.$router.go();
      this.$store.commit("removeToken");
      this.$router.go(-1);
    },
    updatePassword: function() {
      const Password = this.item.Password;
      const ConfirmPassword = this.item.ConfirmPassword;
      if (Password === ConfirmPassword) {
        var Email = this.$route.params.Email;
        var data = {
          Password: this.item.Password
        };
        console.log(data);
        return axios
          .put(`http://localhost:3000/api/putPass/${Email}`, data)
          .then(response => {
            console.log("result  :" + response);
            alert("Password updated successfully");
            this.passShow = false;
            this.$store.commit("removeToken");
            //this.$router.push(`/profile/${Email}`)
            //this.$router.go(-1);
            this.$router.go();
          })
          .catch(e => {
            console.log(e.response);
          });
      } else {
        alert("Password is incorrect");
      }
    }
  }
};
</script>

<style>
</style>

