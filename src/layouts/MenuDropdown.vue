<template>
    <div class="float">
        <RouterList class="dropdown"></RouterList>
        <MediaLogo></MediaLogo>
    </div>
</template>
<script setup>
import RouterList from './RouterList.vue';
import MediaLogo from '@/components/MediaLogo.vue'
import {ref} from 'vue';
</script>
<style scoped>
.float{
    /* width: 30%; */
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background-color: var(--pink-pastel-color-2);
    transform: translateX(-100%);
    transition:transform 0.3s ease-in-out;
    z-index: 3;
    display: grid;
    place-items: center;
}
.dropdown{
    flex-direction: column;
    position: relative;
    padding: 60px;
}
.float.active{
    transform: translateX(0);
}
.float.active::before{
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow:-5px 0 10px 10px var(--blue-darken-2);
}
</style>