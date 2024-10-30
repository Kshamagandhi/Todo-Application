<template>
  <div class="task-item">
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.task-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
