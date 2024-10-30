<template>
  <div>
    <h1>Tasks Page</h1>
    <div v-for="task in tasks" :key="task.id">
      <TaskItem :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue'; // Adjust the path as needed

export default {
  name: 'Task',
  components: {
    TaskItem
  },
  data() {
    return {
      // Example tasks array
      tasks: [
        { id: 1, title: 'Task 1', description: 'Description of Task 1' },
        { id: 2, title: 'Task 2', description: 'Description of Task 2' },
        { id: 3, title: 'Task 3', description: 'Description of Task 3' }
      ]
    };
  }
};
</script>

<style scoped>
/* Optional styling for Task.vue */
</style>
