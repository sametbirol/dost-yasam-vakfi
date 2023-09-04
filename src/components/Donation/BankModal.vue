<template>
    <div class="bank">
        <img class="image" src="https://www.ziraatbank.com.tr/PublishingImages/Subpage/bankamiz/BankamizGorselleri/Ziraat_Bankasi_Logo_JPEG.jpg"/>
        <div class="bank-name">
            <slot></slot>
        </div>
        <button class="modal" ref="modal" @click="handleUpdate">&gt;</button>
    </div>
    <div v-if="modalVal">{{ props.IBAN }}</div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    image: {
        type: String,
        default: "https://www.ziraatbank.com.tr/PublishingImages/Subpage/bankamiz/BankamizGorselleri/Ziraat_Bankasi_Logo_JPEG.jpg"
    },
    IBAN: {
        type: String,
        default: "False"
    },
    modal: {
        type: Boolean,
        default: false
    }
})
const modal = ref(null)
const modalVal = ref(props.modal)
const handleUpdate = () => {
    modalVal.value = !modalVal.value
    modal.value.classList = modal.value.classList == "modal" ? "modal active" : "modal";
    console.log(modal.value.classList)
}
</script>
<style scoped>
.bank {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    width: 100%;
    gap: 10px;
    color: black;
    background-color: white;
    border-radius: 100px;
    overflow: hidden;
    background-color: var(--primary-color);
}
.image{
    height: 200px;
}


.bank-name {
    flex: 1 0 auto;
    font-size: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}

.modal {
    font-size: 30px;
    all: unset;
    width: 100px;
    height: 200px;
    border: none;
    transition: 2s;
}
.modal.active {
    transform: rotate(90);
}

.modal:hover {
    cursor: pointer;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    .image{
        height: 150px;
        width: 250px;
    }
    .bank,.modal{
        height: 150px;
        font-size: 24px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .image{
        height: 140px;
    }
    .bank,.modal{
        height: 120px;
        
    }
    .bank-name{
        font-size: 24px;
    }
}

@media (max-width: 767px) {
    .bank-name{
        display: none;
    }
    .bank,.modal{
        height: 90px;
        font-size: 16px;
        /* width: 200px; */
    }
    .image{
        height: 100px;
    }
}
</style>