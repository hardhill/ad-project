<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" absolute>
      <v-list>
        <v-list-item v-for="link in links" :key="link.title" :to="link.url" link>
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark class="primary">
      <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <router-link to="/" class="pointer" tag="span">
        Vuetify
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="link of links" :key="link.title" :to="link.url">
          <v-icon left>{{link.icon}}</v-icon>{{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <v-footer app></v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: false,
      links: [{ title: "Login", icon: "mdi-lock", url: "/login" },
      { title: "Registration", icon: "mdi-face", url: "/registration" },
      { title: "Orders", icon: "mdi-bookmark", url: "/orders" },
      { title: "New ad", icon: "mdi-note", url: "/new" },
      { title: "My ads", icon: "mdi-view-list", url: "/list" }]
    };
  }
}
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
</style>


