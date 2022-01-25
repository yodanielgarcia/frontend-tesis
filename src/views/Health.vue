<template>
  <div class="home" style="margin-top: 5%">
    <HealthForm />
  </div>
</template>

<script>
// @ is an alias to /src
import HealthForm from "@/components/HealthForm.vue";

export default {
  name: "Home",
  components: {
    HealthForm,
  },
};
</script>
