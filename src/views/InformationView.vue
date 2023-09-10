<template>
    <MediaHolder :image="`url(${image})`">
    <h1 class="header">
        Down Sendromu Hakkında
    </h1>        
    </MediaHolder>  
    <TabWrapper ></TabWrapper>
</template>
<script setup>
import MediaHolder from '@/components/MediaHolder.vue'
import image from '@/assets/media/default-baby.jpg'
import TabWrapper from '../components/Information/TabWrapper.vue';
</script>