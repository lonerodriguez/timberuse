<template>
  <LayoutDialogSection
    border-b
    title="Webhooks"
    :button="{
      text: 'Manage',
      to: projectWebhooksRoute(project.id),
      iconRight: ChevronRightIcon,
      color: 'default'
    }"
  >
    <template #icon>
      <IconWebhooks class="h-full w-full" />
    </template>
  </LayoutDialogSection>
</template>
<script setup lang="ts">
import { ProjectPageTeamDialogFragment } from '~~/lib/common/generated/gql/graphql'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { projectWebhooksRoute } from '~~/lib/common/helpers/route'
import { LayoutDialogSection } from '@speckle/ui-components'

defineProps<{
  project: ProjectPageTeamDialogFragment
}>()
</script>
