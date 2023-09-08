<template>
    <div class="menuButton">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
    </div>
</template>
<style scoped>
*{
    user-select: none;
}
.top,.bottom,.middle{
    
    width: 5vh;
    height: 0.7vh;
    border-radius: 0.3vh;
    background-color: #f5f5f5;
    transition: transform 0.7s ease;
    box-shadow: 0.1vh 0.3vh 0.5vh rgba(0,0,0,0.5);

}
.menuButton{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 5vh;
    height: 4vh;
    margin-right: 4vh;
    transform: translateY(50%);
}
.menuButton:hover{
    cursor: pointer;
}
.menuButton.active > .middle{
    display: none;
}

.menuButton.active > .top{
    position: relative;
    transform: translate(0,1.6vh) rotate(45deg);
}
.menuButton.active > .bottom{
    position: relative;
    transform: translate(0,-1.6vh) rotate(-45deg);
}
.menu.active{
    opacity: 1;
}

.menu{
    opacity: 0;
    position: absolute;
    transition: opacity 0.5s ease;
    top:0;
    transform: translateY(110px);
    width: 280px;
    right: 2%;
    z-index: 3;
    background-color:#FFE8D1;
    border-radius: 20px;
    padding: 20px;
}
</style>