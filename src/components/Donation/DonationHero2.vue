<template>
    <div class="wrapper">
        <div class="container text">
            <h2 class="subheader">Değişime Sebep Ol</h2>
            <p class="info">"Bağışlarınız, Down Sendromlu insanların hayatlarında büyük bir fark yaratabilir. Sadece yaşam
                kalitelerini artırmakla kalmaz, aynı zamanda sahip olduklarıni bile bilmedikleri olanakları sağlar!"</p>
            <div class="stats">
                <div>
                    <h3 class="subheader">{{ families }}</h3>
                    <p>Aileye yardım edildi</p>
                </div>
                <div>
                    <h3 class="subheader">{{ programs }}</h3>
                    <p>Program başarıya ulaştı</p>
                </div>
                <div>
                    <h3 class="subheader">{{ funds }}</h3>
                    <p>Türk lirası toplandı</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const FAMILY_LIMIT = 200
const PROGRAMS_LIMIT = 25
const FUNDS_LIMIT = 1000
const families = ref(0)
const programs = ref(0)
const funds = ref(0)

const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.value = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            obj.value += "+"
        }
    };
    window.requestAnimationFrame(step);
}
animateValue(families, 0, FAMILY_LIMIT, 1000)
animateValue(programs, 0, PROGRAMS_LIMIT, 1000)
animateValue(funds, 0, FUNDS_LIMIT, 1000)
</script>
<style scoped>
.wrapper {
    background-color: var(--teal-pastel-color);
}

.container {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 30px;
    color: aliceblue;
    padding: 40px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.stats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
}

.subheader {
    font-weight: 700;
}

</style>