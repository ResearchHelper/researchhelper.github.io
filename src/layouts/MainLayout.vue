<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">
    <q-header elevated class="header text-white">
      <q-toolbar>
        <img src="~assets/logo.svg" alt="logo" />
        <q-toolbar-title> Research Helper </q-toolbar-title>

        <q-tabs v-model="tab" no-caps shrink stretch>
          <q-tab name="download" label="Download" />
          <q-tab name="github" label="GitHub" />
          <q-tab name="about" label="About" />
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
