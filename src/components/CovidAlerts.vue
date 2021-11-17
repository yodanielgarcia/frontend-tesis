<template>
  <b-container fluid="sm">
    <h1> Registre sus sintomas de alerta de covid </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="margin-top:5%">
        <b-row cols="2">
            <b-form-group id="input-group-3" label="Sintoma:" label-for="input-3">
                <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                ></b-form-select>
            </b-form-group>
            <b-col style="margin-top: 2px">
                <label for="example-datepicker">Fecha de inicio</label>
                <b-form-datepicker id="example-datepicker" v-model="form.dateStart" class="mb-2"></b-form-datepicker>
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
                <b-button type="submit" variant="primary">Reportar</b-button>
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
        foods: [{ text: 'Seleccion sintoma', value: null }, 'Positivo', 'Posible', 'Contacto con persona positiva'],
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