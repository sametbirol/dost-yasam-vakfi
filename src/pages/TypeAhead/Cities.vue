<template>
    <div class="search">
        <div class="msg">{{ countMessage }}</div>
        <input id="searcharea" type="text" placeholder="Search for a city or a state" v-model="searchinput">
        <ul>
            <li v-for="city in filtered" key="city.rank">{{ city.city }},{{ city.state }}<span>{{ city.population }}</span>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { computed, nextTick, onMounted, ref } from 'vue';

const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
const cities = ref([])
const searchinput = ref("")

const useCities = async () => {
    console.log("API is called for fetching cities...")
    await fetch(endpoint).then(blob => blob.json()).then(x => cities.value = x)
    await nextTick()
    localStorage.setItem("cities", JSON.stringify(cities.value))
}
const lowercaseQueryCheck = (string, query) => {
    return string.toLowerCase().includes(query.toLowerCase())
}
const countMessage = computed(() => {
    return `There ${filtered.value.length == 1 ? "is":"are"} ${filtered.value.length ? filtered.value.length : "no"} cit${filtered.value.length == 1? "y" : "ies"}.`
})
const filtered = computed(() => {
    return cities.value.filter(x => {
        return lowercaseQueryCheck(x.city, searchinput.value) || lowercaseQueryCheck(x.state, searchinput.value)
    })
})
onMounted(async () => {
    cities.value = JSON.parse(localStorage.getItem("cities") || "[]")
    if (cities.value.length == 0) {
        await useCities()
    }
});
</script>

<style scoped>
ul>li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 16px;
    background-color: orange;
}


ul>li:nth-child(2n) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to bottom, #ffffff -20%, #ffa500 100%);
}

ul>li:nth-child(2n+1) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top, #ffffff -20%, #ffa500 100%);
}

ul {
    padding: 10px;
}

.search {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
}

.msg {
    color: gray;
    font-style: italic;
    font-size: 14px;
}

.hl {
    background-color: red;
}
</style>