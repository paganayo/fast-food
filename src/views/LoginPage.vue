<template>
  <ion-page>
    <ion-content>
      <ion-grid style="padding-top: 50px">
        <ion-row>
          <ion-col>
            <ion-img src="/fastfood.png"></ion-img>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text>
              <h1>Bonjour!</h1>
            </ion-text>

            <ion-text color="medium">
              Welcome to all new FastFood mobile app. Kindly login your account.
              Thank you!
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row class="input">
          <ion-col>
            <ion-item fill="outline" lines="none">
              <ion-input
                label="Email"
                label-placement="stacked"
                placeholder="Enter your email"
              ></ion-input>
            </ion-item>
          </ion-col>
          <!-- <ion-button fill="clear" class="ion-align-self-end"
              >Forgot?</ion-button
            > -->
        </ion-row>

        <ion-row>
          <ion-col>
            <!-- <ion-item lines="none">
              <ion-input
                class="password"
                clear-input="true"
                label="Password"
                label-placement="stacked"
                fill="solid"
                placeholder="Enter your password"
              />
            </ion-item> -->
            <!-- <ion-item
              lines="none"
              class="item-has-focus ion-touched password"
              fill="outline"
            >
              <ion-label position="stacked">Password</ion-label>
              <ion-input
                clear-input="true"
                placeholder="Enter your password"
              ></ion-input>
            </ion-item> -->
            <ion-item fill="outline" lines="none">
              <ion-input
                label="Password"
                label-placement="stacked"
                placeholder="Enter your password"
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col style="display: flex; justify-content: center">
            <ion-button
              router-direction="root"
              router-link="user/home"
              class="ion-text-capitalize login"
            >
              Login
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col>
            <ion-button
              class="ion-text-capitalize guest"
              style="display: grid"
              fill="clear"
            >
              Login as Guest
            </ion-button>
          </ion-col>
        </ion-row>
        <!-- <ion-row class="ion-align-items-end">
            <ion-col
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <ion-item lines="none">
                <ion-label> Don't have an account yet? </ion-label>
                <ion-button
                  fill="clear"
                  class="ion-text-capitalize"
                  id="create"
                >
                  Create
                </ion-button>
              </ion-item>
            </ion-col>
          </ion-row> -->
      </ion-grid>
      <div class="account">
        <ion-label> Don't have an account yet? </ion-label>
        <ion-button fill="clear" class="ion-text-capitalize" id="create">
          Create
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonImg,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonText,
  IonLabel,
} from '@ionic/vue';
</script>

<style scoped>
/* ion-content {
  --background: var(
    --ion-color-primary
  );
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
} */
ion-grid {
  --ion-grid-padding: 15px;
}

.account {
  font-size: 15px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
ion-row.input {
  margin-top: 30px;
}
ion-button#create {
  font-weight: bold;
  margin: 2px 0px 0px 0px;
}

ion-item.password {
  /* border-radius: 30px !important;
  border: 1px solid #ffffff;
  border-bottom: 0px !important;
  box-shadow: none !important; */
  --background: var(--ion-color-light-tint);
  --highlight-height: 2px;
  --highlight-color-focused: #43e7f3;
  --highlight-color-valid: #6f58d8;
  --highlight-color-invalid: #ff46be;
}

/* ion-input.email {
   --border-radius: 30px !important;
} */
ion-input.email .label {
  color: red;
}

ion-input.password {
  margin-top: 10px;
  height: 60px;
  --highlight-color-focused: null;
}

ion-button.login {
  width: 343px;
  height: 60px;
  --border-radius: 15px;
}
ion-button.logout {
  font-weight: bold;
  margin-top: 20px;
}
ion-button.guest {
  align-self: center;
}
ion-img {
  width: 103px;
  height: 110px;
}
</style>
