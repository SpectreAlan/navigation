<template>
  <div class="container">
    <Menu/>
    <NuxtChild/>
  </div>
</template>

<script>
import Menu from '@/components/Menu/'

export default {
  name: 'Home',
  components: {Menu},
  methods: {
    setStore() {
      this.$store.commit('user/setInfo', {name: 'jack', age: 18})
    }
  }
}
</script>

<style>
</style>
