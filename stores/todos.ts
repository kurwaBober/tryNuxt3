import {defineStore} from 'pinia'
import {Api, ApplicationModel} from "~/api/Api";

interface State {
    todo: any
    applicationInfo: ApplicationModel
}

export const useTodosStore = defineStore('todos', {
    state: (): State => ({
        todo: {},
        applicationInfo: {}
    }),

    actions: {
        async fetch() {
            console.log("actions fetch");
            this.todo = await $fetch("https://fakestoreapi.com/products")
        },
        async appInit() {
            const api:any = new Api({baseUrl: ""});
            console.error("appInit")
            const data = await api.applicationController.getApplicationInfo();
            this.applicationInfo = data;
            // const lata = await $fetch("/api/app");
            console.log("someSata", data);
            return data;
            // this.applicationInfo =  }
        }
    }
})