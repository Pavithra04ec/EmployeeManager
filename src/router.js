import HelloWorld from './components/HelloWorld.vue'
import profile from './components/profile.vue'
import Manager from './components/Manager.vue'


export const routes = [
    {
        path:'*',
        redirect: {
            name: "HelloWorld"
        }
        //component : app
    },
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/Employee/:Email',
        name: 'profile',
        component: profile
    },
    {
        path: '/Manager/:Email',
        name: 'Manager',
        component: Manager
    }
    
]