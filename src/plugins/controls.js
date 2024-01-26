import VInput from '../components/Controls/Input.vue';
import VError from '../components/Controls/Error.vue';
import VLabel from '../components/Controls/Label.vue';
import VButton from '../components/Controls/Button.vue';
import { RouterLink } from 'vue-router'

export default {
    install(app) {
        app.component('VInput', VInput,);
        app.component('VError', VError,);
        app.component('VLabel', VLabel);
        app.component('VButton', VButton);
        app.component('v-router-link', RouterLink);
    },
};
