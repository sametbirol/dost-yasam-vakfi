<template>
    <div class="wrapper">
        <div class="container">

            <div class="header">Kurucular</div>
            <div class="subheader">Dost Yaşam Vakfı'nın başarılı ve tecrübeli kurucu ekibi, fark yaratmayı hedefliyor.</div>

            <div class="founders">
                <FounderProfile v-for="obj in objs" v-bind="obj"></FounderProfile>
            </div>
        </div>
    </div>
</template>
<script setup>
import FounderProfile from './FounderProfile.vue';

const objs = [
    {
        image: "Helloo",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "Helloo",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "Helloo",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "Helloo",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "Helloo",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
]
</script>
<style scoped>
.text {
    font-size: var(--base-subheader-size);

}

.header {
    font-size: var(--header-size-large);
    font-family: "Elsie", cursive;
}

.subheader {
    font-size: var(--subheader-size-medium);
    padding-left: 24px;
    width: 70%;
    text-align: center;
}

.container {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: var(--blue-lighten-1);
    /* font-family: 'Electrolize', sans-serif; */
    color: var(--blue-darken-1);
    padding: 100px 0 100px 0;
    gap:20px;
}

.wrapper {
    background-color: var(--blue-lighten-1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.founders {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap:30px;
}
</style>