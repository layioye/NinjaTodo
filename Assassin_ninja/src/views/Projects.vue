<template>
 <div class="projects">
   <h1 class="subheading grey--text">Battles</h1> 

  <v-container class="my-5">
     <v-expansion-panels v-for="fight in myFights" :key="fight.title">
    <v-expansion-panel>
      <v-expansion-panel-header>{{fight.title}} <br> <br> {{fight.date}} </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{fight.content}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  </v-container>

   </div>
</template>

<script>


export default {
  data() {
    return {
      fights: [
        { title: 'Death race', fighter: 'Zwichainz vs. Kamazuki', date: '13/09/2019', status: 'ongoing', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
        { title: 'Fight to Death', fighter: 'Joker vs. SmokeLord', date: '16/09/2019', status: 'postponed', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
        { title: 'Road Dash', fighter: 'MadMax vs. Fury', date: '20/09/2019', status: 'completed', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
        { title: 'Spirit Battle', fighter: 'Wizard Ox vs. Wizard Ash', date: '23/09/2019', status: 'overdue', content: 'This is a fight to determine the best in the league. Each fighter fights to see to the next day. Remember, there is no rule to the game!'},
        { title: 'Lord of the Jungle', fighter: 'Joker vs. SmokeLord', date: '05/09/2019', status: 'completed', content: 'This is a fight to determine the Lord of the Jungle between Joker the Legend and the SmokeLord. Remember, there is no rule in the jungle. May the best fighter wins'},
      ]
    }
  },
  computed: {
    myFights(){
      return this.fights.filter(fight => {
        return fight.fighter === 'Joker vs. SmokeLord'
      })
    }
  }
}
</script>
