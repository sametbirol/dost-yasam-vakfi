<template>
    <MediaHolder :image="`url(${image})`">
    </MediaHolder>
    <div>Anasayfa</div>
</template>
<script setup>
import MediaHolder from '@/components/MediaHolder.vue'
import image from '@/assets/media/default-baby.jpg'
</script>