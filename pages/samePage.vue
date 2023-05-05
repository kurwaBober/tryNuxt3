<script setup lang="ts">
import { useAppStore } from "~/stores/useApp";
import {useTodosStore} from '~/stores/todos'
import {Api} from "~/api/Api";
import {storeToRefs} from "pinia";
const store = useAppStore()
const api = new Api()

// const { data: applicationInfo, pending } = await useAsyncData('ApplicationInfo', () => api.applicationController.getApplicationInfo())
// const { data: here } = await useAsyncData('someData', () => $fetch("https://fakestoreapi.com/products"))

// console.error("applicationInfo", applicationInfo)
// console.error("here", here.value)

const ahaha = () => {
  store.increment()
}

const todos = useTodosStore();
await todos.appInit();

const { applicationInfo, todo } = storeToRefs(store);

onMounted( async () => {
    console.error("onMounted");
    console.error("applicationInfo", applicationInfo);
    // await todos.appInit()
})


// console.log("todos.todo ", todos.todo )

</script>

<template>
    <div>
        <h2>Home</h2>
<!--        <h1>{{ pending }}</h1>-->
        <NuxtLink to="/">
            home
        </NuxtLink>


        <div v-if="applicationInfo?.games">
            <div class="gamesContainer">
                <div v-for="game in applicationInfo?.games" class="item">
                    <div class="title">
                        {{ game.name }}
                    </div>
                    <img :src="game.image" alt="" class="img" loading="lazy">
                </div>
            </div>
        </div>


<!--        <div style="background: #ffbf29">-->
<!--            <div class="parent">-->
<!--                <div v-for="pr in todo" class="item">-->
<!--                    <div class="title">-->
<!--                        {{ pr.title }}-->
<!--                    </div>-->
<!--                    <img :src="pr.image" alt="" class="img" loading="lazy">-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->



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
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid orange;
        border-radius: 10px;
        padding: 5px;
    }
    .img {
        height: 50px;
        width: 50px;
    }
}
</style>
