<template>
  <div>
    <div class="card bg-base-100 shadow-xl w-full">
      <div class="card-body">
        <div class="card-title mb-3">
          Data Table jquery and vue js
        </div>
        <table class="table" id="example">
          <thead>
            <tr>
              <th>User-ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.userId }}</td>
              <td>{{ user.id }}</td>
              <td>{{ user.title }}</td>
              <td>
                <button class="btn btn-sm text-white" :class="[user.completed ? 'btn-success' : 'btn-error']"
                  @click="cek(user.id)">
                  <div v-if="user.completed == true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                  </div>
                  {{ user.completed }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async getUsers() {
      await axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(res => {
          this.users = res.data
          this.$nextTick(() => {
            $('#example').DataTable({
              // data: res.data,
              // "serverSide": true,
            });
          })
        })
    },
    cek(id) {
      console.log(id);
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>