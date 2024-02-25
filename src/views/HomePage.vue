<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>PH & EC Calibration</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <form @submit.prevent="handleSubmit">
        <ion-list>
          <ion-item>
            <ion-label position="floating">{{ labelStartPH }}</ion-label>
            <ion-input type="number" v-model="startPH" step="0.01"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">{{ labelStartEC }}</ion-label>
            <ion-input type="number" v-model="startEC" step="0.1"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">{{ labelPhTarget }}</ion-label>
            <ion-input type="number" v-model="phTarget" step="0.01"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">{{ labelEcTarget }}</ion-label>
            <ion-input type="number" v-model="ecTarget" step="0.01"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">{{ labelProvisionalAcidVol }}</ion-label>
            <ion-input type="number" v-model="provisionalAcidVol"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">{{ labelProvisionalFertilizerVol }}</ion-label>
            <ion-input type="number" v-model="provisionalFertilizerVol" step="0.01"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">{{ labelPostMixPH }}</ion-label>
            <ion-input type="number" v-model="postMixPH" step="0.01"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">{{ labelPostMixEC }}</ion-label>
            <ion-input type="number" v-model="postMixEC" step="0.1"></ion-input>
          </ion-item>

        </ion-list>

        <ion-button type="submit" expand="block">{{ labelCalculate }}</ion-button>

        <ion-item>
          <ion-label>{{ labelRemainingAcidVol }}</ion-label>
          <ion-text>{{ remainingAcidVol }} ml</ion-text>
        </ion-item>

        <ion-item>
          <ion-label>{{ labelRemainingFertilizerVol }}</ion-label>
          <ion-text>{{ remainingFertilizerVol }} L</ion-text>
        </ion-item>

        <ion-item>
          <ion-label>{{ labelRemainingFertilizerVolume90Percent }}</ion-label>
          <ion-text>{{ remainingFertilizerVol90Percent }} L</ion-text>
        </ion-item>

        <ion-item>
          <ion-label>{{ labelAcidPHPerCl }}</ion-label>
          <ion-text>{{ acidPhPerCl }}</ion-text>
        </ion-item>

        <ion-item>
          <ion-label>{{ labelFertilizerECPerDl }}</ion-label>
          <ion-text>{{ fertilizerEcPerDl }}</ion-text>
        </ion-item>

         <ion-item>
          <ion-label>{{ labelLanguage }}</ion-label>
          <ion-segment v-model="language">
            <ion-segment-button value="EN">
              <ion-label>EN</ion-label>
            </ion-segment-button>
            <ion-segment-button value="DE">
              <ion-label>DE</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-item>
      
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSegment,
  IonSegmentButton
} from '@ionic/vue';
import { ref, computed } from 'vue';

const translations = {
  EN: {
    title: "PH & EC Calibration",
    startPH: "Start PH:",
    startEC: "Start EC:",
    phTarget: "PH Target:",
    ecTarget: "EC Target:",
    VolprovisionalAcidVol: "Provisional acid Vol (ml):",
    VolprovisionalFertilizerVol: "Provisional fertilizer Vol (L):",
    postMixPH: "Post-mix PH:",
    postMixEC: "Post-mix EC:",
    remainingAcidVolume: "Remaining acid volume:",
    remainingFertilizerVolume: "Remaining fertilizer volume:",
    remainingFertilizerVolume90Percent: "Remaining fertilizer Vol × 90%:",
    acidPHPerCl: "Acid PH/cl:",
    fertilizerECPerDl: "Fertilizer EC/dl:",
    calculate: "Calculate",
    language: "Language:"
  },
  DE: {
    title: "PH- & EC-Kalibrierung",
    startPH: "Start-PH:",
    startEC: "Start-EC:",
    phTarget: "PH-Ziel:",
    ecTarget: "EC-Ziel:",
    VolprovisionalAcidVol: "Vorläufiges Säurevolumen (ml):",
    VolprovisionalFertilizerVol: "Vorläufiges Düngervolumen (L):",
    postMixPH: "Nachmisch-PH:",
    postMixEC: "Nachmisch-EC:",
    remainingAcidVolume: "Verbleibendes Säurevolumen:",
    remainingFertilizerVolume: "Verbleibendes Düngervolumen:",
    remainingFertilizerVolume90Percent: "Verbleibendes Düngervolumen × 90%:",
    acidPHPerCl: "Säure-PH/cl:",
    fertilizerECPerDl: "Dünger-EC/dl:",
    calculate: "Berechnen",
    language: "Sprache:"
  }
};

