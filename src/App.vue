<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list>
            <div style="display: flex; flex-direction: row">
              <div>
                <ion-avatar>
                  <img
                    class="profile"
                    alt="Silhouette of a person's head"
                    src="../public/mina.jpg"
                  />
                </ion-avatar>
              </div>
              <div
                style="
                  /* background-color: blueviolet; */
                  flex: 1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <ion-avatar>
                  <img class="crown" src="../public/crown.png" />
                </ion-avatar>
                <ion-menu-toggle :auto-hide="false">
                  <ion-button
                    @click="testt()"
                    fill="clear"
                    router-direction="root"
                    router-link="/user/loyalty-points"
                    class="points-button"
                  >
                    {{ loyaltyPoints.count }} points
                    <ion-icon
                      class="points-icon"
                      slot="end"
                      :icon="chevronForwardSharp"
                    ></ion-icon>
                  </ion-button>
                </ion-menu-toggle>
              </div>
            </div>
            <ion-list-header class="ion-margin-top"
              >Penguin Mina</ion-list-header
            >
            <ion-note>+63 912 345 6789</ion-note>

            <ion-menu-toggle
              :auto-hide="false"
              v-for="(menu, index) in menuList"
              :key="index"
            >
              <ion-item-divider
                v-if="index === 5"
                style="transform: translateY(-50%)"
              />
              <ion-item
                @click="menuClick(index)"
                router-direction="root"
                :router-link="menu.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{
                  selected: selectedIndex === index,
                }"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :md="menu.mdIcon"
                ></ion-icon>
                <ion-label>{{ menu.title }}</ion-label>
                <ion-badge
                  class="notif-badge"
                  v-if="index === 2 || index === 5"
                  color="warning"
                  >{{ index === 2 ? '4' : '2' }}</ion-badge
                >
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
          <ion-button
            shape="round"
            class="ion-text-capitalize logout"
            router-direction="root"
            router-link="/login"
            >Logout</ion-button
          >
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonButton,
  IonAvatar,
  IonItemDivider,
  IonBadge,
} from '@ionic/vue';
import { ref, reactive } from 'vue';
import {
  bagSharp,
  fastFoodSharp,
  helpCircleSharp,
  homeSharp,
  notificationsSharp,
  storefrontSharp,
  chevronForwardSharp,
} from 'ionicons/icons';

function menuClick(index) {
  console.log('selected index value: ', selectedIndex.value, index);
  selectedIndex.value = index;
}
function testt() {
  console.log('points clicked');
}
const selectedIndex = ref(0);
const loyaltyPoints = reactive({ count: 0 });
const menuList = [
  {
    title: 'Home',
    url: '/user/Home',
    mdIcon: homeSharp,
  },
  {
    title: 'Order Now!',
    url: '/user/Order',
    mdIcon: fastFoodSharp,
  },
  {
    title: 'Notifications',
    url: '/user/Notifications',
    mdIcon: notificationsSharp,
  },
  {
    title: 'Store Locator',
    url: '/user/Store-Locator',
    mdIcon: storefrontSharp,
  },
  {
    title: `FAQ's`,
    url: '/user/FAQ',
    mdIcon: helpCircleSharp,
  },
  {
    title: 'My Orders',
    url: '/user/My-Orders',
    mdIcon: bagSharp,
  },
  {
    title: 'My Account',
    url: '/user/My-Account',
    mdIcon: fastFoodSharp,
  },
  {
    title: 'My Favorites',
    url: '/user/My-Favorites',
    mdIcon: notificationsSharp,
  },
  {
    title: 'Order Tracker',
    url: '/user/Order-Tracker',
    mdIcon: storefrontSharp,
  },
  {
    title: 'Order History',
    url: '/user/Order-History',
    mdIcon: helpCircleSharp,
  },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const path = window.location.pathname;
console.log(selectedIndex.value);
if (path !== undefined) {
  selectedIndex.value = menuList.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase()
  );
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

img.crown {
  height: 40px;
  width: 40px;
  /* background-color: rgb(189, 43, 152); */
  padding: 2px;
}
img.profile {
  object-position: 0px -10px;
}
ion-button.points-button {
  --color: black;
}
ion-icon.points-icon {
  color: var(--ion-color-primary);
}

ion-button.logout {
  width: 165px;
  height: 45px;
  --border-radius: 15px;
}
ion-badge.notif-badge {
  border-radius: 20px;
  width: 19px;
  height: 19px;
  color: var(--ion-color-primary-contrast);
}

ion-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
ion-grid.menu-profile {
  background-color: aquamarine;
  text-align: center;
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  /* --padding-top: 20px; */
  /* --padding-bottom: 20px; */
}
/* ion-menu-toggle {
  background: rgb(107, 67, 18);
} */

ion-menu ion-avatar {
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#menu-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#menu-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}
ion-menu.md ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}
ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
