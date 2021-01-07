<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-btn to="/" class="text-normal" text>
        Coli's Contactbook
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/new" text>
      <span class="mr-2">Add new Contact</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app-bar>
</template>
