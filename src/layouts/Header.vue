<template>
    <div class="header">
        <RouterLink to="/">Home</RouterLink>
        <div>
            <img v-for="logo in logos" :key="logo" :src="logo"/>
        </div>
    </div>
</template>
<script setup>
import {reactive} from 'vue'
import * as Logos from '@/assets/header/logos';
import MediaLogo from '../components/MediaLogo.vue';
const logos = reactive({...Object.values(Logos)})

</script>



<style scoped>
.header{
    width: 100%;
    display:flex;
    justify-content: flex-start;
    gap:20px;
    /* height: 200px; */
    background-color: antiquewhite;
    align-items: center;
}
.header > *{
    padding: 8px;
    margin: 16px;
}

</style>