<template>
    <div class="circle">
        <button class="upward" @click="scrollToTopofPage"><img src="../../assets/media/upwardArrow.svg" width="64" height="64"/></button>
    </div>
</template>
<script setup>
const scrollToTopofPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>
<style scoped>
.upward{
    position: absolute;
    right: 30px;
    bottom: 30px;
}
</style>