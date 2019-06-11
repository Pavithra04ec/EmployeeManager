<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    >
    <!-- <b-container v-show="DashBoard">
      <b-button
        variant="secondary"
        style="float:center;"
        @click="DashBoard=false,selector=true,showLogin=true"
      >Dashboard</b-button>
    </b-container>-->
    <!-- <div v-show="showLogin">
      <b-container class="pb-2">
        <b-form-select v-model="item.select" :options="selected" v-show="selector" @change="change()"></b-form-select>
        <div v-if="this.item.select=='Employee'" @change="change()">
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default" description="We'll never share your email.">
                <strong>Email:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="Email"
                v-validate="'required'"
                v-model="item.Email"
                type="email"
                name="Email"
                required
                placeholder="Enter email"
              ></b-form-input>
              <span>{{ errors.first('Email') }}</span>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default">
                <strong>Password:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                :type="'password'"
                id="Password"
                v-validate="'required'"
                ref="Password"
                v-model="item.Password"
                name="Password"
                required
                placeholder="Enter your Password"
              ></b-form-input>
              <span>{{ errors.first('Password') }}</span>
            </b-col>
            <b-col sm="0">
              <b-button @click="showPassword()" variant="info">
                <span class="fa fa-eye"></span>
              </b-button>
            </b-col>
          </b-row>        
          <b-button variant="success" @click="login()" style="float:center;">LogIn</b-button>
          <b-button variant="warning" @click="forgot()" style="float:center;">Forgot Password</b-button>
          <br>
          <br>
          <b-button v-b-modal.modal-scoped1 variant="primary" style="float:center;">New Register</b-button>
        </div>
        <div v-else-if="this.item.select=='Manager'">
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default" description="We'll never share your email.">
                <strong>Email:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="Email"
                v-validate="'required'"
                v-model="item.Email"
                type="email"
                name="Email"
                required
                placeholder="Enter email"
              ></b-form-input>
              <span>{{ errors.first('Email') }}</span>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default">
                <strong>Password:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                :type="'password'"
                id="Password"
                v-validate="'required'"
                ref="Password"
                v-model="item.Password"
                name="Password"
                required
                placeholder="Enter your Password"
              ></b-form-input>
              <span>{{ errors.first('Password') }}</span>
            </b-col>
            <b-col sm="0">
              <b-button @click="showPassword()" variant="info">
                <span class="fa fa-eye"></span>
              </b-button>
            </b-col>
          </b-row>
          <b-button variant="success" @click="loginData()" style="float:center;">LogIn</b-button>
          <b-button variant="warning" @click="forgot()" style="float:center;">Forgot Password</b-button>
          <br>
          <br>
          <b-button v-b-modal.modal-scoped2 variant="primary" style="float:center;">New Register</b-button>
          </div>
      </b-container>
    </div>-->
    <div v-show="showLogin">
      <div v-if="this.item.select===''">
        <br>
        <br>
        <br>
        <br>
        <b-form-radio-group v-model="item.select">
          <b-form-radio varaint="info" value="Manager">
            <strong>MANAGER</strong>
          </b-form-radio>
          <b-form-radio value="Employee">
            <strong>EMPLOYEE</strong>
          </b-form-radio>
        </b-form-radio-group>
      </div>
      <b-container class="pb-2">
        <div v-if="this.item.select=='Employee'" @change="change()">
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default" description="We'll never share your email.">
                <strong>Email:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="Email"
                v-validate="'required'"
                v-model="item.Email"
                type="email"
                name="Email"
                required
                placeholder="Enter email"
              ></b-form-input>
              <span>{{ errors.first('Email') }}</span>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default">
                <strong>Password:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                :type="'password'"
                id="Password"
                v-validate="'required'"
                ref="Password"
                v-model="item.Password"
                name="Password"
                required
                placeholder="Enter your Password"
              ></b-form-input>
              <span>{{ errors.first('Password') }}</span>
            </b-col>
            <b-col sm="0">
              <b-button @click="showPassword()" variant="info">
                <span class="fa fa-eye"></span>
              </b-button>
            </b-col>
          </b-row>
          <b-button v-b-modal.modal-scoped4 variant="success" @click="login()" style="float:center;">LogIn</b-button>
          <b-button v-b-modal.modal-scoped6 variant="warning" @click="forgot()" style="float:center;">Forgot Password</b-button>
          <br>
          <br>
          <b-button v-b-modal.modal-scoped1 variant="primary" style="float:center;">New Register</b-button>
        </div>
        <div v-else-if="this.item.select=='Manager'">
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default" description="We'll never share your email.">
                <strong>Email:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                id="Email"
                v-validate="'required'"
                v-model="item.Email"
                type="email"
                name="Email"
                required
                placeholder="Enter email"
              ></b-form-input>
              <span>{{ errors.first('Email') }}</span>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-default">
                <strong>Password:</strong>
              </label>
            </b-col>
            <b-col sm="4">
              <b-form-input
                :type="'password'"
                id="Password"
                v-validate="'required'"
                ref="Password"
                v-model="item.Password"
                name="Password"
                required
                placeholder="Enter your Password"
              ></b-form-input>
              <span>{{ errors.first('Password') }}</span>
            </b-col>
            <b-col sm="0">
              <b-button @click="showPassword()" variant="info">
                <span class="fa fa-eye"></span>
              </b-button>
            </b-col>
          </b-row>
          <b-button
            v-b-modal.modal-scoped3
            variant="success"
            @click="loginData()"
            style="float:center;"
          >LogIn</b-button>
          <b-button v-b-modal.modal-scoped6 variant="warning" @click="forgot()" style="float:center;">Forgot Password</b-button>
          <br>
          <br>
          <b-button v-b-modal.modal-scoped2 variant="primary" style="float:center;">New Register</b-button>
        </div>
      </b-container>
    </div>
    <b-container v-show="showOtp">
      <b-row>
        <b-col sm="4">
          <b-form-input
            sizs="sm"
            v-validate="'required'"
            v-model="item.OTP"
            name="OTP"
            required
            placeholder="Enter your OTP"
          ></b-form-input>
          <b-button
            variant="info"
            style="float:center;"
            @click="passShow=true,showOtp=false,getByOtp()"
          >Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-show="passShow">
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-default">Password:</label>
        </b-col>
        <b-col sm="4" v-show="passShow">
          <b-form-input
            :type="'password'"
            v-validate="'required'"
            v-model="form.Password"
            name="Password"
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
            v-model="form.ConfirmPassword"
            name="ConfirmPassword"
            type="password"
            required
            placeholder="Enter your ConfirmPassword"
          ></b-form-input>
          <span>{{ errors.first('ConfirmPassword') }}</span>
        </b-col>
      </b-row>
      <b-button
        v-b-modal.modal-scoped5
        pill
        variant="primary"
        style="float:center;"
        @click="updatePassword()"
      >Update Password</b-button>
    </b-container>
    <template>
      <b-modal id="modal-scoped1">
        <!-- <b-form-select v-model="form.selection" :options="selectedValue"></b-form-select>
        <div v-if="this.form.selection=='EmployeeRegistration'">-->
        <p>Employee Registration Form</p>
        <div slot="modal-footer">
          <b-container fluid class="w-50.5">
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">Id:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="EmpId"
                  v-validate="'numeric|required'"
                  v-model="form.EmpId"
                  name="EmpId"
                  required
                  placeholder="Enter EmpId"
                ></b-form-input>
                <span>{{ errors.first('EmpId') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">EmpName:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="EmpName"
                  v-validate="'alpha|min:3|required'"
                  v-model="form.EmpName"
                  name="EmpName"
                  required
                  placeholder="Enter EmpName"
                ></b-form-input>
                <span>{{ errors.first('EmpName') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default" description="We'll never share your email.">Email:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="Email"
                  v-validate="'required'"
                  v-model="form.Email"
                  type="email"
                  name="Email"
                  required
                  placeholder="Email"
                ></b-form-input>
                <span>{{ errors.first('Email') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">ManagerId:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="ManagerId"
                  v-validate="'numeric|required'"
                  v-model="form.ManagerId"
                  name="ManagerId"
                  required
                  placeholder="ManagerId"
                ></b-form-input>
                <span>{{ errors.first('ManagerId') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">Password:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="Password"
                  v-validate="'required'"
                  ref="Password"
                  v-model="form.Password"
                  type="password"
                  name="Password"
                  required
                  placeholder="Password"
                ></b-form-input>
                <span>{{ errors.first('Password') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">Role:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="Role"
                  v-validate="'alpha|required'"
                  v-model="form.Role"
                  name="Role"
                  required
                  placeholder="Role"
                ></b-form-input>
                <span>{{ errors.first('Role') }}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button size="sm" type="submit" variant="success" @click="registerData()">OK</b-button>
                <b-button size="sm" variant="danger" @click="cancel()">Cancel</b-button>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </b-modal>
      <!-- <div v-else-if="this.form.selection=='ManagerRegistration'"> -->
      <b-modal id="modal-scoped2">
        <p>Manager Registration Form</p>
        <div slot="modal-footer">
          <b-container fluid class="w-50.5">
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">ManagerId:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="ManagerId"
                  v-validate="'numeric|required'"
                  v-model="value.ManagerId"
                  name="ManagerId"
                  required
                  placeholder="Enter ManagerId"
                ></b-form-input>
                <span>{{ errors.first('ManagerId') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">Name:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="name"
                  v-validate="'alpha|min:3|required'"
                  v-model="value.Name"
                  name="Name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
                <span>{{ errors.first('Name') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default" description="We'll never share your email.">Email:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="Email"
                  v-validate="'required'"
                  v-model="value.Email"
                  type="email"
                  name="Email"
                  required
                  placeholder="Email"
                ></b-form-input>
                <span>{{ errors.first('Email') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">Password:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="Password"
                  v-validate="'required'"
                  ref="Password"
                  v-model="value.Password"
                  type="password"
                  name="Password"
                  required
                  placeholder="Password"
                ></b-form-input>
                <span>{{ errors.first('Password') }}</span>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="input-default">Role:</label>
              </b-col>
              <b-col sm="4">
                <b-form-input
                  id="Role"
                  v-validate="'alpha|required'"
                  v-model="value.Role"
                  name="Role"
                  required
                  placeholder="Role"
                ></b-form-input>
                <span>{{ errors.first('Role') }}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button size="sm" type="submit" variant="success" @click="register()">OK</b-button>
                <b-button size="sm" variant="danger" @click="cancel1()">Cancel</b-button>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <!-- </div> -->
      </b-modal>
    </template>
    <b-modal id="modal-scoped3">
      <!-- <p>Error Message</p> -->
      <span>{{this.errorRes}}</span>
      <span>{{this.errorEmail}}</span>
      <span>{{this.loginMessage}}</span>
      <div slot="modal-footer">
        <b-button size="sm" variant="danger" @click="cancel2()">OK</b-button>
      </div>
    </b-modal>
    <b-modal id="modal-scoped4">
      <!-- <p>Error Message</p> -->
      <span>{{this.errorRes}}</span>
      <span>{{this.errorEmail}}</span>
       <span>{{this.loginMessage}}</span>
      <div slot="modal-footer">
        <b-button size="sm" variant="danger" @click="cancel3()">OK</b-button>
      </div>
    </b-modal>
     <b-modal id="modal-scoped5">
      <span>{{this.PasswordMsg}}</span>
      <!-- <span>{{this.forgotMessage}}</span> -->
      <div slot="modal-footer">
        <b-button size="sm" variant="danger" @click="cancel4()">OK</b-button>
      </div>
    </b-modal>
    <!-- <b-modal id="modal-scoped6">
      <span>{{this.forgotMessage}}</span>
      <div slot="modal-footer">
        <b-button size="sm" variant="danger" @click="cancel5()">OK</b-button>
      </div>
    </b-modal> -->
    
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      arr: [],
      item: {
        Email: "",
        Password: "",
        OTP: "",
        token: "",
        select: "",
        ConfirmPassword: "",
        ManagerId: "",
        Name: "",
        Email: "",
        Password: "",
        Role: ""
      },
      selected: [{ text: "Search", value: null }, "Employee", "Manager"],
      form: {
        EmpId: "",
        EmpName: "",
        Email: "",
        ManagerId: "",
        Password: "",
        ConfirmPassword: "",
        Role: "",
        selection: null,
        EmployeeRegistration: "",
        ManagerRegistration: "",
        OTP: "",
        token: ""
      },
      value: {
        ManagerId: "",
        Name: "",
        Email: "",
        Password: "",
        Role: ""
      },
      selectedValue: [
        { text: "Search", value: null },
        "EmployeeRegistration",
        "ManagerRegistration"
      ],
      selector: false,
      showLogin: true,
      showOtp: false,
      passShow: false,
      loggedIn: false,
      DashBoard: true,
      ManagerLogin: false,
      errorRes: "",
      errorEmail: "",
      loginMessage: "",
      PasswordMsg:"",
      forgotMessage:"",
    };
  },
  mounted: function() {
    this.token = localStorage.getItem("token");
    this.$store.commit("setToken", this.token);
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    registerData: function() {
      this.passShow = false;
      this.showOtp = false;
      this.$bvModal.hide("modal-scoped");
      this.$validator
        .validateAll()
        .then(result => {
          if (!result) {
            //alert("error Enter the All Details");
            return;
          }
        })
        .catch(() => {});
      const data = {
        EmpId: this.form.EmpId,
        EmpName: this.form.EmpName,
        Email: this.form.Email,
        ManagerId: this.form.ManagerId,
        Password: this.form.Password,
        Role: this.form.Role
      };
      axios({
        method: "POST",
        url: "http://localhost:5000/api/EmployeeDetails/add",
        data,
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(response => {
          this.arr.push(response);
          //alert("registered successfully");
          this.$router.go();
        })
        .catch(e => {
          console.log(e.response);
          if (e.response.status == 404) {
            alert(e.response.data.err.details[0].message);
          } else {
            alert(e.response.data.Error);
          }
        });
    },
    register: function() {
      this.passShow = false;
      this.showOtp = false;
      this.$bvModal.hide("modal-scoped");
      this.$validator
        .validateAll()
        .then(result => {
          if (!result) {
            //alert("error Enter the All Details");
            return;
          }
        })
        .catch(() => {});
      const data = {
        ManagerId: this.value.ManagerId,
        Name: this.value.Name,
        Email: this.value.Email,
        Password: this.value.Password,
        Role: this.value.Role
      };
      axios({
        method: "POST",
        url: "http://localhost:3000/api/register",
        data,
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(response => {
          this.arr.push(response);
          alert("registered successfully");
          this.$router.go();
        })
        .catch(e => {
          console.log(e.response);
          if (e.response.status == 404) {
            alert(e.response.data.err.details[0].message);
          } else {
            alert(e.response.data.Error);
          }
        });
    },
    cancel: function() {
      this.$bvModal.hide("modal-scoped1");
    },
    cancel1: function() {
      this.$bvModal.hide("modal-scoped2");
    },
    cancel2: function() {
      this.$bvModal.hide("modal-scoped3");
    },
    cancel3: function() {
      this.$bvModal.hide("modal-scoped4");
    },
    cancel4: function() {
      this.$bvModal.hide("modal-scoped5");
    },
    cancel5:  function() {
      this.$bvModal.hide("modal-scoped6");
    },
    showPassword: function() {
      this.passShow = false;
      this.showOtp = false;
      var x = document.getElementById("Password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    forgot: function() {
      this.showLogin = false;
      this.passShow = false;
      const Email = this.item.Email;
      if (Email === "") {
        alert("Enter Email");
        //this.forgotMessage= "Enter Email";
        this.showLogin = true;
        this.showOtp = false;
      } else {
        this.$bvModal.hide("modal-scoped6");
        axios({
          method: "GET",
          url: `http://localhost:3000/api/forgotpassword/${Email}`
        }).then(
          response => {
            console.log(response);
            this.arr = response.data;
            this.showLogin = false;
            this.showOtp = true;
          },
          error => {
            console.log(error.response);
            alert(error.response.data.Error);
            this.showOtp = false;
            this.showLogin = true;
          }
        );
      }
    },
    getByOtp: function() {
      const OTP = this.item.OTP;
      if (OTP === "") {
        alert("Enter OTP");
      } else {
        axios({
          method: "GET",
          url: `http://localhost:3000/api/otp/${OTP}`
        }).then(
          response => {
            console.log(response);
            this.arr = response.data.Data;
          },
          error => {
            console.log(error.response.data.Error);
            alert(error.response.data.Error);
            this.passShow = false;
            this.showOtp = true;
          }
        );
      }
    },
    updatePassword: function() {
      const Password = this.form.Password;
      const ConfirmPassword = this.form.ConfirmPassword;
      console.log(Password);
      if (Password === ConfirmPassword) {
        var Email = this.item.Email;
        console.log(Email);
        var data = {
          Password: this.form.Password
        };
        console.log(data);
        return axios
          .put(`http://localhost:3000/api/putPass/${Email}`, data)
          .then(response => {
            console.log("result  :" + response);
            //alert("Password updated successfully");
            this.PasswordMsg = "Password updated successfully"
            this.showLogin = true;
            this.passShow = false;
            //this.$router.go()
          })
          .catch(e => {
            console.log(e.response);
          });
      } else {
        alert("Password is incorrect");
      }
    },
    loginData: function() {
      this.passShow = false;
      this.showOtp = false;
      this.$validator
        .validateAll()
        .then(result => {
          if (!result) {
            //alert("error Enter the All Details");
            return;
          }
        })
        .catch(() => {});
      const data = {
        Email: this.item.Email,
        Password: this.item.Password
      };
      console.log(data);
      if (data.Email === "") {
        //alert("Enter Email and Password");
        this.loginMessage= "Enter Email and Password";
      } else {
        axios({
          method: "POST",
          url: "http://localhost:3000/api/Manager/Login",
          data
        })
          .then(response => {
            this.arr.push(response);
            console.log("result:" + response.data.token);
            this.$store.commit("setToken", response.data.token);
            //alert("logged in successfully");
            this.$router.push(`/Manager/${data.Email}`);
          })
          .catch(e => {
            console.log(e.response);
            if (e.response.status == 401) {
              //alert(e.response.data.failed);
              this.errorRes = e.response.data.failed;
            } else {
              // alert(e.response.data.Error);
              this.errorEmail = e.response.data.Error;
            }
          });
      }
    },
    login: function() {
      this.passShow = false;
      this.showOtp = false;
      this.$validator
        .validateAll()
        .then(result => {
          if (!result) {
            //alert("error Enter the All Details");
            return;
          }
        })
        .catch(() => {});
      const data = {
        Email: this.item.Email,
        Password: this.item.Password
      };
      console.log(data);
      if (data.Email === "") {
        //alert("Enter Email and Password");
        this.loginMessage= "Enter Email and Password";
      } else {
        axios({
          method: "POST",
          url: "http://localhost:5000/api/Employee/Login",
          data
        })
          .then(response => {
            this.arr.push(response);
            console.log(response);
            console.log("result:" + response.data.token);
            this.$store.commit("setToken", response.data.token);
            //alert("logged in successfully");
            this.$router.push(`/Employee/${data.Email}`);
          })
          .catch(e => {
            console.log(e.response);
            if (e.response.status == 401) {
              //alert(e.response.data.failed);
              this.errorRes = e.response.data.failed;
            } else {
              //alert(e.response.data.Error);
              this.errorEmail = e.response.data.Error;
            }
          });
      }
    },
    show: function() {
      var x = document.getElementById("Password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    change: function() {
      this.selector = false;
    },
    functionshow() {
      this.showLogin = true;
      this.ManagerLogin = false;
    }
  }
};
</script>
  <!-- <div class="text-center">
        <b-row class="my-1">
          <b-col lg="4" class="pb-2">
            <label for="input-default">
              <strong>Password:</strong>
            </label>
          </b-col>
          <b-col lg="4" class="pb-2">
            <b-input-group>
              <b-input-group-prepend>
                <b-form-input
                  :type="'password'"
                  id="Password"
                  v-validate="'required'"
                  ref="Password"
                  v-model="item.Password"
                  name="Password"
                  required
                  placeholder="Enter your Password"
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="info" @click="showPassword()">
                    <span class="fa fa-eye"></span>
                  </b-button>
                </b-input-group-append>
              </b-input-group-prepend>
            </b-input-group>
          </b-col>
          <b-col sm="10">
            <span>{{ errors.first('Password') }}</span>
          </b-col>
        </b-row>
          </div>-->



