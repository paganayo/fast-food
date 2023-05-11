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
          <ion-title style="font-weight: bold" size="large"
            >Our Foods</ion-title
          >
        </div>
        <div class="order-container">
          <!-- <ion-avatar class="profile-container">
            <img
              class="profile"
              alt="Silhouette of a person's head"
              src="../../public/mina.jpg"
            />
        </ion-avatar> -->
          <ion-icon
            slot="end"
            style="font-size: 27px"
            color="primary"
            :icon="bagSharp"
            s
          ></ion-icon>
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
      <ion-grid>
        <!-- <ion-row>
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
        </ion-row> -->
        <ion-row>
          <ion-col class="ion-no-padding">
            <ion-searchbar
              class="searchbar"
              placeholder="try our new Beef Bibimbowl"
            ></ion-searchbar>
            <div style="position: relative">
              <ion-button id="setting"
                ><ion-icon :icon="optionsOutline"></ion-icon
              ></ion-button>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-segment :scrollable="true" value="All">
              <!-- <ion-segment-button
                style="width: 50px !important; margin-right;: 10px !important"
                class="ion-text-capitalize segment-button"
                value="All"
              >
                <ion-label>All</ion-label>
              </ion-segment-button> -->
              <ion-segment-button
                v-for="(type, index) in foodTypes"
                :key="index"
                class="ion-text-capitalize segment-button"
                :value="type"
              >
                <ion-label>{{ type }}</ion-label>
              </ion-segment-button>
              <!-- <ion-segment-button
                class="ion-text-capitalize segment-button"
                value="Beginner"
              >
                <ion-label>Beginner</ion-label>
              </ion-segment-button>
              <ion-segment-button
                class="ion-text-capitalize segment-button"
                value="Intermediate"
              >
                <ion-label>Intermediate</ion-label>
              </ion-segment-button>
              <ion-segment-button
                class="ion-text-capitalize segment-button"
                value="Loyal"
              >
                <ion-label>Loyal</ion-label>
              </ion-segment-button>
              <ion-segment-button
                class="ion-text-capitalize segment-button"
                value="asd"
              >
                <ion-label>asd</ion-label>
              </ion-segment-button> -->
            </ion-segment>
          </ion-col>
        </ion-row>
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

            <ion-card
              @click="onSlideChange"
              router-link="/user/My-Orders"
              router-direction="forward"
              style="width: 165px; height: 270px"
            >
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
      <!-- <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button
          id="order"
          router-direction="root"
          router-link="/user/order"
          >Order Now
        </ion-fab-button>
      </ion-fab> -->
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
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/vue';
import { bagSharp, chevronForwardSharp, optionsOutline } from 'ionicons/icons';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import StarRating from 'vue-star-rating';

const foodTypes = ['All', 'Breakfast', 'Chimken', 'Seafood', 'Dessert'];
const specialOffers = [
  {
    id: 1,
    name: 'discount-chimken',
    imgSrc: '../../public/special-offer-1.png',
  },
  {
    id: 2,
    name: 'all-u-can-eat',
    imgSrc: '../../public/special-offer-2.png',
  },
];
const category = [
  {
    id: 1,
    name: 'Chimken',
    imgSrc: '../../public/category-chimken.png',
  },
  {
    id: 2,
    name: 'Seafood',
    imgSrc: '../../public/category-seafood.png',
  },
];
const foodCards = [
  {
    id: 1,
    name: 'Steak Fries Veggies',
    price: 'P 175',
    type: 'Meat',
    imgSrc: '../../public/steakfries.png',
  },
  {
    id: 2,
    name: 'Fried Chimken',
    price: 'P 175',
    type: 'Chimken',
    imgSrc: '../../public/friedchimken.png',
  },
  {
    id: 3,
    name: 'Sorvetes',
    price: 'P 185',
    type: 'Dessert',
    imgSrc: '../../public/sorvetes.png',
  },
  {
    id: 4,
    name: 'Chimken Salad',
    price: 'P 172',
    type: 'Chimken',
    imgSrc: '../../public/chickensalad.png',
  },
  {
    id: 5,
    name: 'Steak Fries Veggies',
    price: 'P 175',
    type: 'Meat',
    imgSrc: '../../public/steakfries.png',
  },
  {
    id: 6,
    name: 'Fried Chimken',
    price: 'P 175',
    type: 'Chimken',
    imgSrc: '../../public/friedchimken.png',
  },
  {
    id: 7,
    name: 'Sorvetes',
    price: 'P 185',
    type: 'Dessert',
    imgSrc: '../../public/sorvetes.png',
  },
  {
    id: 8,
    name: 'Chimken Salad',
    price: 'P 172',
    type: 'Chimken',
    imgSrc: '../../public/chickensalad.png',
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
ion-segment-button.segment-button {
  font-size: 12px;
  font-weight: bold;
  --background: var(--ion-color-light-shade);
  --border-radius: 16px;
  --background-checked: red;
  --indicator-color: null;
  --color-checked: white;
  margin-right: 10px;
}
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
ion-button#setting {
  --background: #e9ecef;
  --box-shadow: none;
  --color-activated: var(--ion-color-primary-tint);
  --border-radius: 16px;
  position: absolute;
  right: 10px;
  bottom: 24px;
  z-index: 1;
}
ion-button#setting ion-icon {
  color: var(--ion-color-primary);
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
.order-container {
  /* background-color: red; */
  width: 50px;
  height: 35px;
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
