<template>
    <MediaHolder :image="`url(${image})`">
    <h1 class="header">
        Down Sendromu Hakkında
    </h1>        
    </MediaHolder>  
    <div>Bilgi Köşesi</div>
</template>
<script setup>
import MediaHolder from '@/components/MediaHolder.vue'
import image from '@/assets/media/default-baby.jpg'
</script>