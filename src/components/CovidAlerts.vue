<template>
  <b-container fluid="sm">
    <h1>Registre sus sintomas de alerta de covid</h1>
    <b-form v-if="show" style="margin-top: 5%">
      <b-row cols="2">
        <label for="range-1">¿Positivo covid?</label>
        <b-form-checkbox
          id="checkbox-1"
          v-model="form.PositiveCovid"
          name="checkbox-1"
          value="1"
          unchecked-value="0"
        >
        </b-form-checkbox>
        <b-form-group id="input-group-3" label="Sintoma:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.SymptomCovid"
            :options="sintomas"
            required
          ></b-form-select>
        </b-form-group>
        <b-col style="margin-top: 2px">
          <label for="example-datepicker">Fecha de inicio</label>
          <b-form-datepicker
            id="example-datepicker"
            v-model="form.DateStart"
            class="mb-2"
          ></b-form-datepicker>
        </b-col>
        <b-col style="margin-top: 2px">
          <label for="range-1">Descripcion</label>
          <b-form-textarea
            id="textarea"
            v-model="form.description"
            placeholder="Sala de informatica ..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col style="margin-top: 5%;">
          <b-button type="button" @click="onSubmit" variant="primary"
            >Reportar</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
const axios = require("axios");
var user = localStorage.getItem("UserLog");
user = JSON.parse(user);
export default {
  data() {
    return {
      form: {
        Id_user: user.Id,
        PositiveCovid: "",
        SymptomCovid: "",
        description: "",
        DateStart: "",
      },
      show: true,
      sintomas: [
        { text: "Seleccion sintoma", value: null },
        "Perdida del gusto",
        "Gripa",
        "Perdida del olfato",
      ],
    };
  },
  methods: {
    onSubmit() {
      let body = this.form;
      console.log(body);
      axios
        .post(
          "https://dothggtj5k.execute-api.us-east-2.amazonaws.com/default/UdistritalLambdaAlertCovidUser",
          JSON.stringify(body)
        )
      .then(response => response.data == 'ok' ? this.$router.push("/Reports") : alert('Contraseña o correo errado'));
      },
    },
  }
</script>
