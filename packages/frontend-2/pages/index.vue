<template>
  <ProjectsDashboard v-if="isLoggedIn" />
  <template v-else>
    <h5 class="h5 font-medium leading-7">No homepage design for guests exists yet!</h5>
  </template>
</template>
<script setup lang="ts">
import { useActiveUser } from '~~/lib/auth/composables/activeUser'

useHead({
  title: 'Dashboard'
})

definePageMeta({
  middleware: ['dashboard-redirect']
})

const { isLoggedIn } = useActiveUser()
</script>
