<template>
    <div class="wrapper">
        <div class="container">
            <div v-if="isMobile">
                <MediaLogo></MediaLogo>
            </div>
            <div v-else></div>
            <!-- <logo></logo> -->
            <div v-if="isMobile">
                <RouterList></RouterList>
            </div>
            <div v-else>
                <MenuButton @menu-toggle="callback" ref="ignoredButton" :class="isActive ? `active` : ``"></MenuButton>
                <MenuDropdown v-on-click-outside="onClickOutsideHandler" :class="isActive ? `active` : ``"></MenuDropdown>
            </div>

        </div>
    </div>
</template>
<script setup>
import MediaLogo from '@/components/MediaLogo.vue'
import MenuButton from './MenuButton.vue'
import RouterList from './RouterList.vue'
import MenuDropdown from './MenuDropdown.vue'
import { vOnClickOutside } from '@vueuse/components'
import { ref, onUnmounted, onMounted, computed } from 'vue';
const ignoredButton = ref(null)
const isActive = ref(false)
const callback = () => {
    isActive.value = !isActive.value
}
const onClickOutsideHandler = [
    (ev) => {
        if(!isActive.value) return;
        console.log(ev)
        isActive.value = false;
    },
    { ignore: [ignoredButton] }
]
const isMobile = computed(() => {
    return screenWidth.value >= 767;
})
const screenWidth = ref(window.innerWidth)
const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};
onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
});

// Remove event listeners when the component is unmounted
onUnmounted(() => {
    window.removeEventListener('resize', updateScreenWidth);
});
</script>



<style scoped>
.wrapper {
    background-color: var(--blue-lighten-2);
    min-height: 9vh;
    padding: 0;
}

.container {
    justify-content: space-between;
    gap: 20px;
    flex-wrap: nowrap;
}
</style>