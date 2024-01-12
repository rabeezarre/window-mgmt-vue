<template>
    <div class="rooms-list pt-3">
        <div class="window border border-secondary rounded p-2 mb-2" :class="{ expanded: isExpanded }">
            <div class="top-row d-flex" @click="toggleExpand">
                <div class="window-name fw-bold pe-3">Room 1</div>
                <div class="room-name text-muted">Floor 1</div>
            </div>
            <hr>
            <div class="window border border-secondary rounded p-2 mb-2">
                <div class="top-row d-flex">
                    <div class="window-name fw-bold pe-3">Window 1</div>

                    <div class="open-status ms-4 open">
                        <span class="icon">&#x2B24;</span> Open
                    </div>
                </div>
            </div>

            <div class="window border border-secondary rounded p-2 mb-2">
                <div class="top-row d-flex">
                    <div class="window-name fw-bold pe-3">Window 2</div>

                    <div class="open-status ms-4 closed">
                        <span class="icon">&#x2716;</span> Closed
                    </div>
                </div>
            </div>
        </div>

        <div class="window border border-secondary rounded p-2 mb-2" :class="{ expanded: isExpanded }">
            <div class="top-row d-flex" @click="toggleExpand">
                <div class="window-name fw-bold pe-3">Room 2</div>
                <div class="room-name text-muted">Floor 1</div>
            </div>
            <hr>
            <div class="window border border-secondary rounded p-2 mb-2">
                <div class="top-row d-flex">
                    <div class="window-name fw-bold pe-3">Window 3</div>

                    <div class="open-status ms-4 open">
                        <span class="icon">&#x2B24;</span> Open
                    </div>
                </div>
            </div>

            <div class="window border border-secondary rounded p-2 mb-2">
                <div class="top-row d-flex">
                    <div class="window-name fw-bold pe-3">Window 4</div>

                    <div class="open-status ms-4 closed">
                        <span class="icon">&#x2716;</span> Closed
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import axios from 'axios';
import { API_HOST } from '../config';

export default {
    components: {

    },
    name: 'RoomsList',
    data: function () {
        return {
            /* Initialize rooms with an empty array, while waiting for actual data to be retrieved from the API */
            rooms: []
        }
    },
    created: async function () {
        let response = await axios.get(`${API_HOST}/api/rooms`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        });
        this.rooms = response.data;
    },
    methods: {
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