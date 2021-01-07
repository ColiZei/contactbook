<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container fluid style="max-width: 800px">
        <router-view></router-view>
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '@/layout/TheHeader';
import TheFooter from '@/layout/TheFooter';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter
  },

  data: () => ({
    //
  })
};
</script>
