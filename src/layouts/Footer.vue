<template>
  <div id="footer">
      <img class="icon" src="../assets/media/heart.svg" height="96" width="96">
      <p>
        Bu sitenin içeriği ziyaretçilerini bilgilendirmeye
        yönelik hazırlanmış olup tıbbi teşhis, tedavi veya reçete bilgisi özelliği taşımaz.
      </p>
      <div>
        ©2023 Dost Yaşam Vakfı, Tüm Hakları Saklıdır.
      </div>
      
  </div>
</template>
<script setup>
</script>
<style scoped>
.icon {
  color: #ffffff;
}

.icon:hover {
  color: #000000;
}

#footer {
  width: 100%;
  background-color: var(--blue-lighten-1);
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Spline Sans Mono', monospace;
  gap:8px;
  padding: 10px;
}
</style>