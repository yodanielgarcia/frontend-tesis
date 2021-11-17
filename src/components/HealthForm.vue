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
        Por favor registrata tus datos de salud
      </b-card-text>
      <b-container fluid="sm">
            <b-row>
                <b-col cols="6">
                    <label for="range-1">¿Ya se vacuno?</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <b-form-group id="input-group-3" label="Tipo de vacuna:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.food"
                        :options="foods"
                        required
                        ></b-form-select>
                    </b-form-group>
                    <label for="range-1">Suba su carnet de vacunacion</label>
                    <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    ></b-form-file>
                    <label for="range-1">VIH</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">cancer</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">Diabetes</label>
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
                    <label for="range-1"># Dosis</label>
                    <b-form-input type="number" v-model="text" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Hipertension</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">asma</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">Obesidad</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">Celebrovascular</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">autismo</label>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >
                    </b-form-checkbox>
                    <label for="range-1">otra</label>
                    <b-form-input v-model="text" placeholder="........"></b-form-input>
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
        this.$router.push("/Reports");
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
