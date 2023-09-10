<template>
    <button class="menuButton" @click="$emit('menuToggle')">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
    </button>
</template>

<style scoped>
* {
    user-select: none;
}

.top,
.bottom,
.middle {
    transform-origin: center;
    width: 35px;
    height: 3px;
    border-radius: 0.3vh;
    background-color: #f5f5f5;
    transition: transform 0.7s ease-in-out,opacity  0.2s 0.1s ease;
    box-shadow: 0.1vh 0.3vh 0.5vh rgba(0, 0, 0, 0.5);

}

.menuButton {
    all: unset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 35px;
    height: 21px;
    /* padding-right: 24px; */
}

.menuButton:hover {
    cursor: pointer;
}

.menuButton.active>.middle {
    opacity: 0;
}

.menuButton.active>.top {
    position: relative;
    transform: translate(0, 9px) rotate(45deg);
}

.menuButton.active>.bottom {
    position: relative;
    transform: translate(0, -9px) rotate(-45deg);
}</style>