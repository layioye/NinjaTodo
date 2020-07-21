<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
        <v-btn text class="success" v-on="on">Add new fight </v-btn>
        </template>

    <v-card>
        <v-card-title class="headline grey lighten-2" primary-title >
            <h2>Add a New Fight</h2>
        </v-card-title>

        <v-card-text> 
        <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Fight Details" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
    
     <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width min-width="290px">
     <template v-slot:activator="{ on }"><v-text-field v-model="date" label="Picker without buttons" prepend-icon="event" readonly v-on="on">
     </v-text-field>
     </template>
     <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
     </v-menu>

     <v-spacer></v-spacer>

     <v-btn text @click="submit()" class="success mx-0 mt-3" :loading="loading">Add Fight</v-btn>
     </v-form>
     </v-card-text>

     <v-divider></v-divider>

     <v-card-actions>
     <div class="flex-grow-1"></div>
     <v-btn color="primary" text @click="dialog = false">
     <v-icon>clear</v-icon>
     <span>Close</span>
     </v-btn>
     </v-card-actions>
    </v-card>   
    </v-dialog>
</template>

<script>
import db from '@/fb'
export default {
    data (){
        return {
            dialog:false,
            title: '',
            content: '',
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            inputRules: [
                v => v.length >= 3 || 'minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()){
                this.loading = true;
                const fight = {
                    title: this.title,
                    content: this.content,
                    date: format(this.date, 'Do MMM YYYY'),
                    fighter: 'Joker',
                    status: 'ongoing'
                }

                db.collection('projects').add(fight).then(() =>{
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('fightAdded')
                })
            }
        }
    },
    computed: {
        formattedDate(){
            return this.date ? format(this.date, 'Do MMM YYYY') : ''
        }
    } 
}
</script>