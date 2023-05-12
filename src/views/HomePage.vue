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
            router-link="/loyalty-points"
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
              src="/mina.jpg"
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
            <ion-img id="fastfood-logo" src="/fastfood.png"></ion-img> </ion-col
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
          <ion-col size="8">
            <ion-text class="headers">Special Offers!</ion-text></ion-col
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
          :autoplay="true"
          :breakpoints="screenBreakpoints_special"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="swiper-wrapper"
        >
          <!-- <swiper-slide
            ><img
              class="slider-img"
              alt="Silhouette of a person's head"
              src="../../public/special-offer-1.png"
          /></swiper-slide>
          <swiper-slide
            ><img class="slider-img" src="../../public/special-offer-2.png"
          /></swiper-slide> -->

          <swiper-slide
            v-for="item in specialOffers"
            :key="item.id"
            style="display: flex; justify-content: center"
            ><img class="slider-img-special" :src="item.imgSrc" />
          </swiper-slide>
        </swiper>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-text class="headers">Category</ion-text>
          </ion-col>
        </ion-row>

        <swiper
          :modules="modules"
          :slides-per-view="1"
          :autoplay="{ delay: 4000 }"
          @swiper="onSwiper"
          :breakpoints="screenBreakpoints_category"
          @slideChange="onSlideChange"
          class="swiper-wrapper"
        >
          <!-- <swiper-slide
            ><img
              class="slider-img"
              alt="Silhouette of a person's head"
              src="../../public/special-offer-1.png"
          /></swiper-slide>
          <swiper-slide
            ><img class="slider-img" src="../../public/special-offer-2.png"
          /></swiper-slide> -->

          <swiper-slide
            v-for="item in category"
            :key="item.id"
            style="padding-left: 20px"
            ><div
              class="slider-img-category"
              style="
                position: relative;
                overflow: hidden;
                width: 200px;
                height: 300px;
              "
            >
              <img id="bigImg" :src="item.imgSrc" />
              <ion-text
                style="
                  position: absolute;
                  top: 250px;
                  left: 20px;
                  z-index: 1;
                  color: white;
                  font-weight: bold;
                "
                >{{ item.name }}</ion-text
              >
            </div></swiper-slide
          >
        </swiper>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-text class="headers">What's new?</ion-text>
          </ion-col>
        </ion-row>
        <ion-img style="margin: 20px" src="/whatsN.png"> </ion-img>
      </ion-grid>
      <ion-grid style="margin-bottom: 70px">
        <ion-row>
          <ion-col>
            <ion-text class="headers">Most Popular</ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            v-for="(food, index) in foodCards"
            :key="index"
            style="width: 150px"
          >
            <!-- <ion-img
              style="width: 170px; height: 275px"
              :src="food.imgSrc"
            ></ion-img> -->
            <ion-card style="width: 165px; height: 270px">
              <ion-card-header>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                  "
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
          </ion-col>
        </ion-row>
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
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button id="order" router-direction="root" router-link="/order"
          >Order Now
        </ion-fab-button>
      </ion-fab>
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
  IonFab,
  IonFabButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/vue';
import { chevronForwardSharp } from 'ionicons/icons';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import StarRating from 'vue-star-rating';

const specialOffers = [
  {
    id: 1,
    name: 'discount-chimken',
    imgSrc: '/special-offer-1.png',
  },
  {
    id: 2,
    name: 'all-u-can-eat',
    imgSrc: '/special-offer-2.png',
  },
];
const category = [
  {
    id: 1,
    name: 'Chimken',
    imgSrc: '/category-chimken.png',
  },
  {
    id: 2,
    name: 'Seafood',
    imgSrc: '/category-seafood.png',
  },
];
const foodCards = [
  {
    id: 1,
    name: 'Steak Fries Veggies',
    price: 'P 175',
    type: 'Meat',
    imgSrc: '/steakfries.png',
  },
  {
    id: 2,
    name: 'Fried Chimken',
    price: 'P 175',
    type: 'Chimken',
    imgSrc: '/friedchimken.png',
  },
  {
    id: 3,
    name: 'Sorvetes',
    price: 'P 185',
    type: 'Dessert',
    imgSrc: '/sorvetes.png',
  },
  {
    id: 4,
    name: 'Chimken Salad',
    price: 'P 172',
    type: 'Chimken',
    imgSrc: '/chickensalad.png',
  },
];
const screenBreakpoints_special = {
  320: { slidesPerView: 1, spaceBetween: -40 },
  520: { slidesPerView: 2, spaceBetween: 20 },
};
const screenBreakpoints_category = {
  350: { slidesPerView: 1, spaceBetween: -150 },
  420: { slidesPerView: 2, spaceBetween: 0 },
};
const onSwiper = (swiper) => {
  // console.log(swiper);
  console.log(swiper.width);
};

const onSlideChange = () => {
  console.log('slide change');
};

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
function isDesktop() {
  return window.innerWidth >= 992;
}
</script>

<style scoped>
ion-fab-button#order {
  --border-radius: 16px;
  width: 160px;
  height: 60px;
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

img#bigImg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: none;
  max-height: none;
}
ion-card {
  border-radius: 16px;
  --background: #e9ecef;
  box-shadow: none;
}
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
ion-text.headers {
  font-weight: bold;
  font-size: 22px;
  padding-left: 10px;
}
.slider-img-category {
  width: 200px;
  height: 300px;
  border-radius: 16px;
}
img.slider-img-special {
  width: 315px;
  height: 145px;
  border-radius: 16px;
  /* this will add a hole in the left and right side of the image*/
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 40%,
    99% 41%,
    98% 42%,
    97% 44%,
    96% 48%,
    96% 50%,
    96% 52%,
    97% 56%,
    98% 58%,
    99% 59%,
    100% 60%,
    100% 100%,
    0% 100%,
    0% 60%,
    1% 59%,
    2% 58%,
    3% 56%,
    4% 52%,
    4% 50%,
    4% 48%,
    3% 44%,
    2% 42%,
    1% 41%,
    0% 40%
  );
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
img.popular {
  width: 136px;
  height: 136px;
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
