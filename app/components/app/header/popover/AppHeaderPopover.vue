<script setup lang="ts">
const supabase = useSupabaseClient();

async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;

  window.location.reload();
}
</script>

<template>
  <UPopover>
    <UButton icon="i-lucide-circle-user" color="neutral" variant="ghost" />
    <template #content>
      <div class="size-48 m-4 p-2 flex flex-col gap-5">
        <header class="flex flex-row items-center gap-2">
          <UIcon name="i-lucide-circle-user" class="text-red-600" />

          <span>Welcome User</span>
        </header>

        <div class="footer">
          <UButton label="Logout" @click="signOut()" />
        </div>
      </div>
    </template>
  </UPopover>
</template>
