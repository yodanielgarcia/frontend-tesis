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
        Por favor registrata tus datos socioeconomicos
      </b-card-text>
      <b-container fluid="sm">
            <b-row>
                <b-col cols="6"> 
                    <label for="range-1">Estrato</label>
                    <b-form-input type='number' v-model="text" placeholder="Enter your name"></b-form-input>
                    
                    <label for="range-1"># Familiares/Personas con quien vive</label>
                    <b-form-input type='number' v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">¿Cuenta con Familiares con alta vulnerabilidad al Covid?</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">¿Cuenta con Computador propio?</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                </b-col>
                <b-col cols="6"> 
                    <label for="range-1">Barrio</label>
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Cantidad de megas del Servicio de internet</label>
                    <b-input-group prepend="Megas" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-form-input type='number' id="inline-form-input-username" placeholder="Username"></b-form-input>
                    </b-input-group>
                    <label for="range-1">Servicio de internet</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">¿Cuenta con un espacio adecuado para estar en clase virtual?</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">¿Desea volver a la presencialidad?</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    
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
        this.$router.push("/Health");
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
