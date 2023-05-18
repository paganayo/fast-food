<template>
  <!-- <ion-modal :is-open="isOpen" @dismiss="$emit('dismiss')">
    <ion-content class="modal-container">
      Content of the modal
      <ion-button @click="$emit('dismiss')">Close</ion-button>
    </ion-content>
  </ion-modal> -->
  <ion-modal :is-open="isOpen" id="example-modal" trigger="add-to-bag">
    <div class="wrapper">
      <img class="like" :src="'/like.png'" />
      <ion-text id="success">Successfully Added!</ion-text>
      <ion-text id="what">What do you want to do now?</ion-text>

      <ion-button @click="emit('proceed')" id="proceed"
        >Proceed to Checkout</ion-button
      >
      <ion-button @click="emit('addMore')" id="add-more">Add More</ion-button>
    </div>
  </ion-modal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import {
  IonModal,
  IonButton,
  IonIcon,
  IonLabel,
  IonItem,
  IonList,
  IonText,
} from '@ionic/vue';
defineProps(['isOpen']);
const emit = defineEmits(['proceed', 'addMore']);
</script>

<style scoped>
img.like {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}
ion-button#proceed {
  text-transform: capitalize;
  --box-shadow: none;
  --border-radius: 12px;
}
ion-button#proceed::part(native) {
  padding: 20px;
}
ion-button#add-more {
  text-transform: capitalize;
  color: red;
  --background: none;
  --box-shadow: none;
}
ion-text {
  line-height: 20px;
  font-size: 12px;
  margin-bottom: 20px;
}
ion-text#success {
  font-weight: bold;
  font-size: 15px;
}
ion-text#what {
  color: var(--ion-color-medium-shade);
}
ion-modal#example-modal {
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal#example-modal h1 {
  margin: 20px 20px 10px 20px;
}

ion-modal#example-modal .wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
}
</style>
