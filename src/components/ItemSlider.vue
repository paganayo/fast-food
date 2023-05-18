<template>
  <div id="slider-container">
    <ion-item-sliding ref="slider" @ionDrag="slideClosed">
      <ion-item>
        <ion-label>Sliding Item with End Options</ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option expandable="false">
          <ion-icon style="font-size: 20px" :icon="pencilSharp"></ion-icon
        ></ion-item-option>
        <ion-item-option expandable="false" color="danger">
          <ion-icon style="font-size: 20px" :icon="trashSharp"></ion-icon
        ></ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
    <div style="position: relative">
      <ion-button
        :style="setSlider"
        id="settings"
        @click="openSlide"
        ref="buttonRef"
      >
        <ion-icon
          style="font-size: 20px"
          :icon="ellipsisVerticalSharp"
        ></ion-icon>
      </ion-button>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, reactive } from 'vue';

import {
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonButton,
  IonIcon,
  createAnimation,
} from '@ionic/vue';
import { pencilSharp, ellipsisVerticalSharp, trashSharp } from 'ionicons/icons';

const slider = ref();
const buttonRef = ref();
const sliderStatus = ref(false);
const currentX = reactive({ value: 0 });
const setSlider = computed(() => ({
  'z-index': '1',
  position: 'absolute',
  top: '0px',
  right: '0px',
  // transform: `translate3d(${currentX.value}px, 0px, 0px)`,
  // transition: 'all 0.1s ease-out',
}));
// const optionPos = computed({
//   transform: 'translate3d(200px, 0px, 0px)',
//   transition: 'all 0.3s ease-out',
// });
function slideSwiped(e) {
  console.log('e: ', e);
  sliderStatus.value = true;
  console.log('status', sliderStatus.value);
}
function slideClosed(detail) {
  slider.value.$el.getOpenAmount().then((amount) => {
    console.log('amount: ', amount);
    currentX.value = amount;
  });
  // const goRight = createAnimation()
  //   .addElement(buttonRef.value.$el)
  //   .duration(300)
  //   .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  //   .fromTo('opacity', '1', '0')
  //   .fromTo('z-index', '1', '0');
  // const goLeft = createAnimation()
  //   .addElement(buttonRef.value.$el)
  //   .duration(300)
  //   .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
  //   .fromTo('opacity', '0', '1')
  //   .fromTo('z-index', '0', '1');
  // slider.value.$el.getSlidingRatio().then((ratio) => {
  //   console.log('ratio: ', ratio);
  //   if (ratio < 0.03 && sliderStatus.value === true) {
  //     slider.value.$el.close();
  //     // goLeft.play();
  //     console.log('closed');
  //     sliderStatus.value === false;
  //     goRight.play();
  //   } else {
  //     console.log('opened');
  //     // goRight.play();
  //     sliderStatus.value === true;
  //     goLeft.play();
  //   }
  // });
  // console.log('detail', detail);
  // if (detail.detail.ratio < 1)
  //   console.log(
  //     'slider value',
  //     detail.detail.amount,
  //     ' ratio: ',
  //     detail.detail.ratio
  //   );
}
function openSlide() {
  // slider.value.$el.closeOpened();
  // goLeft.play();
  console.log('sldier: ', sliderStatus.value);
  if (sliderStatus.value === false) {
    slider.value.$el.open();
    sliderStatus.value = true;
  } else {
    slider.value.$el.close();
    sliderStatus.value = false;
  }
  //   sliderStatus.value = !sliderStatus.value;
  //   console.log('toggle: ', sliderStatus.value);
}

// function getSliderStatus() {
//   console.log('get', sliderStatus.value);
//   return sliderStatus.value;
// }
</script>

<style scoped>
#slider-container {
  display: flex;
}
ion-button#settings {
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0px;
  --background: none;
  --box-shadow: none;
  color: var(--ion-color-warning);
  /* transform: translate3d(100px, 0px, 0px);
    transition: all 0.3s ease-out; */
}

ion-item-options {
  padding-right: 20px;
  background: white;
}
ion-item-option {
  margin-right: 5px;
  margin-left: 5px;
}
</style>
