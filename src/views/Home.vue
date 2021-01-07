<template>
  <div class="home">
    <ContactList />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ContactList from '../components/contact/ContactList';

export default {
  name: 'Home',
  components: {
    ContactList
  }
};
</script>
