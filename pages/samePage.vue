<script setup lang="ts">
import { useAppStore } from "~/stores/useApp";
import { useTodos } from '~/stores/todos'
import {Api} from "~/api/Api";
const store = useAppStore()
const api = new Api()

// const { data: applicationInfo, pending } = await useAsyncData('ApplicationInfo', () => api.applicationController.getApplicationInfo())
// const { data: here } = await useAsyncData('someData', () => $fetch("https://fakestoreapi.com/products"))

// console.error("applicationInfo", applicationInfo)
// console.error("here", here.value)

const ahaha = () => {
    store.increment()
}

const todos = useTodos()

await todos.fetch()
await todos.appInit()

// console.log("todos.todo ", todos.todo )

</script>

<template>
    <div>
        <h2>Home</h2>
<!--        <h1>{{ pending }}</h1>-->
        <NuxtLink to="/">
            home
        </NuxtLink>

        <div style="background: #ffbf29">
            <div class="parent">
                <div v-for="pr in todos.todo" class="item">
                    <div class="title">
                        {{ pr.title }}
                    </div>
                    <img :src="pr.image" alt="" class="img" loading="lazy">
                </div>
            </div>
        </div>



        {{ store.name }}
        {{ store.count }}
        <button @click="ahaha">
            click
        </button>
    </div>
</template>

<style lang="scss" scoped>
.parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid orange;
        border-radius: 10px;
        padding: 10px;
    }
    .img {
        height: 100px;
        width: 100px;
    }
}
</style>
