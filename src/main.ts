import {createApp} from 'vue'
import App from './App.vue'

import {IonicVue} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
// import '@ionic/vue/css/palettes/dark.system.css';
/* Theme variables */
import './theme/variables.scss';
import './theme/global.scss';
import './theme/components/ion-progress-bar.scss';
import router from "@/misc/router";
import {createPinia} from "pinia";
import {piniaCapacitorPersist} from "pinia-plugin-capacitor-persist";
import {useQuestionsStore} from "@/stores/questions";
import {useProgressStore} from "@/stores/progress";
import {QuestionMapper} from "@/mappers/QuestionMapper";

// npx @capacitor/assets generate

(async function() {
    const app = createApp(App)
        .use(IonicVue)
        .use(router);

// store
    const pinia = createPinia()
    pinia.use(piniaCapacitorPersist);
    app.use(pinia);

    const progressStore = useProgressStore()
    await progressStore.restored;

    const questionsStore = useQuestionsStore()
    const questionsJson = await import(`@/data/questions.json`);
    questionsStore.questions = questionsJson.default.map(QuestionMapper);

    router.isReady().then(() => {
        app.mount('#app');
    });
})()
