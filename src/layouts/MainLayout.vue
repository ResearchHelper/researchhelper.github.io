<template>
  <q-layout
    view="lHh Lpr lFf"
    class="bg-dark"
  >
    <q-header
      elevated
      class="header text-white"
    >
      <q-toolbar>
        <img
          src="~assets/logo.svg"
          alt="logo"
        />
        <q-toolbar-title> {{ $t("research-helper") }} </q-toolbar-title>
        <q-tabs></q-tabs>

        <q-tabs
          v-model="tab"
          no-caps
          shrink
          stretch
        >
          <q-route-tab
            name="github"
            icon="bi-github"
            href="https://github.com/ResearchHelper/research-helper"
            target="_blank"
          />
          <q-route-tab
            name="doc"
            :label="$t('documentation')"
            href=""
            target="_blank"
          />
        </q-tabs>
        <q-select
          outlined
          dark
          dense
          v-model="language"
          :options="languageOptions"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      tab: "",

      language: { value: "en_US", label: "English" },
      languageOptions: [
        { value: "en_US", label: "English" },
        { value: "zh_CN", label: "中文" },
      ],
    };
  },

  watch: {
    language(option: { value: string; label: string }) {
      this.$i18n.locale = option.value;
    },
  },
});
</script>

<style>
.header {
  /* fuzzy glass */
  background: #0000001a;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
}
</style>
