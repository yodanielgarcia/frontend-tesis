<template>
  <div class="form">
    <div class="cardForm" style="display: flex; justify-content: center">
      <b-card
        title="Login De Usuarios"
        img-src="https://www.udistrital.edu.co/themes/custom/versh/logo.png"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
        style="
          width: 60%;
          lign-items: center;
          justify-content: center;
          display: flex;
        "
      >
        <b-card-text>
          Bienvenido a la aplicacion retorno a la aulas <br />
          Por favor registrate para poder tener ordenado y seguro nuestro
          regreso a la presencialidad
        </b-card-text>
        <b-form @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email Udistrital:"
            label-for="input-1"
            description="Por favor solo ingrese su correo institucional"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Enter name"
              type="password"
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button type="button" variant="primary" @click="onSubmit"
            >Acceder</b-button
          >
          <b-button type="reset" variant="danger">Limpiar</b-button>
        </b-form>
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
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      let body = {
        email: this.form.email,
        password: this.form.password,
      };
      axios
        .post(
          "https://jeahs5cimi.execute-api.us-east-2.amazonaws.com/default/UdistritalLambdaLoginUser",
          JSON.stringify(body)
        )
        .then((response) => {
          console.log(response.data[0]);
          if (response.data != "error") {
            localStorage.setItem("UserLog", JSON.stringify(response.data[0]));
            this.$router.push("/Reports");
          } else {
            alert("Contraseña o correo errado");
          }
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
