<template>
  <v-footer color="primary" dark app padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        class="ma-2"
        text
      >
        {{ link.name }}
      </v-btn>
      <v-col class="primary text-center white--text" cols="12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quis
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Contactbook', to: '/' },
        { name: 'Add new contact', to: '/new' },
        { name: 'About', to: '/about' }
      ]
    };
  }
};
</script>
