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
        initialView: 'dayGridMonth',
        height: 600,
        aspectRatio: 1.35,
        headerToolbar: {
          start: 'today prev next',
          center: 'title',
          end: 'dayGridMonth dayGridWeek dayGridDay agenda'
        },
        customButtons: {
          agenda: {
            text: 'Agenda',
            click: () => {
              alert('Agenda button clicked!');
            }
          }
        },
        buttonText: {
          today: 'Today',
          prev: 'Back',
          next:'Next',
          dayGridMonth:'Month',
          dayGridWeek: 'Week',
          dayGridDay: 'Day',
        }
      }
    }
  }
}
</script>

<template>
  <div class="p-4 sm:ml-64 bg-bgCalendar">
    <h2 class="ml-24 mt-3 text-2xl text-sidebar">Calendar</h2>
    <div class="bg-white calendar-container">
      <FullCalendar :options="calendarOptions"/>
    </div>
  </div>
</template>

<style scoped>
.calendar-container {
  margin: 36px 95px 103px 95px;
  padding: 20px;
}

.fc .fc-daygrid-day {
  height: 100px; /* высота ячейки */
}

</style>
