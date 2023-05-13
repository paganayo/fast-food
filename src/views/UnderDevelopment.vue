<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/home"></ion-back-button>
        <!-- <ion-menu-button color="primary"></ion-menu-button> -->
        <!-- <ion-badge color="warning" mode="md">&nbsp;</ion-badge> -->
        <ion-title>Back Button</ion-title>
      </ion-buttons>
      <!-- <ion-title>{{ $route.params.id }}</ion-title> -->
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        {{ $route }}
        <p>This page is under development</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBadge,
  IonBackButton,
} from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
ion-badge {
  position: absolute;
  top: 15px;
  left: 25px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
</style>
