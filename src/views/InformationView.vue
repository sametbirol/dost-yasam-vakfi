<template>
    <MediaHolder :image="`url(${image})`">
        <template v-slot:header>
            <h1 class="title">Down Sendromu Hakkında</h1>
        </template>
        <!-- <template v-slot:router>
            <RouterLink to="/" class="inline">Anasayfa</RouterLink> / 
            <RouterLink to="/bilgi-kösesi" class="inline">Bilgi Köşesi</RouterLink> /
            <a class="disabled">Down Sendromu Hakkında</a>
        </template> -->

    </MediaHolder>  
    <div>Bilgi Köşesi</div>
</template>
<script setup>
import MediaHolder from '@/components/MediaHolder.vue'
import image from '@/assets/media/default-baby.jpg'
</script>