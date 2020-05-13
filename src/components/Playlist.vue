<template>
  <div id="playlist"><h3>{{playlist.name}}</h3>
  <button v-on:click="showInput = ! showInput">update</button>
    <div v-if="showInput">
        <input type="text" v-model="playlist.name">
        <button v-on:click="updatePlaylist(playlist)">save</button>
  <!-- on l'envoie a PlaylistsList pour qu'il fasse l'update pour qu'il puisse se mettre a jours -->
    </div>
    <button v-on:click="deletePlaylist(playlist)">delete</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name:'Playlist',
    props:['playlist'],
    data(){
        return{
            showInput: false
        }
    },
    methods: {
        updatePlaylist(playlist){
            this.$emit('el_update',playlist)
            this.showInput = false; 
            // permet de recacher le boutton 
        },
        deletePlaylist(playid){
            this.$emit('el_delete',playid);


            // on envoit un event pour que playlistlist supp la playlist
        },
 
    }

}
</script>
