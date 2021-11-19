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
                        v-model="form.Vaccine"
                        name="checkbox-1"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <b-form-group id="input-group-3" label="Tipo de vacuna:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.Id_type_vaccine"
                        :options="typeVaccine"
                        required
                        ></b-form-select>
                    </b-form-group>
                    <label for="range-1">Suba su carnet de vacunacion</label>
                    <b-form-file
                    v-model="form.ImgCarnetVaccine"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    :state="Boolean(form.ImgCarnetVaccine)"
                    ></b-form-file>
                    <label for="range-1">VIH</label>
                    <b-form-checkbox
                        id="checkbox-2"
                        v-model="form.HIV"
                        name="checkbox-2"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <label for="range-1">cancer</label>
                    <b-form-checkbox
                        id="checkbox-3"
                        v-model="form.Cancer"
                        name="checkbox-3"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <label for="range-1">Diabetes</label>
                    <b-form-checkbox
                        id="checkbox-4"
                        v-model="form.Diabetes"
                        name="checkbox-4"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                </b-col>
                <b-col cols="6"> 
                    <label for="range-1"># Dosis</label>
                    <b-form-input type="number" v-model="form.NumDoseVaccine" placeholder="Enter your name"></b-form-input>
                    <label for="range-1">Hipertension</label>
                    <b-form-checkbox
                        id="checkbox-5"
                        v-model="form.HypertensiveDiseases"
                        name="checkbox-5"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <label for="range-1">asma</label>
                    <b-form-checkbox
                        id="checkbox-6"
                        v-model="form.Asthma"
                        name="checkbox-6"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <label for="range-1">Obesidad</label>
                    <b-form-checkbox
                        id="checkbox-7"
                        v-model="form.Obesity"
                        name="checkbox-7"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <label for="range-1">Celebrovascular</label>
                    <b-form-checkbox
                        id="checkbox-8"
                        v-model="form.CerebrovascularDisease"
                        name="checkbox-8"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <label for="range-1">Inmunodeficiencia primaria</label>
                    <b-form-checkbox
                        id="checkbox-9"
                        v-model="form.PrimaryImmunodeficiency"
                        name="checkbox-9"
                        value="1"
                        unchecked-value="0"
                        >
                    </b-form-checkbox>
                    <label for="range-1">otra</label>
                    <b-form-input v-model="form.other" placeholder="........"></b-form-input>
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
          Id_user: this.$route.params.id,
          Vaccine:'',
          Id_type_vaccine:'',
          ImgCarnetVaccine:null,
          HIV:'',
          Cancer:'',
          Diabetes:'',
          NumDoseVaccine:'',
          HypertensiveDiseases:'',
          Asthma:'',
          Obesity:'',
          CerebrovascularDisease:'',
          PrimaryImmunodeficiency:'',
          other:'',
        },
        typeVaccine: [],
        show: true
      }
    },
  mounted () {
    axios.get('https://1zpgwgkp6l.execute-api.us-east-2.amazonaws.com/default/getTipeVaccine')
    .then((response) => {
      let typeVac = response.data.map(function(element) {
        let options ={ value: element.Id, text: element.Description }
        return options
      });
      this.typeVaccine = typeVac
    });
  },
  methods: {
    onSubmit() {
      let body = this.form
      axios.post('https://lb8lvzdr02.execute-api.us-east-2.amazonaws.com/default/UdistritalRegisterHealth', JSON.stringify(body) )
      .then(response => response.data == 'ok' ? this.$router.push("/Reports") : alert('Contraseña o correo errado'));
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
