<template>
  <div class="home" style="margin-top: 5%">
    <RegisterForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  components: {
    RegisterForm,
  },
};
</script>
