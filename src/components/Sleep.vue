<template>
  <div>
    <h1>Sleep</h1>

    <table>
      <thead>
        <th>Description</th>
        <th>Goal</th>
        <th>Performance</th>
      </thead>
      <tbody>
        <tr>
          <td>Wake time</td>
          <td>{{ wake_time }}</td>
          <td>8:30</td>
        </tr>
        <tr>
          <td>Bed Time</td>
          <td>{{ bed_time }}</td>
          <td>10:30</td>
        </tr>
        <tr>
          <td>Total Sleep</td>
          <td>8 hours</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import store from '../store'

export default({
  computed: {
    wake_time() {
      return store.state.wake_time
    },
    bed_time() {
      return store.state.bed_time
    }
  }

})

</script>

<style>

</style>
