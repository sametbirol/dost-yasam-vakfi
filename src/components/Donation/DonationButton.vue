<template>
    <button class="btn" @click="handleScrollDown">
        <slot>Donate Now</slot>
    </button>
</template>
<script setup>
const props = defineProps({
    color: {
        type: String,
        default: "black"
    },
    bgcolor: {
        type: String,
        default: "white"
    }
})
const handleScrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
}
</script>
<style scoped>
.btn {
    color: v-bind("props.color");
    background-color: v-bind("props.bgcolor");
    padding: 16px;
    border-radius: 32px;
    font-size: 24px;
    font-family: 'Spline Sans Mono', monospace;
    letter-spacing: 1px;

}

.btn:hover {
    cursor: pointer;
}

@media (min-width: 1025px) and (max-width: 1280px) {

    .btn {
        padding: 12px;
        border-radius: 28px;
        font-size: 20px;
    }

}

@media (min-width: 768px) and (max-width: 1024px) {

    .btn {
        padding: 8px;
        border-radius: 24px;
        font-size: 16px;
    }

}

@media (max-width: 767px) {

    .btn {
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }


}
</style>