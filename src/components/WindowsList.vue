<template>
  <div class="windows-list pt-3">

    <div class="d-flex mb-2">
      <button type="button" class="btn btn-primary" @click="toggleFormVisibility" v-if="!isFormVisible">Create new window</button>
    </div>

    <windows-list-item v-if="!isFormVisible" v-for="window in windows" :window="window" :key="window.id" @window-updated="updateWindow" @delete-window="showConfirmModal">
    </windows-list-item>

    <confirm-dialog ref="confirmModal" @confirm-delete="deleteWindow"/>
    <window-creation-form v-if="isFormVisible" :toggle-visibility="toggleFormVisibility"
                          @window-created="addNewWindow"
    ></window-creation-form>
  </div>
</template>


<script>
import axios from 'axios';
import { API_HOST } from '../config';
import WindowsListItem from './WindowsListItem.vue';
import ConfirmDialog from "./ConfirmDialog.vue";
import WindowCreationForm from './WindowCreationForm.vue';

export default {
  components: {
    WindowsListItem,
    ConfirmDialog,
    WindowCreationForm
  },
  name: 'WindowsList',
  data: function () {
    return {
      /* Initialize windows with an empty array, while waiting for actual data to be retrieved from the API */
      windows: [],
      isFormVisible: false
    }
  },
  created: async function () {
    let response = await axios.get(`${API_HOST}/api/windows`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
    let windows = response.data;
    this.windows = windows;
  },
  methods: {
    updateWindow(newWindow) {
      /* Find the place of window object with the same Id in the array, and replace it */
      let index = this.windows.findIndex(window => window.id === newWindow.id);
      console.log("update window", newWindow);
      this.windows.splice(index, 1, newWindow);
    },
    showConfirmModal(windowId) {
      this.$refs.confirmModal.show(windowId);
    },
    async deleteWindow(windowId) {
      try {
        await axios.delete(`${API_HOST}/api/windows/${windowId}`);
        this.windows = this.windows.filter(window => window.id !== windowId);
      } catch (error) {
        console.error('Error deleting window', error);
      }
    },
    async fetchWindows() {
      try {
        let response = await axios.get(`${API_HOST}/api/windows`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'
          }
        });
        this.windows = response.data;
      } catch (error) {
        console.error('Error fetching windows:', error);
      }
    },
    toggleFormVisibility() {
      this.isFormVisible = !this.isFormVisible;
    },
    addNewWindow(newWindow) {
      this.fetchWindows();
      this.isFormVisible = false;
    }
  }
}
</script>

<style lang="scss">
</style>
