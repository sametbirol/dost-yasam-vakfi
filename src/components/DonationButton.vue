<template>
    <button class="btn"><slot>Donate Now</slot></button>
</template>
<script setup>
const props = defineProps({
    color : {
        type: String,
        default: "black"
    },
    bgcolor : {
        type: String,
        default: "white"
    }
})
</script>
<style scoped>
.btn{
    color:v-bind("props.color");
    background-color: v-bind("props.bgcolor");
    padding: 16px;
    border-radius: 32px;
    font-size: 24px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif   ;
    letter-spacing: 1px;
    
}
.btn:hover{
    cursor: pointer;
}
</style>