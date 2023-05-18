<template>
  <div style="display: flex; align-items: center; justify-content: flex-end">
    <ion-button @click="decreaseOrder()" class="ion-align-self-center button">
      <ion-icon :icon="removeOutline"></ion-icon
    ></ion-button>
    <ion-text>{{ count }}</ion-text>
    <ion-button @click="increaseOrder()" class="ion-align-self-center button">
      <ion-icon :icon="addOutline"></ion-icon
    ></ion-button>
  </div>
</template>

<script setup>
import {
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonText,
} from '@ionic/vue';
import { addOutline, removeOutline } from 'ionicons/icons';
import { ref } from 'vue';

const count = ref(1);

function increaseOrder() {
  if (count.value !== 99) count.value++;
}
function decreaseOrder() {
  if (count.value !== 1) count.value--;
}
</script>

<style scoped>
ion-button.button {
  --background: var(--ion-color-light-shade);
  --border-radius: 8px;
}
ion-button.button::part(native) {
  padding-left: 0px;
  padding-right: 0px;
  width: 30px;
  height: 30px;
}
ion-text {
  margin-left: 10px;
  margin-right: 10px;
}
ion-button.button ion-icon {
  color: var(--ion-color-primary);
}
</style>
