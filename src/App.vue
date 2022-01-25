<template>
  <div id="app" style="border-top: 15px solid #0095dd">
    <div id="tabudistrital" style="right: 0; top: 14px; float: right">
      <a
        href="//www.udistrital.edu.co/"
        style="
          background-image: url(https://estudiantes.portaloas.udistrital.edu.co/appserv/index_files/tab.png);
          display: block;
          height: 40px;
          position: relative;
          text-indent: 120%;
          width: 164px;
          z-index: 2;
          ackground-repeat: no-repeat;
          overflow: hidden;
        "
        >Udistrital</a
      >
    </div>
    <div>
      <b-button
        v-b-toggle.sidebar-no-header
        v-b-tooltip.hover
        title="menu"
        style="margin-top: 2px; display: flex; justify-content: flex-start"
        ><b-icon icon="justify"></b-icon
      ></b-button>
      <b-sidebar
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow
      >
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Universidad Distrital</h4>
            <p>El regreso a las aulas es una realidad</p>
            <nav class="mb-3">
              <b-nav vertical>
                <router-link to="/Aulas" v-if="userType == 1"
                  >Registro de aulas</router-link
                >
                <router-link to="/Aulas/assign" v-if="userType == 1"
                  >Registro de clases por aula</router-link
                >
                <router-link to="/Reports">Reportes</router-link>
                <router-link to="/CovidAlerts"
                  >Reporto mis sintomas</router-link
                >
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="logOut">log out</b-button>
            <b-button variant="primary" block @click="hide"
              >Cierra menu</b-button
            >
          </div>
        </template>
      </b-sidebar>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
var user = localStorage.getItem("UserLog");
user = JSON.parse(user);
export default {
  data() {
    return {
      userType: user.type_user,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("UserLog");
      this.$router.push("/");
    },
  },
};
</script>
