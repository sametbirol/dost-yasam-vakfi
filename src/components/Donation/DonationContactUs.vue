<template>
    <div class="wrapper">
        <div class="container">
            <div class="subheader">Bize nasıl ulaşabilirsin?</div>
            <div class="form">
                <div class="left">
                    <div class="subheader">Mail yoluyla;</div>
                    <a class="inline" href="mailto:dostyasamvakfi@gmail.com">dostyasamvakfi@gmail.com</a>
                    <div class="subheader">Konum ile;</div>
                    <a class="inline" href="https://goo.gl/maps/s7uej7epek4TcR7v6">Ankara</a>
                    <div class="subheader">Bizi arayın;</div>
                    <a class="inline" href="tel:0555-555-55-55">0555-555-55-55</a>
                    <div class="subheader">Sosyal medya hesaplarımızdan;</div>
                    <MediaLogo class="inline"></MediaLogo>
                </div>
                
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.30043202022!2d32.59795882005455!3d39.90352329761447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1694008742316!5m2!1str!2str"
                    style="border:0;" loading="lazy">
                </iframe>
            </div>
        </div>
    </div>
</template>
<script setup>
import MediaLogo from '../MediaLogo.vue'
</script>
<style scoped>
.wrapper {
    background-color: var(--light-color);
}

.container {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
}

.container>div:last-child {
    align-self: center;
    flex: 1 0 auto;
}

.header {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.subheader {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.form {
    width: 100%;
    border: 3px solid black;
    display: flex;
    justify-content: space-between;
    padding: 24px;
    gap: 64px;
    flex-wrap: wrap;
}

.inline:hover {
    background-color: transparent;
}

.inline {
    padding-left: 16px;
}

/* iframe{
    aspect-ratio: 1 / 1;
} */
@media (max-width: 767px) {
    iframe {
        width: 100%;

    }

    .form {
        padding: 8px;
        gap: 32px;
    }
}
</style>