const language = ref('DE');

const labelStartPH = computed(() => translations[language.value].startPH);
const labelStartEC = computed(() => translations[language.value].startEC);
const labelPhTarget = computed(() => translations[language.value].phTarget);
const labelEcTarget = computed(() => translations[language.value].ecTarget);
const labelProvisionalAcidVol= computed(() => translations[language.value].VolprovisionalAcidVol);
const labelProvisionalFertilizerVol = computed(() => translations[language.value].VolprovisionalFertilizerVol);
const labelPostMixPH = computed(() => translations[language.value].postMixPH);
const labelPostMixEC = computed(() => translations[language.value].postMixEC);
const labelRemainingAcidVol = computed(() => translations[language.value].remainingAcidVolume);
const labelRemainingFertilizerVol = computed(() => translations[language.value].remainingFertilizerVolume);
const labelRemainingFertilizerVolume90Percent = computed(() => translations[language.value].remainingFertilizerVolume90Percent);
const labelAcidPHPerCl = computed(() => translations[language.value].acidPHPerCl);
const labelFertilizerECPerDl = computed(() => translations[language.value].fertilizerECPerDl);
const labelCalculate = computed(() => translations[language.value].calculate);
const labelLanguage = computed(() => translations[language.value].language);



const startPH = ref(null);
const startEC = ref(null);
const phTarget = ref(5.8);
const ecTarget = ref(1.8);

const provisionalAcidVol= ref(30);
const provisionalFertilizerVol = ref(0.5);
const postMixPH = ref(null);
const postMixEC = ref(null);

const remainingAcidVol = ref('');
const remainingFertilizerVol = ref('');
const remainingFertilizerVol90Percent = ref('')
const acidPhPerDl = ref('');
const fertilizerEcPerL = ref('');
const fertilizerEcPerDl = ref('');  // Initialize this variable
const acidPhPerCl = ref('')

const calculateAcidPH = () => {
  if (startPH.value !== null && postMixPH.value !== null && provisionalAcidVol.value !== null) {
    const phDelta = startPH.value - postMixPH.value;
    // Convert provisional acid Vol from mL to cL (1 cL = 10 mL)
    const provisionalAcidVolCl = provisionalAcidVol.value / 10;
    const phDeltaPerCl = phDelta / provisionalAcidVolCl;
    acidPhPerCl.value = parseFloat(phDeltaPerCl.toFixed(2) * -1);  // Rounded to 2 decimal places

    if (phTarget.value !== null) {
      const totalAcidNeededCl = (startPH.value - phTarget.value) / phDeltaPerCl;
      // Convert total acid needed back from cL to mL for display
      const totalAcidNeededMl = totalAcidNeededCl * 10;
      remainingAcidVol.value = parseFloat((totalAcidNeededMl - provisionalAcidVol.value).toFixed(2));
    }
  }
  console.log("New remainingAcidVolume:", remainingAcidVol.value);
};


const calculateFertilizerEC = () => {
  if (startEC.value !== null && postMixEC.value !== null && provisionalFertilizerVol.value !== null) {
    const ecDelta = postMixEC.value - startEC.value;
    const ecDeltaPerL = ecDelta / provisionalFertilizerVol.value;
    fertilizerEcPerL.value = parseFloat(ecDeltaPerL.toFixed(2));
    fertilizerEcPerDl.value = parseFloat((ecDeltaPerL / 10).toFixed(2));

    if (ecTarget.value !== null) {
      const totalFertilizerNeeded = (ecTarget.value - startEC.value) / ecDeltaPerL;
      remainingFertilizerVol.value = parseFloat((totalFertilizerNeeded - provisionalFertilizerVol.value).toFixed(1));

      // Calculate 90% of the remaining fertilizer volume
      remainingFertilizerVol90Percent.value = parseFloat((remainingFertilizerVol.value * 0.9).toFixed(2));
    }
  }
  console.log("New remainingFertilizerVol:", remainingFertilizerVol.value);
};



const handleSubmit = () => {
  calculateAcidPH();
  calculateFertilizerEC();
  // Log the results or handle them as needed
};
</script>
