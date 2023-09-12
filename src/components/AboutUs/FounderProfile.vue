<template>
    <div class="profile normal-logo">
        <img :src="props.image" class="photo small-logo">
        <div class="containerr">
            <div class="founderName text">{{ founderNametoUpperCase }}</div>
            <div class="footer">{{ roletoUpperCase }}</div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
    image: {
        type: String,
        default: null
    },
    founderName: String,
    role: String
})
const founderNametoUpperCase = computed(() => {
    return props.founderName.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ")
})
const roletoUpperCase = computed(() => {
    return props.role.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ")
})
</script>
<style scoped>
.profile {
    aspect-ratio: 1/1;

    gap: 24px;
    border-radius: 32px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background-color: var(--blue-lighten-2);
    color: var(--blue-darken-1);
}

.photo {
    background-color: black;
    aspect-ratio: 1 / 1;
    border-radius: 48px;
}

.containerr {
    width: 85%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    /* padding: 12px; */
    background-color: var(--blue-lighten-1);
    border-radius: 12px;
}

.founderName {
    text-align: center;
    font-family: "Electrolise";
}
</style>