<template>
  <div class="about">
    <h2>about</h2>
    <h2>{{info.age}}</h2>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
 export default {
   name: 'About',
   computed: {
     info () {
       return this.$store.state.user.info
     }
   }
 }
</script>