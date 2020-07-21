<template>
 <div class="dashboard">
   <h1 class="subheading grey--text">Dashboard</h1> 
   
<v-container class="my-5">

   <v-layout row class="mb-3">
     <v-tooltip top>
       <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
        <v-icon left small>games</v-icon>
        <span class="caption text-lowercase">By fight title</span>
         </v-btn>
       </template>
      <span>Sort fights by fight title</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn small text color="grey" @click="sortBy('fighter')" v-on="on">
        <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">By fighter name</span>
        </v-btn>
      </template>
      <span>Sort fights by fighter's name</span>
    </v-tooltip>
   </v-layout>   

<v-card flat class="pa-3" v-for="fight in fights" :key="fight.title"> 
  <v-layout row wrap :class="`pa-3 fight ${fight.status}`">
     <v-flex xs12 md6>
       <div class="caption grey--text">Fight title</div>
       <div>{{ fight.title }}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Fighter</div>
       <div>{{ fight.fighter}}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Fight Date</div>
       <div>{{ fight.date}}</div>
     </v-flex>
     <v-flex xs2 sm4 md2>
       <div id="v-chip">
       <v-chip small :class="`${fight.status} white--text caption my-2`">{{ fight.status }}</v-chip>
       </div>
     </v-flex>
  </v-layout>
</v-card>
<v-divider></v-divider>

  </v-container>

   </div>
</template>

<script>
import db from '@/fb'

export default {
  data(){
    return {
      fights: [
        { title: 'Death race', fighter: 'Zwichainz vs. Kamazuki', date: '13/09/2019', status: 'ongoing', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
        { title: 'Fight to Death', fighter: 'Joker vs. SmokeLord', date: '16/09/2019', status: 'postponed', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
        { title: 'Road Dash', fighter: 'MadMax vs. Fury', date: '20/09/2019', status: 'completed', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
        { title: 'Spirit Battle', fighter: 'Wizard Ox vs. Wizard Ash', date: '23/09/2019', status: 'overdue', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.fights.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('fights').onSnapshot()
  }
}
</script>

<style>
.fight {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.fight.ongoing {
  border-left: 4px solid #04b2c9;
}
.fight.completed {
  border-left: 4px solid green;
}
.fight.postponed {
  border-left: 4px solid orange;
}
.fight.overdue {
  border-left: 4px solid tomato;
}
#v-chip .ongoing {
  background: #04b2c9;
}
#v-chip .completed {
  background: green;
}
#v-chip .postponed {
  background: orange;
}
#v-chip .overdue {
  background: tomato;
}
</style>