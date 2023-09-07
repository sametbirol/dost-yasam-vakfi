<template>
    <div class="contact-form">
        <div class="wrapper">
            <div class="header">Bize nasıl ulaşabilirsin?</div>
            <div class="form">
                <div class="left">
                    <div class="subheader">Mail yoluyla;</div>
                    <a class="inline" href="mailto:dostyasamvakfi@gmail.com">dostyasamvakfi@gmail.com</a>
                    <div class="subheader">Konum ile;</div>
                    <a class="inline" href="https://goo.gl/maps/s7uej7epek4TcR7v6">Ankara</a>
                    <div class="subheader">Bizi arayın;</div>
                    <a class="inline" href="tel:0555-555-55-55">0555-555-55-55</a>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.30043202022!2d32.59795882005455!3d39.90352329761447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1694008742316!5m2!1str!2str"
                    style="border:0;" loading="lazy">
                </iframe>

            </div>
            <MediaLogo></MediaLogo>
        </div>
    </div>
</template>
<script setup>
import MediaLogo from '../MediaLogo.vue'
</script>
<style scoped>
.contact-form {
    width: 100%;
    background-color: var(--light-color);
    min-height: 20vh;
    display: grid;
    place-items: center;
    padding: 48px;

}

.wrapper {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.wrapper > div:last-child{
    align-self: center;
}

.header {
    font-size: var(--base-header-size);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.subheader {
    font-size: var(--base-subheader-size);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.form {
    border: 3px solid black;
    display: flex;
    justify-content: space-between;
    padding: 48px;
    gap: 128px;
}

.inline:hover {
    background-color: transparent;
}

.inline {
    padding-left: 16px;
}
</style>