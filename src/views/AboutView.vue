<template>
    <!-- <MediaHolder :image="`url(${image})`">
        <template v-slot:header>
            <h1 class="title">Dost Yaşam Vakfı Kimdir?</h1>
        </template>
        <template v-slot:router>
            <RouterLink to="/" class="inline">Anasayfa</RouterLink> / 
            <RouterLink to="/hakkimizda" class="inline">Hakkımızda</RouterLink> /
            <a class="disabled">Dost Yaşam Vakfı Kimdir?</a>
        </template>

    </MediaHolder> -->
    <AboutUsHero></AboutUsHero>
    <AboutUsHero2></AboutUsHero2>
    <AboutUsFounders></AboutUsFounders>
    <AboutUsActivities></AboutUsActivities>
    <div>Hakkımızda</div>
</template>
<script setup>
import AboutUsHero from '../components/AboutUs/AboutUsHero.vue';
import AboutUsHero2 from '../components/AboutUs/AboutUsHero2.vue';
import AboutUsFounders from '../components/AboutUs/AboutUsFounders.vue';
import AboutUsActivities from '../components/AboutUs/AboutUsActivities.vue';
import MediaHolder from '@/components/MediaHolder.vue'
import image from '@/assets/media/default-baby.jpg'
import { RouterLink } from 'vue-router';
</script>