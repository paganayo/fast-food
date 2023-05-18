<template>
  <ion-page>
    <ion-toolbar class="toolbar">
      <ion-buttons slot="start">
        <ion-back-button
          defaultHref="/order"
          :icon="chevronBackSharp"
          id="back"
        ></ion-back-button>

        <ion-title style="font-size: 24px; font-weight: bold"
          >Order Summary</ion-title
        >
      </ion-buttons>
    </ion-toolbar>

    <ion-content :fullscreen="true" :force-overscroll="true" id="content">
      <!-- <div style="margin-bottom: 12vh"> -->
      <!-- <ion-card v-for="(item, index) in addOns" :key="item.id">
          <ItemSlider /> -->
      <!-- <ion-item-sliding>
            <ion-item>
              <ion-label>Sliding Item with End Options</ion-label>
              <ion-button @click="openSlide(index)">
                <ion-icon
                  style="font-size: 20px"
                  :icon="heartOutline"
                ></ion-icon>
              </ion-button>
            </ion-item>
            <ion-item-options>
              <ion-item-option>Favorite</ion-item-option>
              <ion-item-option color="danger">Delete</ion-item-option>
            </ion-item-options>
          </ion-item-sliding> -->
      <!-- <ion-grid style="padding-bottom: 0px">
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
          </ion-grid> -->
      <!-- Card content -->
      <!-- </ion-card> -->
      <!-- </div> -->
      <div style="height: 100px">
        <horizontalScroll :user="user" type="user" />
      </div>
      <div v-for="item in user.addresses" style="height: 100px">
        <horizontalScroll :user="user" :type="item" />
      </div>

      <div class="headers-container">
        <ion-text class="headers">Orders</ion-text>
      </div>
      <ion-card v-for="item in currentOrder" :key="item.id" id="orders-card">
        <ion-grid style="padding-bottom: 0px">
          <ion-row>
            <ion-col size="40px" style="padding-bottom: 0px; display: flex">
              <img class="item-img" :src="item.imgSrc" />
            </ion-col>
            <ion-col style="margin-bottom: 10px">
              <ion-card-header style="padding: 0px">
                <ion-card-title style="font-size: 14px; font-weight: bold">{{
                  item.name
                }}</ion-card-title>
                <div style="margin: 10px 0px">
                  <div
                    v-for="(add, index) in item.addOns"
                    :key="index"
                    style="line-height: 20px"
                  >
                    <ion-text style="color: black"
                      >{{ add.quantity }} x {{ add.name }}</ion-text
                    >
                  </div>
                </div>
              </ion-card-header>
            </ion-col>
          </ion-row>
          <ion-row
            style="
              border-top-style: solid;
              border-top-width: 1px;
              border-color: #cdcccc;
            "
          >
            <ion-col
              style="display: flex; flex-direction: column"
              class="card-col"
            >
              <ion-card-content
                style="
                  padding-left: 0px;
                  font-size: 16px;
                  font-weight: bold;
                  color: red;
                "
              >
                <ion-text>{{ item.price }}</ion-text>
              </ion-card-content>
            </ion-col>
            <ion-col class="card-col">
              <OrderIncDec />
            </ion-col>
          </ion-row>
        </ion-grid>
        <!-- Card content -->
      </ion-card>
      <div class="headers-container">
        <ion-text class="headers">Payment Option</ion-text>
        <ion-radio-group
          @ionChange="radioClicked"
          allow-empty-selection="true"
          value="Cash on Delivery"
        >
          <ion-card v-for="item in paymentOptions" :key="item.id">
            <ion-grid style="padding-bottom: 0px">
              <ion-row>
                <ion-col style="padding: 5px 10px 20px 10px">
                  <ion-card-header
                    v-if="item.type === 'Paypal' || item.type === 'Paynamics'"
                    style="padding: 0px"
                  >
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                      "
                    >
                      <img
                        :src="
                          item.type === 'Paypal'
                            ? '/paypal.png'
                            : 'paynamics.png'
                        "
                      />

                      <ion-radio :value="item.type"> </ion-radio>
                    </div>
                    <ion-card-subtitle>{{
                      item.description
                    }}</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-header v-else style="padding: 0px">
                    <ion-radio
                      style="font-size: 15px; color: black"
                      :value="item.type"
                      >{{ item.type }}
                      <ion-text
                        style="color: red"
                        v-if="item.type === 'Loyalty Points'"
                        >(O points)</ion-text
                      ></ion-radio
                    >
                    <ion-card-subtitle>{{
                      item.description
                    }}</ion-card-subtitle>
                  </ion-card-header>
                </ion-col>
              </ion-row>
            </ion-grid>
            <!-- Card content -->
          </ion-card>
        </ion-radio-group>
      </div>
      <ion-grid>
        <ion-row
          ><ion-col>
            <ion-text class="headers">Subtotal</ion-text>
          </ion-col>
          <ion-col size="2">
            <ion-text style="font-weight: bold; font-size: 15px"
              >P 185</ion-text
            >
          </ion-col>
        </ion-row>
        <ion-row
          ><ion-col>
            <ion-text class="headers">Delivery Charge</ion-text>
          </ion-col>
          <ion-col size="2">
            <ion-text style="font-weight: bold; font-size: 15px">P 59</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <ion-text style="font-size: 11px">Grand Total</ion-text>
              <ion-text style="font-weight: bold">P 244</ion-text>
            </ion-col>
            <ion-col size="8">
              <ion-button @click="placeOrder" id="place-order">
                Place Order
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import StarRating from 'vue-star-rating';
import OrderIncDec from './OrderIncDec.vue';
import AddToBag_modal from './AddToBag_modal.vue';
import ItemSlider from './ItemSlider.vue';
import horizontalScroll from './horizontalScroll.vue';
import {
  IonSelect,
  IonRadioGroup,
  IonRadio,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFooter,
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
  createGesture,
  createAnimation,
} from '@ionic/vue';
import {
  bagSharp,
  heartOutline,
  chevronForwardSharp,
  optionsOutline,
  chevronBackSharp,
  personCircle,
} from 'ionicons/icons';
import { paymentOptions, currentOrder } from '../mockData';
import OrderComplete from './OrderComplete.vue';
const router = useRouter();
const route = useRoute();

