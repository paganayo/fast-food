<template>
  <ion-page>
    <!-- <ion-header :translucent="true"> -->
    <ion-toolbar class="toolbar">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
        <ion-badge v-if="!isDesktop()" color="warning">&nbsp;</ion-badge>
      </ion-buttons>

      <h2 v-if="!isDesktop()" class="header">
        <strong> Loyalty Points </strong>
      </h2>
    </ion-toolbar>
    <!-- </ion-header> -->

    <ion-content fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Loyalty Pts</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <!-- ------------------- -->
      <ion-grid>
        <ion-row class="ion-align-items-center" style="margin-bottom: -10px">
          <ion-col size="50px">
            <ion-avatar class="crown-container">
              <img class="crown" src="../../public/crown.png" />
            </ion-avatar>
          </ion-col>
          <ion-col id="btier" size="4">
            <ion-text>Beginner Tier</ion-text></ion-col
          >
          <ion-col id="vall">
            <ion-button
              fill="clear"
              router-direction="root"
              router-link="/user/loyalty-points"
              class="ion-text-capitalize points-button"
            >
              View All
              <ion-icon slot="end" :icon="chevronForwardSharp"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col style="display: flex" class="ion-justify-content-center">
            <ion-text color="medium" id="points">
              Earn points by purchasing from our store. Vestibulum ante ipsum
              primis in faucibus orci luctus et.
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- ------------------------ -->
      <ion-grid>
        <ion-row style="height: 200px">
          <ion-col style="display: flex" class="ion-justify-content-center">
            <!-- <ion-button @click="loyaltyPoints.count++"> count+ </ion-button> -->
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col id="rewards"> <ion-text>Rewards</ion-text></ion-col>
          <ion-col id="vall">
            <ion-button
              fill="clear"
              router-direction="root"
              router-link="/user/loyalty-points"
              class="ion-text-capitalize points-button"
            >
              How it works
              <ion-icon
                slot="end"
                :icon="chevronForwardSharp"
              ></ion-icon> </ion-button
          ></ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-no-padding">
            <ion-segment :scrollable="true" value="All">
              <ion-segment-button
                style="width: 50px !important; margin-right;: 10px !important"
                class="ion-text-capitalize segment-button"
                value="All"
              >
                <ion-label>All</ion-label>
              </ion-segment-button>
              <ion-segment-button
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
            </ion-segment>
          </ion-col>
        </ion-row>
        <ion-row> </ion-row>
      </ion-grid>
      <ion-list>
        <ion-card v-for="item in loyaltyCards" :key="item.id">
          <ion-grid v-if="item.id === 1">
            <ion-row>
              <ion-col
                size="40px"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <img class="item-img" :src="item.imgSrc" />
              </ion-col>
              <ion-col style="display: flex; padding-left: 0px">
                <ion-card-header>
                  <ion-card-title>{{ item.name }}</ion-card-title>
                  <ion-card-subtitle>{{ item.type }}</ion-card-subtitle>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: flex-start;
                    "
                  >
                    <img id="crown-card" src="../../public/crown.png" />
                    <ion-card-content v-if="item.id === 1">
                      <ion-text>{{ item.points }}</ion-text>
                    </ion-card-content>
                  </div>
                </ion-card-header>
              </ion-col>
            </ion-row>
          </ion-grid>
          <!-- Card content -->
        </ion-card>
      </ion-list>

      <!-- <div id="container">
        <strong class="capitalize">{{ $route.name }}</strong>
        <p>Loyalty Points Page</p>
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
  IonCol,
  IonRow,
  IonText,
  IonProgressBar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/vue';
import { chevronForwardSharp } from 'ionicons/icons';
import { ref, reactive } from 'vue';

const loyaltyPoints = reactive({ count: 0, maxCount: 160 });
const loyaltyCards = [
  {
    id: 1,
    name: 'Steak Fries Veggies',
    points: '20 points',
    type: 'Meat',
    imgSrc: '../../public/steakfries.png',
  },
  {
    id: 2,
    name: 'Fried Chimken',
    points: '5 points',
    type: 'Chimken',
    imgSrc: '',
  },
  { id: 3, name: 'Sorbetes', points: '30 points', type: 'Dessert', imgSrc: '' },
];

function isDesktop() {
  return window.innerWidth >= 992;
}
</script>

<!-- style="
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
          " -->

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
img.item-img {
  width: 86px;
  height: 50px;
}
img#crown-card {
  width: 22px;
  height: 22px;
}
ion-card {
  border-radius: 16px;
  --background: #e9ecef;
  box-shadow: none;
}
ion-card-content {
  padding: 5px 0px 0px 5px;
  font-size: 15px;
  font-weight: bold;
  color: var(--ion-color-primary);
}
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

h2.header {
  margin-top: 8px;
  margin-left: 10px;
}
/* img.crown {
  width: 30px;
  height: 30px;
  object-position: 0px 0px;
} */
img.crown {
  height: 40px;
  width: 40px;
  /* background-color: rgb(189, 43, 152); */
  object-position: 0px -4px;

  /* padding: 2px; */
}
ion-text#points {
  font-size: 14px;
  line-height: 1.6;
}
ion-col#vall {
  display: flex;
  justify-content: flex-end;
}
ion-avatar.crown-container {
  /* background-color: red; */
  --border-radius: 0px;
  width: 50px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0px;
}

ion-avatar ion-toolbar.toolbar {
  align-items: center;
}

ion-col#btier {
  font-weight: bold;
}
ion-col#rewards {
  font-weight: bold;
  font-size: 22px;
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
