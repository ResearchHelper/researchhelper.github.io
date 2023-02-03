<template>
  <q-page class="column items-center">
    <h2 class="text-white">
      Make some changes An efficient way to read papers and books and take notes
    </h2>
    <q-btn
      square
      no-caps
      class="bg-primary text-white"
      size="xl"
      style="width: 30%"
    >
      Get Research Helper
    </q-btn>

    <h2 class="text-white">Features</h2>
    <q-card dark flat style="width: 70%">
      <q-card-section horizontal>
        <q-card-section>
          <h4>Drag and Drop Layout</h4>
          <h5>
            Drag and Drop layout makes your reading experience even better.
          </h5>
        </q-card-section>

        <q-img src="~assets/layout.gif" />
      </q-card-section>
    </q-card>

    <q-card dark flat style="width: 70%">
      <q-card-section horizontal>
        <q-card-section>
          <h4>Built-in PDF Reader</h4>
          <h5>Read papers and books using the built-in PDF Reader.</h5>
        </q-card-section>

        <q-img src="~assets/reader.gif" />
      </q-card-section>
    </q-card>

    <q-card dark flat style="width: 70%">
      <q-card-section horizontal>
        <q-card-section>
          <h4>Built-in Note</h4>
          <h5>Organize your books and notes in the same place.</h5>
        </q-card-section>

        <q-img src="~assets/note.gif" />
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
