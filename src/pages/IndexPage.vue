<template>
  <q-page class="column items-center">
    <h2 class="text-white">
      {{ $t("an-efficient-way-to-read-papers-and-books-and-take-notes") }}
    </h2>

    <q-btn
      square
      no-caps
      class="bg-primary text-white"
      size="xl"
      :label="$t('get-research-helper')"
      icon="bi-download"
      style="width: 30%"
      href="https://github.com/ResearchHelper/research-helper/releases"
      target="_blank"
    />
    <q-card
      dark
      flat
      style="width: 70%"
      class="q-pa-md"
    >
      <q-card-section horizontal>
        <q-img src="~assets/screenshot.png" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