const isOpen = ref(false);
function placeOrder() {
  console.log('proceed clicked', route.params.id);
  console.log('current Orer', currentOrder[0]);
  isOpen.value = false;
  router.push({
    name: 'Order Complete',
    params: { id: `${currentOrder[0].id}` },
  });
}
const openModal = () => {
  isOpen.value = true;
};
const addMore = () => {
  console.log('add more');
  isOpen.value = false;
  router.go(-1);
};

const user = {
  name: 'Penguin Mina',
  number: '+63 912 345 6789',
  email: 'penguin.mina@gmail.com',
  addresses: [
    {
      type: 'Home',
      address: '1234 Elm Street, Apartment 5B, Anytown, USA, 12345',
    },
    {
      type: 'Work/Office',
      address:
        '5678 Willow Avenue, Unit 10C, Springfield, United States, 98765',
    },
  ],
};

// =============================

// ================================
const slideOption = ref([]);
const slideRefs = (el, index) => {
  console.log(index);
  slideOption.value[index] = el;
};
// const openSlide = () => {
//   // slideOption.open();
//   // slideOption.value.$el.open();
//   // console.log(slideOption.value.open());
// };

function radioClicked({ detail }) {
  console.log(detail.value);
}

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
</script>

<style scoped>
ion-radio::part(container) {
  background-color: white;
  border-style: hidden;
}
ion-radio::part(mark) {
  background-color: var(--ion-color-warning);
}
ion-col.card-col {
  padding: 10px 0px;
}
ion-content#content {
  --padding-top: 10px;
}
ion-button#place-order {
  text-transform: capitalize;
  width: 100%;
  --box-shadow: none;
  --border-radius: 12px;
}
ion-button#place-order::part(native) {
  padding: 20px;
}
#name {
  font-weight: bold;
}
ion-select::part(icon) {
  color: red;
  opacity: 1;
}
img.item-img {
  width: 78px;
  height: 60px;
  align-self: center;
}

.headers-container {
  font-weight: bold;
  font-size: 22px;
  margin-top: 30px;
}
.headers {
  margin-left: 10px;
  font-weight: bold;
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
ion-card#orders-card {
  padding: 0px 10px;
}
#back {
  --background: #e9ecef;
  --border-radius: 16px;
  color: black;
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
