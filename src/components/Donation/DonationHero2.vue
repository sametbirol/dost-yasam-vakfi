<template>
    <div class="hero">
        <div class="hero-wrapper">
            <h2 class="header">Değişime Sebep Ol</h2>
            <p class="info">"Bağışlarınız, Down Sendromlu insanların hayatlarında büyük bir fark yaratabilir. Sadece yaşam kalitelerini artırmakla kalmaz, aynı zamanda sahip olduklarıni bile bilmedikleri olanakları sağlar!"</p>
            <div class="stats">
                <div>
                    <h3>{{ families }}</h3>
                    <p>Aileye yardım edildi</p>
                </div>
                <div>
                    <h3>{{ programs }}</h3>
                    <p>Program başarıya ulaştı</p>
                </div>
                <div>
                    <h3>{{ funds }}</h3>
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
        else{
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
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 470px; */
    background-color: #006d77;
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

.stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
}

.stats h3 {
    font-size: 40px;
    font-weight: 800;
}

.header {
    font-size: 64px;
    font-weight: 700;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    .hero-wrapper {
        font-size: 24px;
    }

    .stats h3 {
        font-size: 30px;
        font-weight: 800;
    }

    .header {
        font-size: 48px;
        font-weight: 700;
    }


}

@media (min-width: 768px) and (max-width: 1024px) {

    .hero-wrapper {
        font-size: 20px;
    }

    .stats h3 {
        font-size: 26px;
        font-weight: 800;
    }

    .header {
        font-size: 40px;
        font-weight: 700;
    }

}

@media (max-width: 767px) {

    .hero-wrapper {
        font-size: 20px;
    }

    .stats h3 {
        font-size: 26px;
        font-weight: 800;
    }

    .header {
        font-size: 40px;
        font-weight: 700;
    }

}
</style>