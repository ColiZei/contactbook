<template>
  <div class="home">
    <h1>ContactList</h1>
    <ul>
      <li>
        Contact Name - Phone - email
        <v-btn to="/contact/1">ContactDetail</v-btn>
      </li>
      <li>
        Contact Name - Phone - email
        <v-btn to="/contact/2">ContactDetail</v-btn>
      </li>
      <li>
        Contact Name - Phone - email
        <v-btn to="/contact/3">ContactDetail</v-btn>
      </li>
      <li>
        Contact Name - Phone - email
        <v-btn to="/contact/4">ContactDetail</v-btn>
      </li>
      <li>
        Contact Name - Phone - email
        <v-btn to="/contact/5">ContactDetail</v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
};
</script>
