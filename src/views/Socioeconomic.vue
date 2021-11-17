<template>
  <div class="home" style="margin-top: 5%">
    <SocioeconomicForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import SocioeconomicForm from "@/components/SocioeconomicForm.vue";

export default {
  name: "Home",
  components: {
    SocioeconomicForm,
  },
};
</script>
