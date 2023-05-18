<template>
  <!-- Scroll events are disabled by default for content for performance reasons, enable them to listen to them -->
  <ion-content
    class="ion-padding"
    :scroll-x="true"
    :scroll-y="false"
    :scroll-events="true"
    @ionScrollEnd="handleScrollEnd"
    @ionScroll="handleScroll"
    ref="contentScroller"
  >
    <div
      :style="{
        display: 'flex',
        width: '130vw',
        'align-items': 'center',
      }"
      ref="cardRef"
    >
      <ion-radio-group
        allow-empty-selection="true"
        :value="'Home'"
        @ionChange="radioClicked"
      >
        <ion-card style="width: 95vw">
          <ion-grid>
            <ion-row>
              <ion-col style="margin-bottom: 10px">
                <ion-card-header style="padding: 0px">
                  <ion-card-title
                    v-if="type === 'user'"
                    style="font-size: 20px; font-weight: bold"
                    >{{ user.name }}</ion-card-title
                  >
                  <div
                    v-if="type.type === 'Home' || type.type === 'Work/Office'"
                    style="
                      display: flex;
                      justify-content: space-between;
                      padding-right: 20px;
                    "
                  >
                    <ion-card-title
                      v-if="type.type === 'Home'"
                      style="font-size: 20px; font-weight: bold"
                      >{{ type.type }}</ion-card-title
                    ><ion-card-title
                      v-if="type.type === 'Work/Office'"
                      style="font-size: 20px; font-weight: bold"
                      >{{ type.type }}</ion-card-title
                    >
                    <ion-radio
                      v-if="type.type === 'Home' || type.type === 'Work/Office'"
                      :value="type.type"
                    />
                  </div>
                </ion-card-header>
                <ion-card-subtitle v-if="type === 'user'">{{
                  user.number
                }}</ion-card-subtitle>
                <ion-card-subtitle v-if="type === 'user'">{{
                  user.email
                }}</ion-card-subtitle>

                <ion-card-subtitle v-if="type.type === 'Home'">{{
                  type.address
                }}</ion-card-subtitle>
                <ion-card-subtitle v-if="type.type === 'Work/Office'">{{
                  type.address
                }}</ion-card-subtitle>
              </ion-col>
            </ion-row>
          </ion-grid>
          <!-- Card content -->
        </ion-card>
      </ion-radio-group>

      <div
        :style="{
          display: 'flex',
          'margin-left': '0px',
        }"
      >
        <ion-button class="hiddenButton"
          ><ion-icon style="font-size: 20px" :icon="pencilSharp"></ion-icon
        ></ion-button>
        <ion-button id="danger" class="hiddenButton"
          ><ion-icon style="font-size: 20px" :icon="trashSharp"></ion-icon
        ></ion-button>
      </div>
    </div>
    <div style="position: relative">
      <ion-button
        :disabled="slideOpened"
        @click="openSlide"
        id="settings"
        ref="buttonRef"
        :style="{
          transform: buttonStyle.buttonTransform,
          transition: 'opacity 0.1s ease',
          opacity: buttonStyle.buttonOpacity,
        }"
      >
        <ion-icon
          style="font-size: 25px"
          :icon="ellipsisVerticalSharp"
        ></ion-icon>
      </ion-button>
    </div>
  </ion-content>
</template>

<script setup>
import {
  IonContent,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonCol,
  IonRow,
  IonCardSubtitle,
  IonRadio,
  IonRadioGroup,
} from '@ionic/vue';
import { ref, reactive } from 'vue';
import { ellipsisVerticalSharp, pencilSharp, trashSharp } from 'ionicons/icons';
import { defineProps } from 'vue';

defineProps(['user', 'type']);
const cardRef = ref(null);
const cardTransform = ref('');
// const buttonTransform = ref('');
const contentScroller = ref();
// const buttonOpacity = ref(1);
const slideOpened = ref(false);
const currentScrollLeft = ref();
const buttonStyle = reactive({
  buttonTransform: ref(),
  buttonOpacity: ref(1),
  buttonMarginLeft: ref('30px'),
});
function radioClicked({ detail }) {
  console.log(detail.value);
}

function openSlide() {
  const translateX = -100; // Example translation value in pixels
  const translateY = 0; // Example translation value in pixels
  const translateZ = 0;
  //     transform: 'translate3d(-200px, 0px, 0px)',
  //   transition: 'all 0.3s ease-out',

  if (slideOpened.value === false) {
    contentScroller.value.$el.scrollToPoint(100, 0, 500);
  }
  cardTransform.value = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`;
  // buttonStyle.buttonTransform = `translate3d(20vw, 0px, 0px)`;
  buttonStyle.buttonMarginLeft = `0px`;
  // buttonOpacity.value = 0;
}
function handleScroll(detail) {
  console.log('detail: ', detail.detail);
  console.log('slideOpened: ', slideOpened.value);
  currentScrollLeft.value = detail.detail.scrollLeft;
  if (currentScrollLeft.value > 130) {
    contentScroller.value.$el.scrollToPoint(0, 0, 500);
    slideOpened.value = true;
  }

  if (currentScrollLeft.value < 100 && slideOpened.value === true) {
    //when the button was clicked, slide will open
    // console.log(
    //   'current: ',
    //   currentScrollLeft.value,
    //   'slideOpened: ',
    //   slideOpened.value
    // );
    buttonStyle.buttonTransform = `translate3d(${currentScrollLeft.value}px, 0px, 0px)`;
    buttonStyle.buttonOpacity = 1 - currentScrollLeft.value / 100;
    if (currentScrollLeft.value === 0) slideOpened.value = false;
  } else if (currentScrollLeft.value < 100 && slideOpened.value === false) {
    //
    buttonStyle.buttonTransform = `translate3d(${
      currentScrollLeft.value * 1.5
    }px, 0px, 0px)`;
    buttonStyle.buttonOpacity = 1 - currentScrollLeft.value / 100;
  }

  // console.log('slideOpened: ', slideOpened.value);
}
function handleScrollEnd(scroll) {
  // console.log('handle SCroll:', scroll);

  // slideOpened.value = !slideOpened.value;
  console.log('handlescroll end:', slideOpened.value);
}
</script>

<style scoped>
ion-radio::part(container) {
  background-color: white;
  border-style: hidden;
}
ion-radio::part(mark) {
  background-color: var(--ion-color-warning);
}
ion-button.hiddenButton {
  /* width: 20vw; */
  --background: #ffe5d0;
  --box-shadow: none;
  color: var(--ion-color-warning);
  height: 85px;
  width: 44px;
  --border-radius: 16px;
}
ion-button#danger {
  --background: #e78b97;
  color: var(--ion-color-danger);
}
ion-content {
  --padding-start: 0px;
  height: 100px;
}
ion-content::part(scroll) {
  padding-right: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}
ion-card {
  border-radius: 16px;
  --background: #e9ecef;
  box-shadow: none;
}
ion-button#settings {
  position: absolute;
  z-index: 1;
  bottom: 30px;
  right: -25px;
  color: var(--ion-color-warning);
  --background: none;
  --box-shadow: none;
  /* transform: translate3d(100px, 0px, 0px);
    transition: all 0.3s ease-out; */
}
</style>
