<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth'
      }
    }
  }
}
</script>

<template>
  <div class="p-4 sm:ml-64 bg-bgCalendar">
    <div class="bg-white">
      <FullCalendar :options="calendarOptions"/>
    </div>
  </div>
</template>

<style scoped>
</style>
