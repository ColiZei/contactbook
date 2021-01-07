<template>
  <div>
    <h1>Contactbook</h1>
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
    <v-card v-else>
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
    isLoading: true,
    gotContacts: false,
    gotFavoritesContacts: false,
    gotNormalContacts: false,

    contacts: {},
    allContacts: [
      {
        id: 1,
        favorite: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Jason Oner',
        nickname: 'Jason',
        phone: '+49 30 521180378 ',
        email: 'foo@example.com'
      },
      {
        id: 2,
        favorite: true,
        avatar:
          'https://images-na.ssl-images-amazon.com/images/I/514YouugSuL._AC_.jpg',
        name: 'Bruce Wayne',
        nickname: 'Batman',
        phone: '+49 30 914369684',
        email: 'foo@example.com'
      },
      {
        id: 3,
        favorite: false,
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg',
        name: 'Peter Parker',
        nickname: 'Spider-Man',
        phone: '+49 30 558519753',
        email: 'foo@example.com'
      },
      {
        id: 4,
        favorite: true,
        avatar:
          'https://images.news18.com/ibnlive/uploads/2020/06/1593508443_hugh-jackman-as-logan.jpg?impolicy=website&width=534&height=356',
        name: 'Wolverine',
        nickname: 'Wolverine',
        phone: '+49 30 577322363',
        email: 'foo@example.com'
      },
      {
        id: 5,
        favorite: false,
        avatar:
          'https://i.pinimg.com/originals/85/f7/6b/85f76b1ec1036487b2d8e85fe4731b2c.jpg',
        name: 'Steve Rogers',
        nickname: 'Captain America',
        phone: '+49 30 478010050',
        email: 'foo@example.com'
      },
      {
        id: 6,
        favorite: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Gal Gadot',
        nickname: 'Wonder Woman',
        phone: '+49 30 204171449',
        email: 'foo@example.com'
      },
      {
        id: 7,
        favorite: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'Wanda Maximoff',
        nickname: 'Scarlet Witch',
        phone: '+49 30 804839219',
        email: 'foo@example.com'
      },
      {
        id: 8,
        favorite: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'Natasha Romanoff',
        nickname: 'Black Widow',
        phone: '+49 30 546544266',
        email: 'foo@example.com'
      }
    ]
  }),
  created() {
    const favoriteContacts = this.allContacts.filter(
      contact => contact.favorite
    );
    if (favoriteContacts.length > 0) {
      this.contacts.favorites = {
        title: 'Favorite Contacts',
        data: favoriteContacts
      };
    }

    const normalContacts = this.allContacts.filter(
      contact => !contact.favorite
    );
    if (normalContacts.length > 0) {
      this.contacts.normal = {
        title: 'Contacts',
        data: normalContacts
      };
    }
    this.gotContacts = true;

    this.isLoading = false;
  },
  computed: {},
  methods: {
    getContactLink(id) {
      return `/contact/${id}`;
    },
    goToContact(id) {
      const goTo = this.getContactLink(id);
      this.$router.push(goTo);
    }
  }
};
</script>
