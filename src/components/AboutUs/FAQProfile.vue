<template>
    <div>
        <div class="subheader">{{ props.question }}</div>
        <div class="text">{{ props.answer }}</div>
    </div>
</template>
<style scoped>
.text {
    font-family: 'Spline Sans Mono', monospace;
}

.subheader {
    font-family: 'Spline Sans Mono', monospace;
    font-size: var(--base-font-size);
}
</style>
<script setup>
const props = defineProps({
    question: {
        type: String,
        default: "Soru?"
    },
    answer: {
        type: String,
        default: "Cevap."
    },
})
</script>