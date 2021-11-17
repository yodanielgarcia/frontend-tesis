<template>
  <b-container fluid="sm">
    <h1> Registro de clases por aula </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row cols="2">
            <b-col style="margin-top: 2px">
                <b-form-group id="input-group-3" label="Aula:" label-for="input-3">
                    <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                    ></b-form-select>
                </b-form-group>
            </b-col>
            <br>
            <b-col style="margin-top: 2px">
                <b-form-group id="input-group-1" label="Docente responsable" label-for="input-1">
                    <b-form-input
                    id="input-1"
                    v-model="form.nameClassroom"
                    type="text"
                    placeholder="B1 101"
                    required
                    class="mb-2 mr-sm-2 mb-sm-0"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <br>
            <b-col style="margin-top: 2px">
                <label for="range-1"># aforo</label>
                <b-form-input type="number" v-model="text" placeholder="0" disabled></b-form-input>
            </b-col>
            <br>
            <b-col style="margin-top: 2px">
                <label for="range-1">Dias de clase</label>
                <b-form-input v-model="text" placeholder="L,M,M,J,V" ></b-form-input>
            </b-col>
            <b-col style="margin-top: 2px"> 
                <label for="range-1">Hora inicio</label>
                <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                <label for="range-1">Hora fin</label>
                <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
            </b-col>
            <br>
            <b-col style="margin-top:30px">
                <label for="range-1">Materia</label>
                <b-form-input v-model="text" placeholder="Calculo diferencial"></b-form-input>  
            </b-col>
            <br>
            <b-col style="margin-top: 2px;display: flex;justify-content: flex-end;">
            </b-col>
            <b-col style="margin-top: 2px;display: flex;justify-content: flex-end;">
                <b-button type="submit" variant="primary">Crear</b-button>
            </b-col>
        </b-row>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          maxcapacity:0,
          food: null,
          checked: []
        },
        foods: [{ text: 'Seleccion Facultad', value: null }, 'Tecnologica', 'Vivero', 'Ingenierias', 'Macarena'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>