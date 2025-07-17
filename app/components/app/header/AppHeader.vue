<!-- Navigation Items list, scale the navigation here for futures references.
For more infor: visit https://ui3.nuxt.dev/getting-started -->

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();

const items = ref([
  {
    label: "Home",
    to: "/",
    children: [
      {
        label: "Go back",
        icon: "i-lucide-arrow-up",
        slot: "components",
        onSelect: () => scrollTo("#hero"),
      },
      {
        label: "Gallery",
        icon: "i-lucide-brain",
        slot: "components",
        onSelect: () => scrollTo("#gallery"),
      },
      {
        label: "Roadmap",
        icon: "i-lucide-map",
        slot: "components",
        onSelect: () => scrollTo("#roadmap"),
      },
    ],
  },

  {
    label: "Gallery",
    to: "gallery",
  },

  {
    label: "Roadmap",
    to: "roadmap",
  },
]);

//TODO: Refactor on a seperate file
function scrollTo(s: string) {
  nextTick(() => {
    const element = document.querySelector(s) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
}

async function signOut() {
  const { error } = await client.auth.signOut();
  if (error) throw error;
}
</script>

<!--It uses NavigationMenu from NuxtUI, for more infor visit: https://ui3.nuxt.dev/components/navigation-menu-->
<template>
  <header class="fixed top-0 left-0 w-full z-30 bg-mocha-crust">
    <div class="flex flex-row items-center p-2 gap-4 w-full justify-center">
      <UNavigationMenu
        :items="items"
        orientation="horizontal"
        variant="link"
        content-orientation="vertical"
        class="gap-2"
      />

      <span>
        <UButton v-if="!user" label="Login" variant="subtle" to="/login" />
        <UButton v-else label="Logout" variant="subtle" @click="signOut" />
      </span>
    </div>
    <USeparator />
  </header>
</template>
