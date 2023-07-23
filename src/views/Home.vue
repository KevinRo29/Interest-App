<template>
    <ion-page>
        <div class="center-card">
            <ion-card size="12" color="dark">
                <img alt="Finance" src="../assets/images/Finance.jpg" />
            <ion-card-header>
                <ion-card-title>Calculate:</ion-card-title>
                <ion-card-subtitle>Option to</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                <ion-row>
                    <ion-col size="12">
                        <ion-button expand="block" href="/present_value" color="warning" size="large">
                            <ion-icon slot="start" :icon="cash"></ion-icon>
                            Present value
                        </ion-button>
                    </ion-col>
                </ion-row>
                
                <ion-row>
                    <ion-col size="12">
                        <ion-button expand="block" href="/anualities" color="success" size="large">
                            Annuities
                            <ion-icon slot="end" :icon="calendar"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-card-content>
        </ion-card>
        </div>
    </ion-page>
</template>
  
<script lang="ts">
import {
    IonPage,
    IonCard, 
    IonCardContent,
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
} from '@ionic/vue';

import { defineComponent } from 'vue';
import { calendar, cash } from 'ionicons/icons';

export default defineComponent({
    components: {
        IonPage, 
        IonCard, 
        IonCardContent, 
        IonCardHeader, 
        IonCardSubtitle, 
        IonCardTitle, 
        IonRow, 
        IonCol,
        IonButton,
        IonIcon,
    },
    setup() {
      return { calendar, cash };
    },
});
</script>

<style scoped>
.center-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>