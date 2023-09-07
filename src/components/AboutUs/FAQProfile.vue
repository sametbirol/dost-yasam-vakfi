<template>
    <div class="container">
        <div class="text">{{ props.question }}</div>
        <div class="footer">{{ props.answer }}</div>
    </div>
</template>
<style scoped>
.text,.footer {
    font-family: 'Spline Sans Mono', monospace;
}

.container{
    align-items: flex-start;
    flex-direction: column;
    padding: 12px;
    width: 400px;
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