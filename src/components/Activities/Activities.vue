<template>
    <div class="wrapper">
        <div class="container">
            <ActivityProfile v-for="obj in objs" v-bind="obj"></ActivityProfile>
        </div>
    </div>
</template>
<script setup>
import ActivityProfile from './ActivityProfile.vue';
const objs = [
    {
        activityName : "Mutlu Anılar",
        description : "Çocuklarımızla eğlenerek özel anılar biriktiriyoruz.",
    },
    {
        activityName : "Yetenekleri Keşfet",
        description : "Çocuklarımızın potansiyelini ortaya çıkaran, onları cesaretlendiren etkinlikler düzenliyoruz."
    },
    {
        activityName : "Yetenekleri Keşfet",
        description : "Bireylerin potansiyelini ortaya çıkaran, onları cesaretlendiren etkinlikler düzenliyoruz."
    },
    {
        activityName : "Yetenekleri Keşfet",
        description : "Bireylerin potansiyelini ortaya çıkaran, onları cesaretlendiren etkinlikler düzenliyoruz."
    },
]
</script>
<style scoped>
.wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-lighten-1);
    padding: 120px;
}
.container{
    display: flex;
    flex-wrap: wrap;
    width: 1040px;
    justify-content: flex-start;
    align-items: flex-start;
    gap:40px;
}
</style>