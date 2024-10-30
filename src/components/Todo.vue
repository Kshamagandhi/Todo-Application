<template>
  <div class="container" style="max-width: 600px">
    <!-- Heading -->
    <h2 class="text-center mt-5">My Todo App</h2>

    <!-- Input -->
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form-control"
      />
      <input
        type="date"
        v-model="task.dueDate"
        class="form-control mb-2"
      />
      <select v-model="task.priority" class="form-control mb-2">
        <option disabled value="">Select priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button class="btn btn-warning rounded-0" @click="submitTask">
        SUBMIT
      </button>
    </div>
<h6 class="text-center mt-5"> On one click, change the status of your todo list </h6>
<div class="d-flex justify-content-between mt-3">
      <button class="btn btn-outline-secondary" @click="sortTasks('dueDate')">Sort by Due Date</button>
      <button class="btn btn-outline-secondary" @click="sortTasks('priority')">Sort by Priority</button>
      <button class="btn btn-outline-secondary" @click="sortTasks('status')">Sort by Status</button>
    </div>
    <!-- Task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Due Date</th>
          <th scope="col">Priority</th>
          <th scope="col" style="width: 120px">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ 'line-through': task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
           <td>{{ task.dueDate }}</td>
          <td>{{ task.priority }}</td>
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-success': task.status === 'finished',
                'text-warning': task.status === 'in-progress',
              }"
            >
              {{ capitalizeFirstChar(task.status) }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      name: "",
        dueDate: "",
        priority: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],

      /* Status could be: 'to-do' / 'in-progress' / 'finished' */
      tasks: [
        {
          name: "Steal bananas from the supermarket.",
          dueDate: "2023-12-01",
          priority: "High",
          status: "to-do",
        },
        {
          name: "Eat 1 kg chocolate in 1 hour.",
          dueDate: "2023-12-02",
          priority: "Medium",
          status: "in-progress",
        },
        {
          name: "Create YouTube video.",
          dueDate: "2023-12-03",
          priority: "Low",
          status: "finished",
        },
      ],
    };
  },

  methods: {
    /**
     * Capitalize first character
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Change status of task by index
     */
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },

    /**
     * Deletes task by index
     */
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    /**
     * Edit task
     */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    /**
     * Add / Update task
     */
    submitTask() {
      if (this.task.length === 0 || !this.task.dueDate || !this.task.priority) return;

      /* We need to update the task */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        /* We need to add new task */
        this.tasks.push({
          name: this.task,
          status: "todo",
        });
      }

      this.task = {
        name: "",
        dueDate: "",
        priority: "",
      };
    },
    sortTasks(criteria) {
      if (criteria === 'dueDate') {
        this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      } else if (criteria === 'priority') {
        const priorityOrder = ['Low', 'Medium', 'High'];
        this.tasks.sort((a, b) => priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority));
      } else if (criteria === 'status') {
        const statusOrder = ['to-do', 'in-progress', 'finished'];
        this.tasks.sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status));
      }
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.line-through {
  text-decoration: line-through;
}
</style>