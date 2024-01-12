<template>
  <div class="modal-background" v-if="isVisible">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          Are you sure you want to delete this window?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary" @click="confirmDelete">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      windowId: null
    };
  },
  methods: {
    show(id) {
      this.windowId = id;
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
    confirmDelete() {
      this.isVisible = false;
      this.$emit('confirm-delete', this.windowId);
    }
  }
}
</script>

<style>
.modal-background {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
