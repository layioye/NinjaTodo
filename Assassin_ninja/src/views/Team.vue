<template>
 <div class="team">
   <h1 class="subheading grey--text">Team</h1>
  <v-container class="my-5">
    <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="fighter in team" :key="fighter.name">
        <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                    <img :src="fighter.avatar">
                </v-avatar>
            </v-responsive>
            <v-card-text>
                <div class="subheading">{{ fighter.name }}</div>
                <div class="grey-text">{{ fighter.role }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="grey">
                    <v-icon small left>message</v-icon>
                    <span>message</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
    </v-layout>
  </v-container>

   </div>
</template>

<script>


export default {
    data() {
      return {
          team: [
              {name: 'Zwichainz', skill: 'chainsaw', avatar: '/avatar-3.png' },
              {name: 'Kamazuki', skill: 'Tai-chi', avatar: '/avatar-2.png' },
              {name: 'Joker', skill: 'Fire finger', avatar: '/avatar-1.png' },
              {name: 'SmokeLord', skill: 'Dark smoke', avatar: '/avatar-4.png' },
              {name: 'Fury', skill: 'Rage attack', avatar: '/avatar-5.png' },
              {name: 'MadMax', skill: 'Iron fist attack', avatar: '/avatar-4.png' },
              {name: 'Wizard Ox', skill: 'Manipulation', avatar: '/avatar-2.png' },
              {name: 'Wizard Ash', skill: 'Air bending attack', avatar: '/avatar-3.png' },
          ]
      }
    }
}
</script>
