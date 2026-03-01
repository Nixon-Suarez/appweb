<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col xs="14" sm="4" md="4" lg="4" xl="4">
                <v-card>
                    <v-img height="150" src="../assets/logo.png"></v-img>
                    <v-card-title class="text-h5" style="text-align: center;" >Login</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="usuario.email" label="Correo" maxlength="70" color="indigo" clearable prepend-inner-icon="mdi-email" placeholder="correo" required></v-text-field>
                            <v-text-field v-model="usuario.password" label="Password" type="password" color="indigo" clearable prepend-inner-icon="mdi-key" placeholder="********" counter required></v-text-field>
                            <v-btn @click="login" block color="primary" class="mt-4">Iniciar Sesion</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar timeout="1500" color="red-darken-4" v-model="alertaEstado">
            {{ alertaMensaje }}
        </v-snackbar>
    </v-container>
</template>

<script>
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/';
export default {
  name: "LoginView",
  data(){
    return {
        usuario:{
            email: '',
            password: ''
        },
        alertaEstado: false,
        alertaMensaje: ''
    }
  },
  methods: {
    login(){
        axios.post(API_URL + 'user/login', this.usuario)
        .then(response => {
            if(response.data.code == 200){
                let datos = {
                    usuario: response.data.data.name,
                    token: response.data.token
                }
                // guardar datos en el store
                this.$store.dispatch('Login', datos);
                // redireccion a home
                this.$router.push('/inicio');
            }
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
            this.alertaEstado = true;
            if(error.response.status === 401){
                this.alertaMensaje = error.response.data.data;
            }else{
                this.alertaMensaje = "Ocurrió un error en el servidor";
            }
        })
    }
  }
}
</script>