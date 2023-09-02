<template>
    <div class="hero">
        <div class="hero-wrapper">
            <h2 class="header">Be the change</h2>
            <p class="info">Your donations can make a world of difference in the lives of people with Down Syndrome. It doesn’t just help
                improve their quality of life – it opens up possibilities they never knew they had!</p>
            <div class="stats">
                <div>
                    <h3>{{ families }}</h3>
                    <p>Families Supported</p>
                </div>
                <div>
                    <h3>{{ programs }}</h3>
                    <p>Programs Funded</p>
                </div>
                <div>
                    <h3>{{ funds }}</h3>
                    <p>Dollars raised</p>
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
    };
    window.requestAnimationFrame(step);
}
animateValue(families,0,FAMILY_LIMIT,1000)
animateValue(programs,0,PROGRAMS_LIMIT,1000)
animateValue(funds,0,FUNDS_LIMIT,1000)
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
    padding: 40px ;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.stats{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.stats h3{
    font-size: 40px;
    font-weight: 800;
}
.header{
    font-size: 64px;
    font-weight: 700;
}

@media (min-width: 1025px) and (max-width: 1280px) {

    .grid {
        height: 330px;
        width: 330px;
        gap: 15px;
    }

    .head {
        align-items: center;
    }

    .head .header {
        font-size: 70px;
    }

    .hero-wrapper {
        flex-direction: column;
    }


}

@media (min-width: 768px) and (max-width: 1024px) {

    .grid {
        height: 290px;
        width: 290px;
        gap: 10px;
    }

    .head {
        align-items: center;
    }

    .head .header {
        font-size: 60px;
    }

    .hero-wrapper {
        flex-direction: column;
    }

}

@media (max-width: 767px) {

    .grid {
        height: 260px;
        width: 260px;
        gap: 10px;
    }

    .head {
        align-items: center;
    }

    .head .header {
        font-size: 50px;
    }

    .hero-wrapper {
        flex-direction: column;
    }

}
</style>