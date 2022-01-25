<template>
  <div class="about">
    <b-container fluid="sm">
      <h1>DashBoard</h1>
      <b-row>
        <b-col>
          <ClassroomChart style="margin-top: 5%"/>
        </b-col>
        <b-col>
          <TotalCapacity style="margin-top: 5%" v-if="false" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <UserVaccinated style="margin-top: 5%" />
        </b-col>
        <b-col>
          <UserbackClassrooms style="margin-top: 5%" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// @ is an alias to /src
import ClassroomChart from "@/components/ClassroomChart.vue";
import TotalCapacity from "@/components/TotalCapacity.vue";
import UserVaccinated from "@/components/UserVaccinated.vue";
import UserbackClassrooms from "@/components/UserbackClassrooms.vue";

export default {
  name: "charts",
  components: {
    ClassroomChart,
    TotalCapacity,
    UserVaccinated,
    UserbackClassrooms,
  },
};
</script>