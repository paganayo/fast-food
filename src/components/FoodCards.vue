<template>
  <ion-card
    @click="
      () => router.push({ name: 'Order Info', params: { id: `${food.id}` } })
    "
    style="width: 165px; height: 270px"
  >
    <ion-card-header>
      <div
        style="display: flex; align-items: center; justify-content: flex-start"
      >
        <img class="popular" :src="food.imgSrc" />
      </div>
      <ion-card-title style="font-size: 14px; font-weight: bold">{{
        food.name
      }}</ion-card-title>
      <ion-card-subtitle style="color: black">{{
        food.type
      }}</ion-card-subtitle>
    </ion-card-header>
    <div style="display: flex; align-items: baseline">
      <ion-text id="price">{{ food.price }}</ion-text>
      <star-rating
        :rating="4.5"
        :star-size="12"
        :increment="0.5"
        :read-only="true"
        class="customtext"
      ></star-rating>
    </div>
  </ion-card>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonText,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from '@ionic/vue';
import StarRating from 'vue-star-rating'; //https://www.npmjs.com/package/vue-star-rating
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps(['food']);
// console.log('my props: ', props.food);
</script>

<style scoped>
img.popular {
  width: 136px;
  height: 136px;
}
ion-text#price {
  font-size: 16px;
  color: red;
  margin: 0px 30px 0px 20px;
}

.customtext {
  font-size: 0px;
  width: 20px;
}
</style>
