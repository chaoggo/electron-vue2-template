<script>
import TheWelcome from '@/components/TheWelcome.vue';
export default {
  components: {
    TheWelcome
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$store.state);
  }
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
