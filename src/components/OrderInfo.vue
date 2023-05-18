<template>
  <ion-page>
    <ion-toolbar class="toolbar">
      <ion-buttons slot="start">
        <ion-back-button
          defaultHref="/order"
          :icon="chevronBackSharp"
          id="back"
        ></ion-back-button>
        <!-- <ion-menu-button color="primary"></ion-menu-button> -->
        <!-- <ion-badge color="warning" mode="md">&nbsp;</ion-badge> -->
        <ion-title style="font-size: 30px; font-weight: bold">{{
          selectedFood.type
        }}</ion-title>
      </ion-buttons>
      <!-- <ion-title>{{ $route.params.id }}</ion-title> -->
      <div class="order-container">
        <!-- <ion-avatar class="profile-container">
            <img
              class="profile"
              alt="Silhouette of a person's head"
              src="../../public/mina.jpg"
            />
        </ion-avatar> -->
        <ion-button id="my-order">
          <ion-icon :icon="bagSharp"></ion-icon
        ></ion-button>
      </div>
    </ion-toolbar>

    <ion-content
      :fullscreen="true"
      :force-overscroll="true"
      style="padding-left: 10px; padding-bottom: 50px"
    >
      <ion-card
        style="
          display: flex;
          height: 250px;
          justify-content: center;
          align-items: center;
        "
      >
        <ion-card-header>
          <div>
            <img class="food" :src="selectedFood.imgSrc" />
          </div>
        </ion-card-header>
      </ion-card>
      <!-- <div
        style="
          display: flex;
          justify-content: flex-end;
          margin-right: 30px;
          position: relative;
        "
      >
        <ion-button style="position: absolute; bottom: -10px">
          <ion-icon :icon="bagSharp"></ion-icon
        ></ion-button>
      </div> -->
      <div style="display: flex; justify-content: flex-end; padding-top: 20px">
        <div style="position: relative">
          <ion-button id="favorite">
            <ion-icon
              style="color: red; font-size: 20px"
              :icon="heartOutline"
            ></ion-icon>
          </ion-button>
        </div>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          padding-left: 10px;
          line-height: 30px;
        "
      >
        <ion-text id="name">{{ selectedFood.name }}</ion-text>
        <star-rating
          :rating="4.5"
          :star-size="20"
          :inactive-color="'#9d9fa6'"
          :increment="0.5"
          :read-only="true"
          class="customtext"
        ></star-rating>
        <ion-text id="description">
          {{ selectedFood.description }}
        </ion-text>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 10px;
            margin-top: 10px;
            margin-bottom: 20px;
          "
        >
          <ion-text style="color: red; font-weight: bold; font-size: 25px">{{
            selectedFood.price
          }}</ion-text>
          <OrderIncDec />
        </div>
      </div>
      <ion-text class="headers">Beverages</ion-text>
      <div class="bev-container">
        <div>
          <ion-select
            label="Choose Beverages"
            label-placement="stacked"
            fill="outline"
            interface="action-sheet"
          >
            <ion-select-option value="apple">Coke</ion-select-option>
            <ion-select-option value="banana">Pepsi</ion-select-option>
            <ion-select-option value="orange">RC</ion-select-option>
          </ion-select>
        </div>
      </div>
      <div style="padding-left: 10px">
        <ion-segment :scrollable="true" value="All">
          <ion-segment-button
            style="width: 50px !important; margin-right;: 10px !important"
            class="ion-text-capitalize segment-button"
            value="All"
          >
            <ion-label>Regular</ion-label>
          </ion-segment-button>
          <ion-segment-button
            class="ion-text-capitalize segment-button"
            value="Beginner"
          >
            <ion-label>Large</ion-label>
          </ion-segment-button>
          <ion-segment-button
            class="ion-text-capitalize segment-button"
            value="Intermediate"
          >
            <ion-label>X-Large</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>

      <ion-text class="headers">Add-Ons</ion-text>
      <div style="margin-bottom: 12vh">
        <ion-card v-for="item in addOns" :key="item.id">
          <ion-grid style="padding-bottom: 0px">
            <ion-row>
              <ion-col size="40px" style="padding-bottom: 0px">
                <img class="item-img" :src="item.imgSrc" />
              </ion-col>
              <ion-col style="padding-bottom: 0px">
                <ion-card-header style="padding: 0px">
                  <ion-card-title style="font-size: 14px; font-weight: bold">{{
                    item.name
                  }}</ion-card-title>
                  <ion-card-subtitle>{{ item.type }}</ion-card-subtitle>

                  <ion-card-content
                    style="
                      padding-left: 0px;
                      font-size: 14px;
                      font-weight: bold;
                      color: red;
                    "
                  >
                    <ion-text>{{ item.price }}</ion-text>
                  </ion-card-content>
                </ion-card-header>
              </ion-col>
              <ion-col
                style="
                  display: flex;
                  flex-direction: column;
                  padding-bottom: 0px;
                "
              >
                <ion-checkbox
                  style="align-self: flex-end; margin-bottom: 10px"
                />
                <OrderIncDec />
              </ion-col>
            </ion-row>
          </ion-grid>
          <!-- Card content -->
        </ion-card>
      </div>

      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button @click="openModal" id="add-to-bag"
          >Add to bag
          <AddToBag_modal
            :isOpen="isOpen"
            @proceed="proceed"
            @addMore="addMore"
          />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import StarRating from 'vue-star-rating';
