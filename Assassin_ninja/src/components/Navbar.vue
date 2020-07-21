<template>
   <nav>
       <v-snackbar v-model="snack" :timeout="3000" top color="primary">
           <span>WELCOME to PELZ ENERGY COST CALCULATOR APP.</span>
           <!-- <v-btn text color="white">Close</v-btn> -->
       </v-snackbar>

       <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
           <span>Booom!!! Your fight has been added.</span>
           <v-btn text color="white" @click="snackbar = false">Close</v-btn>
       </v-snackbar>

       <v-app-bar clipped app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title class="text-uppercase grey--text">
         <span>Energy Cost calculator</span>
         </v-toolbar-title>
         <v-spacer></v-spacer>

    <!-- dropdown menu -->

     <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text color="grey" v-on="on">
            <v-icon left>expand_more</v-icon> 
          <span>MENU</span>
        </v-btn>
      </template> 
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
       </v-app-bar>

<br>
        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1">
                      Joker The Legend
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @fightAdded="snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.text" router :to ="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{link.icon}}d</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title dark class="white--text">
                            {{link.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </nav> 
</template>


<script>
import Popup from './Popup'
export default {
   components: { Popup },
  data() {
      return {
          drawer: false,
          links: [
              { icon: 'dashboard', text: 'Dashboard', route: '/' },
              { icon: 'folder', text: 'Available  Fights', route: '/projects' },
              { icon: 'person', text: 'Team', route: '/team' },
          ],
          snackbar: false,
          snack: true
      }
  }  
}
</script>