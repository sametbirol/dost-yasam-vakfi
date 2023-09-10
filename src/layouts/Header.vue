<template>
    <div :class="isHeaderScrolled">
        <div class="container">
            <!-- <div v-if="isMobile">
                <MediaLogo></MediaLogo>
            </div>
            <div v-else></div> -->
            <img src="../assets/media/small-logo.svg">
            <div v-if="isMobile">
                <RouterList></RouterList>
            </div>
            <div v-else>
                <MenuButton @menu-toggle="menuToggleCallback" ref="ignoredButton" :class="isMenuActive"></MenuButton>
                <MenuDropdown v-on-click-outside="onClickOutsideHandler" :class="isMenuActive"></MenuDropdown>
            </div>

        </div>
    </div>
</template>
<script setup>
import MenuButton from './MenuButton.vue'
import RouterList from './RouterList.vue'
import MenuDropdown from './MenuDropdown.vue'
import { vOnClickOutside } from '@vueuse/components'
import { ref, onUnmounted, onMounted, computed, onUpdated } from 'vue';


const ignoredButton = ref(null)
const isActive = ref(false)
const menuToggleCallback = () => {
    isActive.value = !isActive.value
}
const menuCloseCallback = () => {
    if (!isActive.value) return;
    isActive.value = false;
}
const onClickOutsideHandler = [
    menuCloseCallback,
    { ignore: [ignoredButton] }
]
const isMenuActive = computed(() => {
    return isActive.value ? 'active' : '';
})


const screenWidth = ref(window.innerWidth)
const scrollHeight = ref(window.scrollY)
const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};
const updateScrollHeight = () => {
    scrollHeight.value = window.scrollY;
};
const isMobile = computed(() => {
    return screenWidth.value >= 767 ? true : false;
})
const isHeaderScrolled = computed(() => {
    return scrollHeight.value < 75 ? 'wrapper' : 'wrapper active';
})
onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
    window.addEventListener('scroll', updateScrollHeight)
    window.addEventListener('touchmove', menuCloseCallback)
});
onUnmounted(() => {
    window.removeEventListener('resize', updateScreenWidth);
    window.removeEventListener('scroll', updateScrollHeight)
    window.removeEventListener('touchmove', menuCloseCallback)
});
</script>



<style scoped>
.wrapper {
    background-color: var(--blue-lighten-2);
    min-height: 9vh;
    padding: 0;
    z-index: 2;
    transition: position 2s linear;

}

.wrapper.active {
    top: 0;
    position: sticky;
    transition: top 2s linear;
}

.wrapper.active::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 10px -5px 10px 10px var(--blue-darken-2);

}

.container {
    justify-content: space-between;
    gap: 20px;
    flex-wrap: nowrap;
    padding-left: 30px;
    padding-right: 30px;
}
</style>