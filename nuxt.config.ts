// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxthub/core",
    "@nuxtjs/supabase",
    "@tresjs/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
  ],

  eslint: {
    config: {
      autoInit: false,
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/",
      callback: "/confirm",
      include: undefined,
      exclude: ["/", "/gallery", "/roadmap", "/login", "/confirm"],
      saveRedirectToCookie: false,
    },
  },

  css: ["~/assets/css/main.css"],

  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
});
