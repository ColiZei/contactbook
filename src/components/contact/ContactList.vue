<template>
  <div>
    <h1>Contactbook</h1>
    <v-divider></v-divider>
    <v-card v-if="isLoading" class="mx-auto my-12">
      <v-skeleton-loader
        type="card-heading, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar"
      ></v-skeleton-loader>
    </v-card>
    <v-card v-else-if="!isLoading && gotContacts" class="mx-auto my-12">
      <v-list
        v-for="contactGroups in contacts"
        :key="contactGroups.title"
        subheader
      >
        <v-subheader>{{ contactGroups.title }}</v-subheader>

        <v-list-item
          v-for="contact in contactGroups.data"
          :key="contact.name"
          @click="goToContact(contact.id)"
          link
        >
          <v-list-item-avatar>
            <v-img
              :alt="`${contact.name} avatar`"
              :src="contact.avatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ contact.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ contact.nickname }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-title>{{ contact.phone }}</v-list-item-title>
            <v-list-item-subtitle>{{ contact.email }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn icon @click.stop="contact.favorite = !contact.favorite">
              <v-icon>
                {{ contact.favorite ? 'mdi-star' : 'mdi-star-outline' }}
              </v-icon>
            </v-btn>
            <v-btn :to="getContactLink(contact.id)" icon>
              <v-icon>
                mdi-account-edit
              </v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card v-else class="mx-auto my-12">
      <v-list subheader>
        <v-subheader>No Contacts found</v-subheader>
        <v-list-item>
          <v-btn to="/new">
            Add new Contact!
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
    error: null
    // gotContacts: false,
    // gotFavoritesContacts: false,
    // gotNormalContacts: false,

    // contacts: {}
    // allContacts:
  }),
  created() {
    this.loadContacts();
  },
  computed: {
    contacts() {
      // console.log(this.$store.getters['contacts/getContacts']);
      return this.$store.getters['contacts/getContacts'];
    },
    gotContacts() {
      // return true;
      return this.$store.getters['contacts/gotContacts'];
    }
  },
  methods: {
    loadContacts() {
      this.isLoading = true;
      try {
        this.$store.dispatch('contacts/loadContacts');
      } catch (error) {
        this.error = error.message || 'An error occurred!';
      }

      this.isLoading = false;
    },
    getContactLink(id) {
      return `/contact/${id}`;
    },
    goToContact(id) {
      const goTo = this.getContactLink(id);
      this.$router.push(goTo);
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>
