<template>

  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <h6 class="text-center grey--text mb-4">Log in to your account so you can continue building
                      <br>and editing your onboarding flows
                    </h6>
                    <v-row align="center" justify="center">

                      <v-col cols="12" sm="8">
                        <v-form @submit.prevent="login">
                          <v-text-field label="Email"
                                        class="mb-3"
                                        variant="outlined"
                                        dense color="blue"
                                        autocomplete="false"
                                        v-model="form.email"
                                        :error-messages="errors.email"
                          ></v-text-field>
                          <v-text-field label="Password"
                                        class="mb-5"
                                        variant="outlined"
                                        dense color="blue"
                                        type="password"
                                        autocomplete="false"
                                        v-model="form.password"
                                        :error-messages="errors.password"
                          ></v-text-field>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox label="Remember Me" class="mt-n4" color="blue"></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="text-caption blue--text ">Forgot Password</span>
                            </v-col>
                          </v-row>
                          <v-btn type="submit" color="blue" dark block tile>Login</v-btn>
                          <h5 class="text-center grey--text mt-4 mb-3">Or Log in using</h5>
                          <div class="d-flex justify-space-between align-center mx-10 mb-10">
                            <v-btn depressed variant="outlined" color="grey">
                              <v-icon color="red" icon="mdi-google"></v-icon>
                            </v-btn>
                            <v-btn depressed variant="outlined" color="grey">
                              <v-icon color="blue" icon="mdi-facebook"></v-icon>
                            </v-btn>
                            <v-btn depressed variant="outlined" color="grey">
                              <v-icon color="light-blue lighten-3" icon="mdi-twitter"></v-icon>
                            </v-btn>
                          </div>
                        </v-form>
                      </v-col>

                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Don't Have an Account Yet?</h3>
                      <h6 class="text-center">Lets get you all set up so you can start creating your first <br>
                        onboarding experience
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>

            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="6" class=" rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Already Signed up?</h3>
                      <h6 class="text-center">SignLog in to your account so you can continue building and <br>
                        editing your onboarding flows
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Sign Up for an Account</h4>
                    <h6 class="text-center grey--text mb-4">
                      Let's get you all set up so you can start creation your
                      first onboading experience
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-form @submit.prevent="register">
                        <v-text-field label="Name"
                                      variant="outlined"
                                      dense
                                      color="blue"
                                      autocomplete="false"
                                      v-model="form.name"
                                      :error-messages="errors.name"
                        ></v-text-field>
                        <v-text-field label="Email"
                                      variant="outlined"
                                      dense
                                      color="blue"
                                      autocomplete="false"
                                      v-model="form.email"
                                      :error-messages="errors.email"
                        ></v-text-field>
                        <v-text-field label="Password"
                                      variant="outlined"
                                      dense
                                      color="blue"
                                      type="password"
                                      autocomplete="false"
                                      v-model="form.password"
                                      :error-messages="errors.password"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="I Accept AAE" class="mt-n4" color="blue"></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="text-caption blue--text ml-n4">Terms & Conditions</span>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile type="submit">Sign up</v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">Or Sign up using</h5>
                        <div class="d-flex justify-space-between align-center mx-10 ">
                          <v-btn depressed variant="outlined" color="grey">
                            <v-icon color="red" icon="mdi-google"></v-icon>
                          </v-btn>
                          <v-btn depressed variant="outlined" color="grey">
                            <v-icon color="blue" icon="mdi-facebook"></v-icon>
                          </v-btn>
                          <v-btn depressed variant="outlined" color="grey">
                            <v-icon color="light-blue lighten-3" icon="mdi-twitter"></v-icon>
                          </v-btn>
                        </div>
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>

            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Axios, {baseUrl} from "@/axios";
import router from "@/router";
import {reactive, ref} from "vue";

export default {
  data: () => ({
    step: 1,

  }),
  setup() {

    let form = reactive({
      name: '',
      email: '',
      password: ''
    });
    let errors = ref({
      name: '',
      email: '',
      password: ''
    })
    const login = async () => {
      await Axios.get(`${baseUrl}csrf-cookie`).then(res => {
        return Axios.post(`auth/login`, form).then(res => {
          if (res.data.success) {
            localStorage.setItem('token', res.data.token.token)
            router.push('/')
          }
        }).catch(err => {
          errors.value = err.response.data.errors
        })
      })
    }

    const register = async () => {
      await Axios.post(`auth/register`, form).then(res => {
        if (res.data.success) {
          localStorage.setItem('token', res.data.data.token)
          router.push('/')
        }
      }).catch(err => {
        errors.value = err.response.data.errors
      })
    }
    return {
      login,
      register,
      form,
      errors

    }
  }


}
</script>

<style scoped>
.rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
  background-color: #20a1ff
}

.rounded-br-xl {
  border-bottom-right-radius: 300px !important;
  background-color: #20a1ff
}

</style>