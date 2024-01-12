<template>
  <div class="rooms-list pt-3">
    <div v-for="room in rooms" :key="room.id" class="room border border-secondary rounded p-2 mb-2">
      <div class="top-row d-flex">
        <div class="room-name fw-bold pe-3">{{ room.name }}</div>
        <div class="floor-name text-muted">Floor {{ room.floor }}</div>
      </div>
      <hr>
      <div v-if="room.windows.length > 0"> <!-- Check if there are windows in the room -->
        <div v-for="window in room.windows" :key="window.id" class="window border border-secondary rounded p-2 mb-2">
          <div class="top-row d-flex">
            <div class="window-name fw-bold pe-3">{{ window.name }}</div>
            <div class="open-status ms-4" :class="{ open: window.status === 'Open', closed: window.status !== 'Open' }">
              <span class="icon" v-html="window.status === 'Open' ? '&#x2B24;' : '&#x2716;'"></span> {{ window.status }}
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-muted">No windows in this room.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_HOST } from '../config';

export default {
  name: 'RoomsList',
  data() {
    return {
      rooms: [],
      windows: [],
    };
  },
  async created() {
    try {
      let roomsResponse = await axios.get(`${API_HOST}/api/rooms`);
      let windowsResponse = await axios.get(`${API_HOST}/api/windows`);

      // Combine rooms and windows
      this.rooms = roomsResponse.data.map(room => ({
        ...room,
        windows: windowsResponse.data.filter(window => window.roomId === room.id)
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
</script>
  

<style lang="scss">
.open-status {
  .icon {
    position: relative;

  }

  &.open {
    color: #198754;
    .icon {
      font-size: 12px;
      top: -3px;
    }

  }

  &.closed {
    color: #dc3545;

  }
}

</style>