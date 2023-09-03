<template>
    <div class="hero">
        <div class="hero-wrapper">
        <BankModal>Yapı Kredi</BankModal>
        <BankModal>İş bankası</BankModal>
        <BankModal>Ziraat Bankası</BankModal>
        </div>
    </div>
</template>
<script setup>
import BankModal from './BankModal.vue';
const hello = () => {
    console.log("hello")
}
</script>
<style scoped>
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 470px; */
    background-color: #b6c5b4;
}

.hero-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 70%;
    font-size: 30px;
    flex-wrap: wrap;
    gap: 30px;
    color: aliceblue;
    padding: 40px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}



@media (min-width: 1025px) and (max-width: 1280px) {}

@media (min-width: 768px) and (max-width: 1024px) {}

@media (max-width: 767px) {}
</style>