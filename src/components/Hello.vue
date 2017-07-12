<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("home.hello") }}</p>
  </div>
</template>

<script lang="ts">
// While it would be possible to support inline TypeScript
// code in the vue file itself, we prefer separate files
// to make use of existing IDE/editor and tooling support
// for TypeScript files.
// https://github.com/locoslab/vue-typescript-component
export { default } from './hello';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
