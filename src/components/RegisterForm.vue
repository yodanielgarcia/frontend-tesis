<template>
  <div class="form">
    <div class="cardForm" style="display: flex; justify-content:center;">
      <b-card
        title="Registro De Usuarios"
        img-src="https://www.udistrital.edu.co/themes/custom/versh/logo.png"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
      >
      <b-card-text>
        Bienvenido al registro de la aplicacion retorno a la aulas <br>
        Por favor registrate para poder tener ordenado y seguro nuestro regreso a la presencialidad
      </b-card-text>
      <b-container fluid="sm">
            <b-row>
                <b-col cols="6"> 
                    <label for="range-1">Nombres</label>
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Apellidos</label>
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1"># Identificacion</label>
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    <b-form-group id="input-group-3" label="Carrera:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.food"
                        :options="foods"
                        required
                        ></b-form-select>
                    </b-form-group>
                    <b-form-group id="input-group-3" label="Facultad:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.food"
                        :options="foods"
                        required
                        ></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col cols="6"> 
                    <label for="range-1">Correo</label>
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Password</label>
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Codigo estudiantil</label>
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Fecha nacimiento</label>
                    <b-form-datepicker id="example-datepicker" v-model="form.dateStart" class="mb-2"></b-form-datepicker>
                    <b-form-group id="input-group-3" label="Tipo Usuario:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.food"
                        :options="foods"
                        required
                        ></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col style="margin-top: 2%">
                    <b-button type="button" variant="primary" @click="onSubmit">Registrar</b-button>
                </b-col>
      </b-row>
      </b-container>
      </b-card>
      
    </div>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
      return {
        form: {
          email: '',
          password: '',
        },
        foods: [{ text: 'Seleccion Facultad', value: null }, 'Tecnologica', 'Vivero', 'Ingenierias', 'Macarena'],
        show: true
      }
    },
  methods: {
      onSubmit() {
        console.log(this.form.email);
        this.$router.push("/Socioeconomic");
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
    margin-bottom: 0
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
