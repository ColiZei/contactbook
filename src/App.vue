<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/layout/TheHeader';

export default {
  name: 'App',

  components: {
    TheHeader
  },

  data: () => ({
    //
  })
};
</script>
