<template>
    <div class="wrapper">
        <div class="container">
            <ActivityProfile v-for="obj in objs" v-bind="obj" :imageURL="`url(${obj.imageURL})`"></ActivityProfile>
        </div>
    </div>
</template>
<script setup>
import ActivityProfile from './ActivityProfile.vue';
const objs = [
    {
        imageURL : "https://media.istockphoto.com/id/482247210/tr/foto%C4%9Fraf/young-girl-smiling-on-background-of-blue-wall.jpg?s=612x612&w=0&k=20&c=XSDVKVb9wrPH9w_zz6hsmAsGJy77vwPB7YrgefsP7dw=",
        activityName : "Mutlu Anılar",
        description : "Çocuklarımızla eğlenerek özel anılar biriktiriyoruz.",
    },
    {
        imageURL : "https://media.istockphoto.com/id/541837618/tr/foto%C4%9Fraf/cute-little-girl-with-painted-hands.jpg?s=612x612&w=0&k=20&c=6oog7IoETrV4eCaLbGb2B0ByK3ACND9D59RP47r4CmY=",
        activityName : "Mutlu Anılar",
        description : "Çocuklarımızla eğlenerek özel anılar biriktiriyoruz.",
    },
    {
        imageURL: "https://media.istockphoto.com/id/1288430707/tr/foto%C4%9Fraf/ne%C5%9Feli-down-sendromu-yeti%C5%9Fkin-adam-portre-arka-bah%C3%A7esinde-a%C3%A7%C4%B1k-havada-k%C3%B6pek-ile-oynarken.jpg?s=612x612&w=0&k=20&c=Hs4kcneEwHwCjNaQr4Rn24nGv6RdXHaPi7Rpm0VaeX4=",
        activityName : "Mutlu Anılar",
        description : "Çocuklarımızla eğlenerek özel anılar biriktiriyoruz.",
    }
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