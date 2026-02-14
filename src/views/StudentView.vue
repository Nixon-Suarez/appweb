<template>
    <v-container fluid>
        <h1>Estudiente</h1>
        <v-row>
            <v-col xs="12" sm="6" md="4" lg="3" xxl="3">
                <v-text-field label="Nombre" maxlength="50" color="indigo" clearable placeholder="Nombre" counter variant="outlined"></v-text-field>
                <v-text-field label="Correo" maxlength="70" color="indigo" clearable placeholder="Correo" counter variant="outlined"></v-text-field>
                <v-text-field type="date" label="Fecha de Nacimiento" clearable placeholder="Fecha de Nacimiento" color="indigo" variant="outlined"></v-text-field>
                <v-btn prepend-icon="mdi-check" color="indigo" block="">
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
                                <th>Correo</th>
                                <th>Fecha Nacimiento</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nixon</td>
                                <td>nix@gmail.com</td>
                                <td>10/01/2026</td>
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
export default {
  name: "StudentView",
};

</script>

<style scoped>
</style>