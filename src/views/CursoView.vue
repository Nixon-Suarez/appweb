<template>
    <v-container fluid>
        <h1>Cursos</h1>
        <v-row>
            <v-col xs="12" sm="6" md="4" lg="3" xxl="3">
                <v-text-field v-model="curso.name" label="Nombre Curso" maxlength="50" color="indigo" clearable placeholder="Nombre Curso" counter variant="outlined"></v-text-field>
                <v-textarea v-model="curso.descripcion" label="Descripcion" clearable counter maxlength="100" color="indigo" placeholder="Descripcion" variant="outlined"></v-textarea>
                <v-btn @click="registrarCurso" prepend-icon="mdi-check" color="indigo" block="">
                    Agregar
                </v-btn>
            </v-col>
            <v-col cols="9" xs="12" sm="9" md="9" xl="9" xxl="9">
                <v-card-text>
                    <v-table>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Descrpcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Java</td>
                                <td>Decripcion 1213</td>
                                <td>
                                    <v-btn-group>
                                        <v-btn prepend-icon="mdi-eye" color="indigo"></v-btn>
                                        <v-btn prepend-icon="mdi-pencil" color="green"></v-btn>
                                        <v-btn prepend-icon="mdi-delete" color="red"></v-btn>
                                    </v-btn-group>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
const API_URL = 'http://127.0.0.1:8000/api/';
export default {
  name: "CursoView",
  data(){
    return {
        curso: {}
    }
  },
  methods: {
    getAlert(texto){
        Swal.fire({
            title: 'Exito',
            text: texto,
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1500 
          })
    },
    registrarCurso(){
        axios.post(API_URL + 'curso/insert', this.curso)
        .then(response => {
            if(response.data.code == 201){
                this.getAlert(response.data.data);
                this.curso = {};
            }
        })
        .catch(function(error){
            console.error("Error en la solicitud:", error);
            Swal.fire(
                "Error",
                "Ocurrió un error en el servidor",
                "error"
            );
        })
    }
  }
  
};

</script>

<style scoped>
</style>