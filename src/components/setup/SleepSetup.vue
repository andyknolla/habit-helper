<template>
  <div>
    <h1>Sleep Setup</h1>

    <table>
      <thead>
        <th>Description</th>
        <th>Current Goal</th>
        <th>Edit</th>
      </thead>
      <tbody>
        <tr>
          <td>Wake time</td>
          <td>{{ wake_time }}</td>
          <td><button @click="changeWakeTime" >Change</button><input /></td>
        </tr>
        <tr>
          <td>Bed Time</td>
          <td>{{ bed_time }}</td>
          <td><button @click="changeBedTime" >Change</button><input /></td>
        </tr>
        <tr>
          <td>Total Sleep</td>
          <td><input /></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import store from '../../store'

export default({

  methods: {
    changeWakeTime() {
      store.commit('editSleepTime')
    },
    changeBedTime() {
      store.commit('editBedTime')
    }
  },
  computed: {
    wake_time() {
      return store.state.wake_time
      // return this.$store.state.wake_time
    },
    bed_time() {
      return store.state.bed_time
      // return this.$store.state.wake_time
    }
  }
})

</script>

<style>

</style>
