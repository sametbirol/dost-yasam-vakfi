import{_ as k,q as m,s as p,e as c,r as b,o as t,c as o,b as i,F as y,f as v,a as h}from"./index-29e73d59.js";const z={class:"wrapper"},_={class:"container"},g={class:"left"},f=["innerHTML"],w={__name:"TabWrapper",props:{objSet:{default:[]},color:{type:String,default:"black"},bgcolor:{type:String,default:"white"}},setup(D){const s=m(),d=p(),e=[{path:"down-sendromunun-belirtileri-nelerdir",title:"Down Sendromunun Belirtileri Nelerdir?",content:`
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
        `},{path:"down-sendromunun-tipleri-nelerdir",title:"Down Sendromu Tipleri Nelerdir?",content:`
        <div>Genetik inceleme yapılmadan Down sendromu tipleri birbirinden ayırt edilemeyebilir. Üç tipi vardır:</div>
        <div>
            <ul>
                <li><span style="font-weight:700">Trizomi 21:</span> Olguların %95’i bu tiptedir. Vücuttaki her bir hücre üç adet 21.kromozom kopyasına sahiptir.</li>
                <li><span style="font-weight:700">Translokasyon Down Sendromu:</span> Yaklaşık olarak bu sendroma sahip bireylerin %3’ündeki mekanizma translokasyondur. Bu tipte, fazladan olan 21.kromozomun ya bir parçası ya da tamamı bir başka kromozoma yapışık durumdadır. Fazladan olan 21.kromozom serbest halde değildir.</li>
                <li><span style="font-weight:700">Mozaik Down Sendromu:</span> En az bulunan tiptir. Down sendromlu bireylerin %2’si mozaiktir. Mozaik karışım veya kombinasyon anlamına gelir. Bu durumda vücuttaki hücrelerin bir kısmı olması gerektiği gibi 21.kromozomdan iki kopya taşırken bazı hücreler fazladan bir 21.kromozoma sahiptir. Diğer Down sendromu tipleri ile benzer özellikler taşır ama semptomları çoğunlukla daha hafiftir.</li>
            </ul>        
        </div>
        `}],r=c(()=>{const a=e.filter(l=>l.path==s.params.title);return a.length?a[0]:(d.push({name:"content",params:{title:e[0].path}}),e[0])});return(a,l)=>{const u=b("RouterLink");return t(),o("div",z,[i("div",_,[i("div",g,[(t(),o(y,null,v(e,n=>i("li",null,[h(u,{class:"text","exact-active-class":"exact-active",to:{name:"content",params:{title:n.path}},innerHTML:n.title},null,8,["to","innerHTML"])])),64))]),i("p",{class:"right text",innerHTML:`
                <h1 style="color:#0353a4;">${r.value.title}</h1>${r.value.content}
            `},null,8,f)])])}}},x=k(w,[["__scopeId","data-v-09772824"]]);export{x as default};
