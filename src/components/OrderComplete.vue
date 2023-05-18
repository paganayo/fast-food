<template>
  <ion-page>
    <ion-content class="ion-padding" fullscreen>
      <ion-grid>
        <ion-row>
          <ion-col>
            <img class="like" :src="'/like.png'" />
          </ion-col>
        </ion-row>
        <ion-row></ion-row>
        <ion-row>
          <ion-col>
            <ion-text style="font-weight: bold; font-size: 30px" class="item"
              >Order Received</ion-text
            >
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text id="order" class="item"
              >Your order
              <ion-text style="color: red" class="item"
                >No.{{ route.params.id }}</ion-text
              >
              has successfully take and now being processed. Kindly wait for our
              notification regarding your order.</ion-text
            >
          </ion-col>
        </ion-row>
      </ion-grid>
      <div style="display: flex; flex-direction: column">
        <ion-button id="track">Track Order</ion-button>
        <ion-button router-direction="root" router-link="/home" id="back-home"
          >Back to Home</ion-button
        >
      </div>
      <!-- <div class="container">
        <img class="like" :src="'/like.png'" />
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          "
        >
          <ion-text style="font-weight: bold; font-size: 30px" class="item"
            >Order Received</ion-text
          >
          <ion-text class="item"
            >Your order No.
            <ion-text style="color: red" class="item">19049585</ion-text> has
            successfully take and now being processed. Kindly wait for our
            notification regarding your order.</ion-text
          >
        </div>
      </div> -->
    </ion-content>
  </ion-page>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import {
  IonText,
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
} from '@ionic/vue';
const router = useRouter();
const route = useRoute();
</script>
<style scoped>
ion-button#track {
  text-transform: capitalize;
  --box-shadow: none;
  --border-radius: 12px;
}
ion-button#proceed::part(native) {
  padding: 20px;
}
ion-button#back-home {
  text-transform: capitalize;
  color: red;
  --background: none;
  --box-shadow: none;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.item {
  font-size: 15px;
  margin-bottom: 20px;
}
img {
  margin-top: 30px;
  margin-bottom: 50px;
}
ion-col {
  display: flex;
  justify-content: center;
  text-align: center;
}
ion-text#order {
  color: var(--ion-color-medium-shade);
}
</style>
