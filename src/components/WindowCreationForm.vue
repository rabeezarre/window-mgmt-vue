<template>
  <div class="window-creation-form">
    <div class="d-flex mb-2">
      <button @click="createWindow" class="btn btn-primary me-2">Create</button>
      <button @click="toggleVisibility" class="btn btn-danger">Cancel</button>
    </div>

    <div v-if="error" class="alert alert-danger" role="alert">
      An unexpected problem occurred, the window could not be created.
    </div>

    <form @submit.prevent="createWindow">
      <input v-model="newWindow.name" type="text" class="form-control mb-3" placeholder="Window name">
      <select v-model="newWindow.roomId" class="form-select">
        <option disabled value="">-- Select room --</option>
        <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
      </select>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { API_HOST } from '../config';

export default {
  props: {
    toggleVisibility: Function
  },
  data() {
    return {
      rooms: [],
      newWindow: {
        name: '',
        roomId: ''
      },
      error: false
    };
  },
  async created() {
    try {
      let response = await axios.get(`${API_HOST}/api/rooms`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true'
        }
      });
      this.rooms = response.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  },
  methods: {
    async createWindow() {
      try {
        await axios.post(`${API_HOST}/api/windows`, this.newWindow);
        this.$emit('window-created', this.newWindow);
        this.error = false;
      } catch (error) {
        this.error = true;
      }
    }
  },
};
</script>
