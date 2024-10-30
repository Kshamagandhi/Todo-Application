import Layout from '@/views/users/Layout.vue'; // Adjust path as necessary
import List from '@/views/users/List.vue'; // Adjust path as necessary
import AddEdit from '@/views/users/AddEdit.vue'; // Adjust path as necessary
//import { Layout as TaskLayout,List as , AddEdit } from '@/views/tasks';
//import Todo from '@/components/Todo.vue';

export default {
    path: '/users',
    component: Layout,
    children: [
        { path: '', component: List },
        { path: 'add', component: AddEdit },
        { path: 'edit/:id', component: AddEdit }
    ]
};

