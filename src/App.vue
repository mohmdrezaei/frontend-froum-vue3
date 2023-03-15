<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">

      </div>

      <v-spacer></v-spacer>


      <router-link to="/login" class="font">
        <v-btn
            text
            color="white"
        >
          <span class="mr-2">Login</span>
          <v-icon >mdi-account</v-icon>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/" class="font">
        <v-btn
            text

        >
          <span class="mr-2 text-white " >Home</span>
          <v-icon color="white">mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

      <v-btn
          variant="outlined"
          size="large"
          icon
          color="info"
          class="mb-16  ml-10"
          style="margin-top: -50px"
          :to="{name : 'create thread'}"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

  </v-app>
</template>
<style>
.font{
  text-decoration: none;
}
</style>
<script>

import Axios from "./axios";

export default {
  name: 'App',

  data: () => ({

  }),

  mounted() {
    Axios.get('threads').then(response => {
      console.log(response)
    });
  }
};
</script>
