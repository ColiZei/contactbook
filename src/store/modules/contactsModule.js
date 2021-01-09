export default {
  namespaced: true,
  state() {
    return {
      contacts: []
    };
  },
  mutations: {
    setContacts(state, payload) {
      state.contacts = payload;
    }
  },
  actions: {
    loadContacts(context, payload) {
      const allContacts = [
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
      ];

      let contacts = [];
      if (payload > 0) {
        contacts = allContacts.filter(contact => contact.id == payload);
      } else {
        contacts = allContacts;
      }

      context.commit('setContacts', contacts);
    }
  },
  getters: {
    getContactForDetail(state) {
      return state.contacts;
    },
    getContacts(state) {
      const allContacts = {};
      const favoriteContacts = state.contacts.filter(
        contact => contact.favorite
      );
      if (favoriteContacts.length > 0) {
        allContacts.favorites = {
          title: 'Favorite Contacts',
          data: favoriteContacts
        };
      }

      const normalContacts = state.contacts.filter(
        contact => !contact.favorite
      );
      if (normalContacts.length > 0) {
        allContacts.normal = {
          title: 'Contacts',
          data: normalContacts
        };
      }
      return allContacts;
    },
    gotContacts(state) {
      return state.contacts;
    }
  }
};
