<template>
  <ion-page>
    <!-- <ion-header :translucent="true"> -->
    <ion-toolbar class="header">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
        <ion-badge v-if="!isDesktop()" color="warning">&nbsp;</ion-badge>
      </ion-buttons>
      <div style="display: flex; flex-direction: row">
        <div
          style="
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <ion-avatar class="crown-container">
            <img class="crown" src="../../public/crown.png" />
          </ion-avatar>
          <ion-button
            fill="clear"
            router-direction="root"
            router-link="/user/loyalty-points"
            class="points-button"
          >
            0 points
            <ion-icon
              class="points-icon"
              slot="end"
              :icon="chevronForwardSharp"
            ></ion-icon>
          </ion-button>
        </div>
        <div>
          <ion-avatar class="profile-container">
            <img
              class="profile"
              alt="Silhouette of a person's head"
              src="../../public/mina.jpg"
            />
          </ion-avatar>
        </div>
      </div>
    </ion-toolbar>
    <!-- </ion-header> -->

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <!-- <ion-toolbar>
          <ion-title size="large">full</ion-title>
        </ion-toolbar> -->
      </ion-header>
      <ion-grid
        ><ion-row>
          <ion-col size="75px">
            <ion-img
              id="fastfood-logo"
              src="../../public/fastfood.png"
            ></ion-img> </ion-col
          ><ion-col
            :style="{
              display: 'flex',
              'flex-direction': 'column',
              'align-items': !isDesktop() ? 'flex-start' : 'center',
              'justify-content': 'center',
            }"
          >
            <ion-text>Anneoyong, Mina!</ion-text>
            <ion-text id="wdyeat">What do you want<br />to eat?</ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-no-padding">
            <ion-searchbar
              class="searchbar"
              placeholder="try our new Steak Fries Veggies"
            ></ion-searchbar>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-center">
          <ion-col size="8" id="special-offer">
            <ion-text>Special Offers!</ion-text></ion-col
          >
          <ion-col
            size="4"
            id="vall"
            style="display: flex; justify-content: flex-end"
          >
            <ion-button fill="clear" class="ion-text-capitalize">
              View All
              <ion-icon
                slot="end"
                :icon="chevronForwardSharp"
              ></ion-icon> </ion-button
          ></ion-col>
        </ion-row>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          navigation
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            ><img
              class="profile"
              alt="Silhouette of a person's head"
              src="../../public/mina.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img
              class="profile"
              alt="Silhouette of a person's head"
              src="../../public/mina.jpg"
          /></swiper-slide>
        </swiper>
      </ion-grid>
      <!-- <div id="container">
        <strong class="capitalize">{{ $route.name }}</strong>
        <p>
          Explore
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
      </div> -->
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
  isPlatform,
  getPlatforms,
  IonButton,
  IonAvatar,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonSearchbar,
  IonImg,
} from '@ionic/vue';
import { chevronForwardSharp } from 'ionicons/icons';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

const modules = [Navigation, Pagination, Scrollbar, A11y];
function isDesktop() {
  return window.innerWidth >= 992;
}
</script>

<style scoped>
ion-searchbar.searchbar {
  --icon-color: var(--ion-color-primary);
  --border-radius: 16px;
  --background: #e9ecef;
  --box-shadow: none;
  height: 90px !important;
}
ion-col#vall ion-button {
  color: var(--ion-color-primary);
}
ion-col#special-offer {
  font-weight: bold;
  font-size: 22px;
  padding-left: 10px;
}
img.crown {
  height: 40px;
  width: 40px;
  /* background-color: rgb(189, 43, 152); */
  padding: 2px;
}
ion-text#wdyeat {
  font-size: 25px;
  font-weight: bold;
}
ion-img#fastfood-logo {
  width: 67px;
  height: 72px;
}
ion-avatar.crown-container {
  /* background-color: red; */
  align-items: center;
  display: flex;
  justify-content: center;
}

ion-button.points-button {
  --color: black;
}
ion-icon.points-icon {
  color: var(--ion-color-primary);
}
ion-avatar.profile-container {
  /* background-color: red; */
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 20px;
}
img.profile {
  height: 40px;
  width: 40px;
  object-position: 0px -6px;
}

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
