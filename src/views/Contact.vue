<template>
  <div>
    <h1>ContactDetail</h1>
    <v-card max-width="375" class="mx-auto my-12">
      <v-img :src="contact.avatar" height="300px" dark>
        <!-- Favorite? -->
        <v-row class="fill-height">
          <v-card-title class="white--text pl-12 pt-12">
            <div class="display-1 pl-12 pt-12">
              {{ contact.name }}
            </div>
          </v-card-title>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-phone
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.phone }}</v-list-item-title>
            <v-list-item-subtitle>Phone</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-email
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.email }}</v-list-item-title>
            <v-list-item-subtitle>E-Mail</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-btn class="ma-auto">
            Edit this contact
            <v-icon color="">
              mdi-pencil
            </v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      isLoading: true,
      error: null
    };
  },
  created() {
    this.loadContact(this.id);
  },
  methods: {
    loadContact(id) {
      this.isLoading = true;
      try {
        this.$store.dispatch('contacts/loadContacts', id);
      } catch (error) {
        this.error = error.message || 'An error occurred!';
      }

      this.isLoading = false;
    }
  },
  computed: {
    contact() {
      return this.$store.getters['contacts/getContactForDetail'][0];
    }
    // gotContacts() {
    //   // return true;
    //   return this.$store.getters['contacts/gotContacts'];
    // }
  }
};
</script>
