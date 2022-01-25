<template>
  <b-container fluid="sm">
    <h1>Registro ingreso al aula</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row cols="2">
        <b-col style="margin-top: 2px">
          <b-form-group
            id="input-group-3"
            label="Facultad:"
            label-for="input-3"
          >
            <b-form-select
              id="input-3"
              v-model="Id_faculties"
              :options="faculties"
              required
              @change="getClassrooms()"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col style="margin-top: 2px">
          <b-form-group id="input-group-3" label="Aula:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.Id_classrooms"
              :options="classrooms"
              required
              @change="setCapacity()"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <br />
        <b-col style="margin-top: 2px">
          <b-form-group
            id="input-group-1"
            label="Docente responsable"
            label-for="input-1"
          >
            <b-form-select
              id="input-3"
              v-model="form.ResponsableUser"
              :options="teachers"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
        <br />
        <b-col style="margin-top: 2px">
          <label for="range-1"
            ># aforo maximo por salon de {{ getmaxcapacity }}
          </label>
          <b-form-input
            type="number"
            v-model="maxcapacity"
            placeholder="0"
            disabled
          ></b-form-input>
        </b-col>
        <b-col style="margin-top: 2px">
          <label for="range-1">Hora inicio</label>
          <b-form-timepicker
            v-model="form.ScheduleStart"
            locale="en"
          ></b-form-timepicker>
          <label for="range-1">Hora fin</label>
          <b-form-timepicker
            v-model="form.ScheduleEnd"
            locale="en"
          ></b-form-timepicker>
        </b-col>
        <br />
        <b-col style="margin-top: 30px">
          <label for="range-1">Materia</label>
          <b-form-input
            v-model="form.Matter"
            placeholder="Calculo diferencial"
          ></b-form-input>
        </b-col>
        <b-col style="margin-top: 2px">
          <b-form-group id="input-group-1" label="Alumnos" label-for="input-1">
            <b-form-select
              style="height: 10rem"
              multiple
              :select-size="30"
              id="input-3"
              v-model="form.id_students_classroom"
              :options="students"
              required
              @change="setMaxcapacity()"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <br />
        <b-col style="margin-top: 2px">
          <label for="range-1">Dias de clase</label>
          <b-form-input
            v-model="form.Days"
            placeholder="L,M,M,J,V"
          ></b-form-input>
        </b-col>
        <br />
        <b-col
          style="margin-top: 2px; display: flex; justify-content: flex-end"
        >
        </b-col>
        <b-col
          style="margin-top: 2px; display: flex; justify-content: flex-end"
        >
          <b-button type="button" @click="onSubmit" variant="primary">
            Crear
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      form: {
        Id_classrooms: "",
        ResponsableUser: "",
        Days: "",
        ScheduleStart: "",
        ScheduleEnd: "",
        Matter: "",
        id_students_classroom: [],
      },
      maxcapacity: "",
      classrooms: [],
      faculties: [],
      teachers: [],
      students: [],
      Id_faculties: 0,
      getmaxcapacity: 0,
      show: true,
    };
  },
  mounted() {
    axios
      .get(
        "https://pqgaymtfv0.execute-api.us-east-2.amazonaws.com/default/getFactulties"
      )
      .then((response) => {
        let faculties = response.data.map(function (element) {
          let options = { value: element.Id, text: element.Description };
          return options;
        });
        this.faculties = faculties;
      });
    axios
      .get(
        "https://7r7y24ez6e.execute-api.us-east-2.amazonaws.com/default/getTeachers"
      )
      .then((response) => {
        let teachers = response.data.map(function (element) {
          let options = {
            value: element.Id,
            text: element.FirstName + " " + element.LastName,
          };
          return options;
        });
        this.teachers = teachers;
      });
  },
  methods: {
    setMaxcapacity() {
      this.maxcapacity = Object.keys(this.form.id_students_classroom).length;
    },
    setCapacity() {
      this.getmaxcapacity = this.classrooms[this.form.Id_classrooms - 1].max;
    },
    onSubmit() {
      this.form.id_students_classroom =
        this.form.id_students_classroom.toString();
      let body = this.form;
      axios
        .post(
          "https://hm1ajd8vbg.execute-api.us-east-2.amazonaws.com/default/UdistritalRegisterCapacityClassrooms",
          JSON.stringify(body)
        )
        .then((response) =>
          response.data
            ? this.$router.push("/Reports")
            : alert("Contraseña o correo errado")
        );
    },
    getClassrooms() {
      let body = this.Id_faculties;
      axios
        .post(
          "https://akuu52cre0.execute-api.us-east-2.amazonaws.com/default/getClassrooms",
          body
        )
        .then((response) => {
          let classrooms = response.data.map(function (element) {
            let options = {
              value: element.Id,
              text: element.Description,
              max: element.MaxCapacity,
            };
            return options;
          });
          this.classrooms = classrooms;
        });
      axios
        .post(
          "https://2qoj0fajog.execute-api.us-east-2.amazonaws.com/default/getUsersXfacultie",
          body
        )
        .then((response) => {
          let students = response.data.map(function (element) {
            let options = {
              value: element.Id,
              text: element.FirstName + " " + element.LastName,
            };
            return options;
          });
          this.students = students;
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
