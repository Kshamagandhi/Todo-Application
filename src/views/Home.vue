<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

import Todo from '@/components/Todo.vue';


const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
       
</script>

<template>
    <div v-if="user">
        <h1>Hi {{user.firstName}}!</h1>
        <p><router-link to="/users">Manage Users</router-link></p>
        <h2>Your Tasks</h2>
        <Todo />
    </div>
</template>
