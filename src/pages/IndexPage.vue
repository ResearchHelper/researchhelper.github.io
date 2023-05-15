<template>
  <q-page class="column items-center">
    <h2 class="text-white title">
      {{ "An efficient way to read papers and take notes" }}
    </h2>

    <q-btn
      square
      no-caps
      class="bg-primary text-white button"
      size="xl"
      :label="$t('get-research-helper')"
      icon="bi-download"
      href="https://github.com/ResearchHelper/research-helper/releases"
      target="_blank"
    />

    <q-card
      dark
      flat
      style="width: 70%"
      class="q-pa-md card"
    >
      <q-card-section horizontal>
        <q-img
          src="~assets/screenshot.png"
          class="image"
        />
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

<style scoped>
q-page {
  min-width: 320px;
  min-height: 480px;
}
.title {
  font-size: 3rem;
}

@media (max-width: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .button {
    font-size: 1rem;
  }

  .image {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .button {
    font-size: 0.5rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1rem;
  }

  .button {
    font-size: 0.5rem;
  }
}

@media (max-height: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .button {
    font-size: 1rem;
  }

  .image {
    max-width: 100%;
    height: auto;
  }
}

@media (max-height: 768px) {
  .title {
    font-size: 2rem;
  }

  .button {
    font-size: 0.5rem;
  }
}

@media (max-height: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .button {
    font-size: 0.5rem;
  }
}
</style>
