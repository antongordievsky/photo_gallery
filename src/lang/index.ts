import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import image from "@/lang/en/image";
import navbar from "@/lang/en/navbar";
import common from "@/lang/en/common";

export default new VueI18n({
    locale: 'en',
    messages: {
        'en': {
            image: image,
            navbar,
            common,
        }
    },
});
