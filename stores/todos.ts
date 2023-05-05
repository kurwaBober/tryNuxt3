import {defineStore} from 'pinia'
import {Api} from "~/api/Api";

export const useTodos = defineStore('todos', {
    state: () => ({
        todo: {},
        applicationInfo: {}
    }),

    actions: {
        async fetch() {
            this.todo = await $fetch("https://fakestoreapi.com/products")
        },
        async appInit() {
            const api:any = new Api();

            // const data = await api.applicationController.getApplicationInfo();
            const data = await $fetch("/api/app")
            console.log("someSata", data);
            // this.applicationInfo =  }

        }
    }
})