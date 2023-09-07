<template>
    <div class="profile">
        <div class="founderName">{{ founderNametoUpperCase }}</div>
        <div class="role">{{ roletoUpperCase }}</div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
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
    width: 300px;
    min-width: 100px;
    height: 100px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: var(--blue-lighten-2);
    color: var(--blue-lighten-3);
    gap: 10px;
}

.founderName {
    text-align: center;
    font-family: "Electrolise";
    font-size: var(--font-size-xl);
}
</style>