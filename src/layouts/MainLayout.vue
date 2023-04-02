<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">
    <q-header elevated class="header text-white">
      <q-toolbar>
        <img src="~assets/logo.svg" alt="logo" />
        <q-toolbar-title> Research Helper </q-toolbar-title>

        <q-tabs v-model="tab" no-caps shrink stretch>
          <q-route-tab
            name="github"
            icon="bi-github"
            href="https://github.com/ResearchHelper/research-helper"
            target="_blank"
          />
          <q-route-tab
            name="download"
            label="Download"
            href="https://github.com/ResearchHelper/research-helper/releases"
            target="_blank"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
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
