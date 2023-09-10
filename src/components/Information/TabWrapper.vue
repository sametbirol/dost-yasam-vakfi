<template>
    <div class="wrapper">
        <div class="container">
            <div class="left">
                <li v-for="obj in objs">
                    <RouterLink exact-active-class="exact-active" :to="{
                        name: 'content',
                        params: {
                            title: obj.path
                        }
                    }" v-html="obj.title"></RouterLink>
                </li>
            </div>
            <p class="right text" v-html='`
                <h1 style="color:#0353a4;">${objToRender.title}</h1>${objToRender.content}
            `'>
            </p>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const props = defineProps({
    objSet: {
        default: []
    },
    color: {
        type: String,
        default: "black"
    },
    bgcolor: {
        type: String,
        default: "white"
    }
})
const objs = [
    {
        path: "down-sendromunun-belirtileri-nelerdir",
        title: "Down Sendromunun Belirtileri Nelerdir?",
        content: `
        <div>Down sendromlu bireyler her ne kadar birbirine benzese de her birinin farklı kişisel ve fiziksel özellikleri olabilir. Genellikle hafif-orta derece zeka geriliğine sahiptirler ve yaşıtlarına göre daha geç konuşmaya başlarlar.</div>
        <div>Down sendromlu bireylerin benzer fiziksel özellikleri aşağıdaki gibi sıralanabilir:</div>
        <div>
            <ul>
                <li>Düz bir burun köprüsü ve düz bir yüz</li>
                <li>Yukarı doğru eğimli çekik gözler</li>
                <li>Kısa boyun</li>
                <li>Küçük ve düşük yerleşimli kulaklar</li>   
                <li>Dışarı sarkmaya eğilimli büyük dil</li>   
                <li>Brushfield lekeleri olarak da bilinen gözde beyaz renkli noktalar</li>   
                <li>Küçük el ve ayaklar</li>   
                <li>Avuç içinde tek çizgi (Simian çizgisi)</li>   
                <li>Gevşek kas tonusu (hipotoni) ve gevşek eklemler</li>   
                <li>Hem çocukluk döneminde hem erişkin dönemde kısa boy</li>   
            </ul>        
        </div>
        <div>Down sendromlu çocuklardaki mental ve sosyal becerilerdeki gelişim geriliği; dürtüsel davranışlara, zayıf yargılama yeteneğine, dikkat süresinin kısalmasına ve yavaş öğrenmeye sebep olabilir.</div>
        `

    },
    {
        path: "down-sendromunun-tipleri-nelerdir",
        title: "Down Sendromu Tipleri Nelerdir?",
        content: `
        <div>Genetik inceleme yapılmadan Down sendromu tipleri birbirinden ayırt edilemeyebilir. Üç tipi vardır:</div>
        <div>
            <ul>
                <li><span style="font-weight:700">Trizomi 21:</span> Olguların %95’i bu tiptedir. Vücuttaki her bir hücre üç adet 21.kromozom kopyasına sahiptir.</li>
                <li><span style="font-weight:700">Translokasyon Down Sendromu:</span> Yaklaşık olarak bu sendroma sahip bireylerin %3’ündeki mekanizma translokasyondur. Bu tipte, fazladan olan 21.kromozomun ya bir parçası ya da tamamı bir başka kromozoma yapışık durumdadır. Fazladan olan 21.kromozom serbest halde değildir.</li>
                <li><span style="font-weight:700">Mozaik Down Sendromu:</span> En az bulunan tiptir. Down sendromlu bireylerin %2’si mozaiktir. Mozaik karışım veya kombinasyon anlamına gelir. Bu durumda vücuttaki hücrelerin bir kısmı olması gerektiği gibi 21.kromozomdan iki kopya taşırken bazı hücreler fazladan bir 21.kromozoma sahiptir. Diğer Down sendromu tipleri ile benzer özellikler taşır ama semptomları çoğunlukla daha hafiftir.</li>
            </ul>        
        </div>
        `

    },
]
const objToRender = computed(() => {
    const resultList = objs.filter(x => x.path == route.params.title)
    if (resultList.length) {
        return resultList[0]
    }
    return objs[0]
})
</script>

<style scoped>
.wrapper {
    background-color: var(--pink-pastel-color-2);

}

.container {
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
}

.left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* width: 400px; */
    /* width: 30%; */
    gap:20px;
    padding: 24px;
    flex: 0 0 auto;
}
.left a {
    padding: 12px;
    /* flex: 1 0 auto; */

}

.right {
    background-color: var(--blue-lighten-0);
    /* white-space: pre-wrap; */
    padding: 30px;
    border-radius: 30px;
    /* width: 70%; */
    /* width: 100%; */
    /* height: 100%; */
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    gap:24px;
}
.right>h1{
    color: var(--blue-lighten-2);
}

.exact-active {
    background-color: var(--blue-darken-2);
    color:var(--blue-lighten-1)
}
@media (min-width: 1025px) and (max-width: 1280px) {


}

@media (min-width: 768px) and (max-width: 1024px) {

.container {
    flex-direction: column;
}

}

@media (min-width: 481px) and (max-width: 767px) {

.grid {
    height: 330px;
    width: 330px;
    gap: 10px;
}


.container {
    flex-direction: column;
}

}

@media (max-width: 480px) {


.container {
    flex-direction: column;
}

}
</style>