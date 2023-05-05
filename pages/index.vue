<script setup lang="ts">
import { useAppStore } from "~/stores/useApp";
import {Api} from "~/api/Api";
const store = useAppStore()
const api = new Api()

const { data, pending } = await useLazyAsyncData('count', () => api.applicationController.getApplicationInfo())
console.error("data", data)

const ahaha = () => {
    store.increment()
}
</script>

<template>
    <div>
        <h2>Home</h2>
        <h1>{{ pending }}</h1>
        <NuxtLink to="samePage">
            samePAge
        </NuxtLink>


        {{ store.name }}
        {{ store.count }}
        <button @click="ahaha">
            click
        </button>
    </div>
</template>

<style scoped>

</style>
