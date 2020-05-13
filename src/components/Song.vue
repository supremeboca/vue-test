<template>
  <div id="song"><h3>{{song.title}}</h3>
  <button v-on:click="showInput = ! showInput">update</button>
    <div v-if="showInput">
       <input type="text" v-model="song.nalbum" name="nalbum">
      <input type="text" v-model="song.title">
      <input type="text" v-model="song.singer">
        <button v-on:click="updateSong(song)">save</button>
  <!-- on l'envoie a PlaylistsList pour qu'il fasse l'update pour qu'il puisse se mettre a jours -->
    </div>
    <button v-on:click="deleteSong(song)">delete</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name:'Song',
    props:['song'],
    data(){
        return{
            showInput: false
        }
    },
    methods: {
        updateSong(song){
            this.$emit('el_update',song)
            this.showInput = false; 
            // permet de recacher le boutton 
        },
        deleteSong(songid){
            this.$emit('el_delete',songid);


            // on envoit un event pour que playlistlist supp la playlist
        },

    }

}
</script>