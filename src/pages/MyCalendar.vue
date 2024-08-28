<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'dayGridMonth', // Change to 'timeGridWeek' if you want to start with week view
        height: 600,
        aspectRatio: 1.35,
        headerToolbar: {
          start: 'today,prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay,agenda' // Include timeGridWeek and timeGridDay
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
          next: 'Next',
          dayGridMonth: 'Month',
          timeGridWeek: 'Week', // Changed from 'dayGridWeek' to 'timeGridWeek'
          timeGridDay: 'Day'     // Changed from 'dayGridDay' to 'timeGridDay'
        },
        views: {
          timeGridWeek: {
            type: 'timeGrid',
            duration: { days: 7 },
            slotDuration: '00:30:00', // Adjust the slot duration if needed
            slotLabelFormat: {
              hour: '2-digit',
              minute: '2-digit',
              omitZeroMinute: false,
              hour12: false
            },
            nowIndicator: true // Shows the current time indicator
          },
          timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 },
            slotDuration: '00:30:00',
            slotLabelFormat: {
              hour: '2-digit',
              minute: '2-digit',
              omitZeroMinute: false,
              hour12: false
            },
            nowIndicator: true
          }
        }
      }
    }
  }
}
</script>

<template>
  <div class="p-4 sm:ml-64 bg-bgCalendar">
    <h3 class="ml-24 mt-3 text-2xl text-navHeader">Calendar</h3>
    <div class="bg-white calendar-container">
      <h4 class="text-sidebar text-lg mb-4">Calendar View</h4>
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>

<style>
.calendar-container {
  margin: 36px 95px 103px 95px;
  padding: 20px;
}

.fc .fc-toolbar-title {
  font-size: 18px;
  color: #4d4f5c;
  margin: 0px;
}

.fc .fc-button {
  background-color: white;
  border-color: #d7dae2;
  color: #4d4f5c;
  padding: 5px 15px;
}
.fc .fc-button:hover {
  color: #3b86ff;
  background-color: white !important;
  border-color: #d7dae2 !important;
}
.fc .fc-button:active {
  color: #3b86ff;
  background-color: white;
  border-color: #d7dae2 !important;
}
.fc .fc-button.fc-button-active {
  color: #3b86ff !important;
  background-color: white !important;
  border-color: #d7dae2 !important;
}
.fc .fc-button:disabled {
  background-color: white !important;
  color: #3b86ff;
  border-color: #d7dae2 !important;
}

.fc .fc-day-today {
  background-color: #F0F0F7 !important;
  border-color: #d7dae2;
}

.fc-col-header {
  background-color: #F5F6FA !important;
  font-size: 11px !important;
  color: #a3a6b4 !important;
}

.fc-col-header-cell {
  text-transform: uppercase;
  border: none !important;
  padding: 16px 50px !important;
}

.fc .fc-daygrid-day-number {
  color: #43425D !important;
}
</style>




