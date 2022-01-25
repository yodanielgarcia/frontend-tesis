<template>
  <div class="form">
    <div class="cardForm" style="display: flex; justify-content: center">
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
              <b-form-input
                type="number"
                v-model="form.stratus"
                placeholder="digite su estrato"
              ></b-form-input>

              <label for="range-1"># Familiares/Personas con quien vive</label>
              <b-form-input
                type="number"
                v-model="form.NumPeopleWhomLive"
                placeholder="0"
              ></b-form-input>
              <label for="range-1"
                >¿Cuenta con Familiares con alta vulnerabilidad al Covid?</label
              >
              <b-form-checkbox
                id="checkbox-1"
                v-model="form.VulnerableFamilyCovid"
                name="checkbox-1"
                value="1"
                unchecked-value="0"
              >
              </b-form-checkbox>
              <label for="range-1">¿Cuenta con Computador propio?</label>
              <b-form-checkbox
                id="checkbox-2"
                v-model="form.ComputerOwner"
                name="checkbox-2"
                value="1"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </b-col>
            <b-col cols="6">
              <label for="range-1">Barrio</label>
              <b-form-input
                v-model="form.neighborhood"
                placeholder="Digite su barrio"
              ></b-form-input>
              <label for="range-1"
                >Cantidad de megas del Servicio de internet</label
              >
              <b-input-group prepend="Megas" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                  type="number"
                  v-model="form.VelocityInternet"
                  id="inline-form-input-username"
                  placeholder="200"
                ></b-form-input>
              </b-input-group>
              <label for="range-1">Servicio de internet</label>
              <b-form-checkbox
                id="checkbox-3"
                v-model="form.InternetService"
                name="checkbox-3"
                value="1"
                unchecked-value="0"
              >
              </b-form-checkbox>
              <label for="range-1"
                >¿Cuenta con un espacio adecuado para estar en clase
                virtual?</label
              >
              <b-form-checkbox
                id="checkbox-4"
                v-model="form.StudyEnvironment"
                name="checkbox-4"
                value="1"
                unchecked-value="0"
              >
              </b-form-checkbox>
              <label for="range-1">¿Desea volver a la presencialidad?</label>
              <b-form-checkbox
                id="checkbox-5"
                v-model="form.ReturnFaceToFace"
                name="checkbox-5"
                value="1"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </b-col>
            <b-col style="margin-top: 2%">
              <b-button type="button" variant="primary" @click="onSubmit"
                >Registrar</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "HelloWorld",
  data() {
    return {
      form: {
        Id_user: this.$route.params.id,
        stratus: "",
        neighborhood: "",
        NumPeopleWhomLive: "",
        InternetService: "",
        VelocityInternet: "",
        StudyEnvironment: "",
        ComputerOwner: "",
        VulnerableFamilyCovid: "",
        ReturnFaceToFace: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      let body = this.form;
      console.log(body);
      axios
        .post(
          "https://0seilb8ln3.execute-api.us-east-2.amazonaws.com/default/UdistritalRegisterSocioeconomic",
          JSON.stringify(body)
        )
        .then((response) =>
          response.data == "ok"
            ? this.$router.push("/Health/" + this.$route.params.id)
            : alert("Campos errados")
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  margin-bottom: 0;
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
