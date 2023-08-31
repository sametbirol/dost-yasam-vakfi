<template>
    <MediaHolder :image="`url(${image})`">
        <template v-slot:header>
            <h1 class="title">Dost Yaşam Vakfı Kimdir?</h1>
        </template>
        <template v-slot:router>
            <RouterLink to="/" class="inline">Anasayfa</RouterLink> / 
            <RouterLink to="/hakkimizda" class="inline">Hakkımızda</RouterLink> /
            <a class="disabled">Dost Yaşam Vakfı Kimdir?</a>
        </template>

    </MediaHolder>
    <div>Hakkımızda</div>
</template>
<script setup>
import MediaHolder from '@/components/MediaHolder.vue'
import image from '@/assets/media/default-baby.jpg'
import { RouterLink } from 'vue-router';
</script>