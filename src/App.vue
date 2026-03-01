<template>
  <v-app>
    <!-- menu -->
    <v-app-bar v-if="this.$store.getters.getUsuario !== null" class="bg-light-blue-darken-3">
      <v-app-bar-title class="white--text">Sistema de Registro</v-app-bar-title>
      <!-- <v-btn prepend-icon="mdi-login" to="/">Login</v-btn> -->
      <v-btn prepend-icon="mdi-home" to="/inicio">Inicio</v-btn>
      <v-btn prepend-icon="mdi-book-open-variant">
        Administracion
        <v-menu activator="parent">
          <v-list>
            <v-list-item to="/curso">
              <v-list-item-title>Cursos</v-list-item-title>
            </v-list-item>
            <v-list-item to="/student">
              <v-list-item-title>Estudiantes</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <v-btn @click="logout" prepend-icon="mdi-logout">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  methods: {
    logout(){
      // eliminar datos del store
      this.$store.dispatch('Logout');
      // redireccion a login
      this.$router.push('/');
    },
    validarAcceso(){
      let datos = localStorage.getItem('userData');
      if(!datos){
        this.$router.push('/');
      }else{
        this.$store.dispatch('Login', JSON.parse(datos));
        this.$router.push('/inicio');
      }
    }
  },
  created(){
    this.validarAcceso();
  }
}
</script>
