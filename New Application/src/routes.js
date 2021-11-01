
import App from './App.vue';
import { i18n } from "./main.js";

export default [
    { 
        path: '/:lang', 
        component: App,
        beforeEnter(to, from, next) {
            const lang = to.params.lang;
            if (!["en", "de"].includes(lang)) return next("de");
            if (i18n.locale !== lang) {
              i18n.locale = lang;
            }
            return next();
          },

    },
    {
      path: "*",
      redirect: "/de"
    }
    
]