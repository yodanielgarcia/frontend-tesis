<template>
  <b-container fluid="sm">
    <h1> Registro de aulas </h1>
    <b-form  v-if="show">
        <b-row cols="2">
            <b-col style="margin-top: 2px">
                <b-form-group id="input-group-3" label="Facultad:" label-for="input-3">
                    <b-form-select
                    id="input-3"
                    v-model="form.Id_faculty"
                    :options="faculties"
                    required
                    ></b-form-select>
                </b-form-group>
            </b-col>
            <br>
            <b-col style="margin-top: 2px">
                <b-form-group id="input-group-1" label="Nombre salon" label-for="input-1">
                    <b-form-input
                    id="input-1"
                    v-model="form.Description"
                    type="text"
                    placeholder="B1 101"
                    required
                    class="mb-2 mr-sm-2 mb-sm-0"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <br>
            <b-col style="margin-top: 2px">
                <b-form-group id="input-group-2" label="Piso:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.Tier"
                    placeholder="Piso"
                    required
                    class="mb-2 mr-sm-2 mb-sm-0"
                    type="number"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <br>
            <b-col style="margin-top: 2px"> 
                <b-form-group id="input-group-2" label="Salon:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.Classroom"
                    placeholder="Salon xxx"
                    required
                    class="mb-2 mr-sm-2 mb-sm-0"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <br>
            <b-col style="margin-top: 2px">
                <label for="range-1">Descripcion</label>
                <b-form-textarea
                id="textarea"
                v-model="form.Observation"
                placeholder="Sala de informatica ..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
            </b-col>
            <br>
            <b-col style="margin-top:30px">
                <label for="range-1">Maximo de personas en el aula</label>
                <br>
                <b-form-input id="range-1" v-model="form.MaxCapacity" type="range" min="0" max="30"></b-form-input> {{form.MaxCapacity}}
            </b-col>
            <br>
            <b-col style="margin-top: 2px;display: flex;justify-content: flex-end;">
            </b-col>
            <b-col style="margin-top: 2px;display: flex;justify-content: flex-end;">
                <b-button type="button" @click="onSubmit" variant="primary">Crear</b-button>
            </b-col>
        </b-row>
    </b-form>
  </b-container>
</template>

<script>
const axios = require('axios');
  export default {
    data() {
      return {
        form: {
          Id_faculty: '',
          Description: '',
          Tier:0,
          Classroom: '',
          Observation: '',
          MaxCapacity:0
        },
        faculties: [],
        show: true
      }
    },
    mounted () {
    axios.get('https://pqgaymtfv0.execute-api.us-east-2.amazonaws.com/default/getFactulties')
    .then((response) => {
      let faculties = response.data.map(function(element) {
        let options ={ value: element.Id, text: element.Description }
        return options
      });
      this.faculties = faculties
    });
    },
    methods: {
      onSubmit() {
        let body = this.form
        console.log('aqui si enrte');
        axios.post('https://oiq277jd98.execute-api.us-east-2.amazonaws.com/default/UdistritalLambdaRegistroAulas', JSON.stringify(body) )
        .then(response => response.data ? alert('Aula creada') : alert('Error'));
      },
    }
  }
</script>