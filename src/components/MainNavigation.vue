<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a
          class="nav-link"
          :class="{ active: activeTab === 'windows' }"
          @click.prevent="selectTab('windows')"
      >Windows</a>
    </li>
    <li class="nav-item">
      <a
          class="nav-link"
          :class="{ active: activeTab === 'rooms' }"
          @click.prevent="selectTab('rooms')"
      >Rooms</a>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'MainNavigation',
  data() {
    return {
      activeTab: 'windows',
    };
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
      this.$emit('tab-changed', tab);
    },
  },
};
</script>
