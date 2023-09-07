<template>
    <div class="wrapper">
        <div class="container">
            <div class="head">
                <h2 class="header">Bize KATIL</h2>
                <DonationButton color="white" bgcolor="black" >Bağış Yap</DonationButton>
            </div>
            <div class="grid">
                <div class="content bottom-left-long top-right-long col-span-2"></div>
                <div class="content content-1 bottom-left top-right top-left "></div>
                <div class="content content-2 bottom-left top-right bottom-right"></div>
                <div class="content "></div>
                <div class="content content-3 bottom-left-long"></div>
                <div class="content bottom-left top-right bottom-right top-left"></div>
                <div class="content content-4 bottom-left top-right top-left  col-span-2"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import DonationButton from '../Donation/DonationButton.vue';
</script>
<style scoped>
.wrapper {
    height: 670px;
    background-color: var(--pink-pastel-color);
}   

.container {
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 60px;
}

.header {
    /* color: black; */
    font-weight: 900;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}


.head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.grid {
    height: 400px;
    width: 400px;
    display: grid;
    aspect-ratio: 1/1;
    flex: 0 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
}

.content {
    position: relative;
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    mix-blend-mode: luminosity;
}

.bottom-left {
    border-bottom-left-radius: 60px;
}

.top-left {
    border-top-left-radius: 60px;
}

.bottom-right {
    border-bottom-right-radius: 60px;
}

.top-right {
    border-top-right-radius: 60px;
}

.bottom-left-long {
    border-bottom-left-radius: 120px;
}

.top-left-long {
    border-top-left-radius: 120px;
}

.bottom-right-long {
    border-bottom-right-radius: 120px;
}

.top-right-long {
    border-top-right-radius: 120px;
}

.col-span-2 {
    grid-column: span 2;
}

.content-1 {
    background-image: url(https://media.istockphoto.com/id/541837618/tr/foto%C4%9Fraf/cute-little-girl-with-painted-hands.jpg?s=612x612&w=0&k=20&c=6oog7IoETrV4eCaLbGb2B0ByK3ACND9D59RP47r4CmY=);

}

.content-2 {
    background-image: url(https://media.istockphoto.com/id/1349908664/tr/foto%C4%9Fraf/young-man-with-down-syndrome-and-his-tutor-with-arms-around-looking-at-camera-indoors-at.jpg?s=612x612&w=0&k=20&c=hwJJZ-ro9bdv9PrvLrF6gTOnLbL3C3RDr8p2tCXfixg=);
}

.content-3 {
    background-image: url(https://media.istockphoto.com/id/1288430707/tr/foto%C4%9Fraf/ne%C5%9Feli-down-sendromu-yeti%C5%9Fkin-adam-portre-arka-bah%C3%A7esinde-a%C3%A7%C4%B1k-havada-k%C3%B6pek-ile-oynarken.jpg?s=612x612&w=0&k=20&c=Hs4kcneEwHwCjNaQr4Rn24nGv6RdXHaPi7Rpm0VaeX4=);
}

.content-4 {
    background-image: url(https://media.istockphoto.com/id/482247210/tr/foto%C4%9Fraf/young-girl-smiling-on-background-of-blue-wall.jpg?s=612x612&w=0&k=20&c=XSDVKVb9wrPH9w_zz6hsmAsGJy77vwPB7YrgefsP7dw=);
}

.header {
    font-size: var(--header-size-xl);
}

@media (min-width: 1025px) and (max-width: 1280px) {

    .grid {
        height: 330px;
        width: 330px;
        gap: 15px;
    }

    .header {
        font-size: var(--header-size-large);
    }
}

@media (min-width: 768px) and (max-width: 1024px) {

    .grid {
        height: 330px;
        width: 330px;
        gap: 10px;
    }

    .head {
        align-items: center;
    }

    .header {
        font-size: var(--header-size-medium);
    }


    .hero-wrapper {
        flex-direction: column;
    }

}

@media (max-width: 767px) {

    .grid {
        height: 330px;
        width: 330px;
        gap: 10px;
    }

    .head {
        align-items: center;
    }

    .header {
        font-size: var(--header-size-small);
    }

    .hero-wrapper {
        flex-direction: column;
    }

}
</style> 