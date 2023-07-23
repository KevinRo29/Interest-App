<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Present Value</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <ion-card color="medium">
            <ion-card-content>
                <ion-list>
                    <ion-row>
                        <ion-col size="12">
                            <ion-item>
                                <ion-label position="stacked">Annuity (A)</ion-label>
                                <ion-input type="number" v-model="annuality" aria-label="Annuity (A)"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="12">
                            <ion-item>
                                <ion-label position="stacked">Interest rate (%)</ion-label>
                                <ion-input type="number" v-model="interestRate" aria-label="Interest rate (%)"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="12">
                            <ion-item>
                                <ion-label position="stacked">Frequency</ion-label>
                                <ion-select v-model="frequency" aria-label="Frequency" placeholder="Select an option">
                                    <ion-select-option value="1">Annual</ion-select-option>
                                    <ion-select-option value="2">Semiannual</ion-select-option>
                                    <ion-select-option value="4">Quarterly</ion-select-option>
                                    <ion-select-option value="12">Monthly</ion-select-option>
                                    <ion-select-option value="26">Fortnight</ion-select-option>
                                    <ion-select-option value="52">Weekly</ion-select-option>
                                    <ion-select-option value="365">Daily</ion-select-option>
                                </ion-select>
                            </ion-item>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="12">
                            <ion-item>
                                <ion-label position="stacked">Periods (n)</ion-label>
                                <ion-input type="number" v-model="periods" aria-label="Periods (n)"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="12" class="ion-text-center">
                            <ion-button color="dark" size="default" expand="block" @click="calcularValorPresente()">Calculate Present Value</ion-button>
                        </ion-col>
                    </ion-row>

                    <ion-row v-if="inputError">
                        <ion-col size="12">
                            <p class="error-message">Please complete all fields.</p>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="12">
                            <ion-item>
                                <ion-label position="stacked">Present Value (PV)</ion-label>
                                <ion-input :value="presentValue" disabled aria-label="Present Value (PV)"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                </ion-list>
            </ion-card-content>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
    IonSelect,
    IonSelectOption,
    IonRow,
    IonCol,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent ({
    components: {
        IonSelect,
        IonSelectOption,
        IonRow,
        IonCol,
        IonButtons,
        IonBackButton,
        IonCard,
        IonCardContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonPage,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
    },
    data() {
        return {
        annuality: 0,
        periods: 0,
        interestRate: 0,
        frequency: 0,
        convertedInterestRate: 0,
        presentValue: 0,
        inputError: false,
        }
    },
    methods: {
        calcularValorPresente() {
            this.inputError = false;
            
            if (this.annuality === 0 || this.interestRate === 0 || this.frequency === 0 || this.periods === 0) {
                this.inputError = true;
                return;
            }

            this.convertedInterestRate = (this.interestRate / this.frequency) / 100;
            this.presentValue = this.annuality * ((1 - Math.pow((1 + this.convertedInterestRate), -this.periods)) / this.convertedInterestRate);
        }
    }
});
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 14px;
}
</style>