import OrderIncDec from './OrderIncDec.vue';
import AddToBag_modal from './AddToBag_modal.vue';
import {
  IonSelect,
  IonCheckbox,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonSelectOption,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBadge,
  IonBackButton,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonIcon,
  IonFab,
  IonFabButton,
  IonModal,
  IonList,
  IonItem,
} from '@ionic/vue';
import {
  bagSharp,
  heartOutline,
  chevronForwardSharp,
  optionsOutline,
  chevronBackSharp,
  personCircle,
} from 'ionicons/icons';

const router = useRouter();
const route = useRoute();

const isOpen = ref(false);

function proceed() {
  console.log('proceed clicked');
  isOpen.value = false;
  router.push({ name: 'Checkout', params: { id: `${selectedFood.id}` } });
}
const openModal = () => {
  isOpen.value = true;
};
const addMore = () => {
  console.log('add more');
  isOpen.value = false;
  router.go(-1);
};
const addOns = [
  {
    id: 1,
    name: 'Tomato Sows',
    price: 'P 49',
    type: 'Sauce',
    imgSrc: '/sauce.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 2,
    name: 'White Rice',
    price: 'P 25',
    type: 'Rice',
    imgSrc: '/rice.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
];
const foodCards = [
  {
    id: 1,
    name: 'Steak Fries Veggies',
    price: 'P 175',
    type: 'Meat',
    imgSrc: '/steakfries.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 2,
    name: 'Fried Chimken',
    price: 'P 175',
    type: 'Chimken',
    imgSrc: '/friedchimken.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 3,
    name: 'Sorvetes',
    price: 'P 185',
    type: 'Dessert',
    imgSrc: '/sorvetes.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 4,
    name: 'Chimken Salad',
    price: 'P 172',
    type: 'Chimken',
    imgSrc: '/chickensalad.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 5,
    name: 'Steak Fries Veggies',
    price: 'P 175',
    type: 'Meat',
    imgSrc: '/steakfries.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 6,
    name: 'Fried Chimken',
    price: 'P 175',
    type: 'Chimken',
    imgSrc: '/friedchimken.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 7,
    name: 'Sorvetes',
    price: 'P 185',
    type: 'Dessert',
    imgSrc: '/sorvetes.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
  {
    id: 8,
    name: 'Chimken Salad',
    price: 'P 172',
    type: 'Chimken',
    imgSrc: '/chickensalad.png',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.',
  },
];
const selectedFood = foodCards[route.params.id - 1]; // we assume this is the fetch data from our table Food Cards
</script>

<style scoped>
#name {
  font-weight: bold;
}
ion-select::part(icon) {
  color: red;
  opacity: 1;
}
img.item-img {
  width: 78px;
  height: 78px;
}

ion-text.headers {
  font-weight: bold;
  font-size: 22px;
  margin-left: 10px;
}
ion-fab {
  margin: 2vw;
}
ion-fab-button#add-to-bag {
  --border-radius: 16px;
  width: 90vw;
  height: 60px;
}
#description {
  line-height: 25px;
  color: var(--ion-color-medium-shade);
}
.customtext {
  font-size: 0px;
}
.order-container {
  /* background-color: red; */
  height: 50px;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.bev-container {
  padding: 10px;
}
.toolbar {
  padding-left: 10px;
  padding-top: 10px;
}
.food {
  width: 250px;
}
ion-checkbox {
  --border-style: none;
  --border-radius: 5px;
  --checkmark-color: var(--ion-color-warning);
  --checkbox-background-checked: white;
}
ion-segment-button.segment-button {
  font-size: 12px;
  font-weight: bold;
  --background: white;
  --border-radius: 16px;
  --background-checked: var(--ion-color-warning);
  --indicator-color: null;
  --color-checked: white;
  margin-right: 10px;
  margin-bottom: 40px;
  border: 1px solid var(--ion-color-medium-shade);
}
ion-button#my-order {
  --background: none;
  --color: var(--ion-color-primary-tint);
  --box-shadow: none;
  --border-radius: 16px;
  z-index: 1;
}
ion-button#favorite {
  position: absolute;
  bottom: 0px;
  right: 30px;
  --background: white;
  --border-radius: 20px;
  height: 50px;
}
ion-button#my-order ion-icon {
  color: var(--ion-color-primary);
}
ion-card {
  border-radius: 16px;
  --background: #e9ecef;
  box-shadow: none;
}
#back {
  --background: #e9ecef;
  --border-radius: 16px;
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
