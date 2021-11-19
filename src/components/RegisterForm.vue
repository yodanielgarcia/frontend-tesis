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
                    <b-form-input v-model="form.FirstName"  required placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Apellidos</label>
                    <b-form-input v-model="form.LastName" required placeholder="Enter your name"></b-form-input>
                    <label for="range-1"># Identificacion</label>
                    <b-form-input v-model="form.IdentificationDocument" required placeholder="Enter your name"></b-form-input>
                    <b-form-group id="input-group-3" label="Carrera:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.Id_carrer"
                        :options="carrers"
                        required
                        ></b-form-select>
                    </b-form-group>
                    <b-form-group id="input-group-3" label="Facultad:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.Id_faculty"
                        :options="faculties"
                        required
                        ></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col cols="6"> 
                    <label for="range-1">Correo</label>
                    <b-form-input v-model="form.Email" required placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Password</label>
                    <b-form-input v-model="form.Password" required placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Codigo estudiantil</label>
                    <b-form-input v-model="form.UniversityCode" required placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Fecha nacimiento</label>
                    <b-form-datepicker id="example-datepicker" v-model="form.BirthDate" class="mb-2"></b-form-datepicker>
                    <b-form-group id="input-group-3" label="Tipo Usuario:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.type_user"
                        :options="typeUsers"
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
const axios = require('axios');
export default {
  name: "HelloWorld",
  data() {
    return {
      form: {
        Email: '',
        Password: '',
        FirstName:'',
        LastName:'',
        IdentificationDocument:'',
        Id_faculty:'',
        Id_carrer:'',
        UniversityCode:'',
        BirthDate:'',
        type_user:''
      },
      faculties: [{ text: 'Seleccion Facultad', value: null }],
      carrers: [{ text: 'tipo usuario', value: null }],
      typeUsers: [{ text: 'tipo usuario', value: null }, 'Estudiante', 'Profesor', 'Administrador', 'Servicios Varios'],
      show: true
    }
  },
  mounted () {
    axios.get('https://mlszgwx586.execute-api.us-east-2.amazonaws.com/default/getCarrers')
    .then((response) => {
      let carrers = response.data.map(function(element) {
        let options ={ value: element.Id, text: element.Description }
        return options
      });
      this.carrers = carrers
    });
    axios.get('https://pqgaymtfv0.execute-api.us-east-2.amazonaws.com/default/getFactulties')
    .then((response) => {
      let faculties = response.data.map(function(element) {
        let options ={ value: element.Id, text: element.Description }
        return options
      });
      this.faculties = faculties
    });
    axios.get('https://fjjt1ys7vi.execute-api.us-east-2.amazonaws.com/default/getTipeUser')
    .then((response) => {
      let typeUs = response.data.map(function(element) {
        let options ={ value: element.Id, text: element.Description }
        return options
      });
      this.typeUsers = typeUs
    });
  },
  methods: {
    onSubmit() {
      //todo validar correo no exista
      let body = this.form
      axios.post('https://jgcu9imo1a.execute-api.us-east-2.amazonaws.com/default/UdistritalRegisterUser', JSON.stringify(body) )
      .then(response => response.data ? this.$router.push("/Socioeconomic/"+response.data ) : alert('Contraseña o correo errado'));
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
