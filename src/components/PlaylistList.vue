<template>
  <div id="Playlists">
    <h1>Mes Playlists</h1>
    <input type="text" v-model="playlist.name">
    <button v-on:click="postPlaylist">sauver</button>
  <li v-for = "(playlist) in Playlists" :key="playlist.playid" >
      <Playlist v-bind:playlist="playlist" @el_update="update" @el_delete="deletePlaylist" @el_voir="voirSong">
      </Playlist>
       <router-link :to="{name: 'SongList', params: {playlist: playlist}}">see</router-link>
      </li>
      <!-- <Songs></Songs> -->
  </div>
 <!-- V-bind sert a lier au props se trouvant dans Playlist.vue -->
 <!-- on peut faire un v bind a la place du @update mais c'est plus rapide -->
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import Playlist from './Playlist.vue'
// import Songs from './Songlist.vue'
export default {
    name:"Playlists",
    components:{Playlist},
    // components:{Songs},
    data(){
        return{
            playlist:{
                name:"none",
                playid:0,
                userid:1
            },
            Playlists:[],
            url:"http://localhost:8003/api/playlist/"
        }
    },
    methods: {
        get_playlistList(){
            axios.get(this.url)
            .then( (Response) => { this.Playlists = Response.data.playlists;
            console.log(this.Playlists)
            })
            .catch( (error) => {
                console.log(error);
            })
        },
        postPlaylist(){
            axios.post(this.url, this.playlist)
            .then((Response)=> {this.Playlists = Response.data.playlists;
                console.log(Playlists);
                this.get_playlistList();
            })
            .catch( (error) => {
                console.log(error);
            })
        },
        update(playlist){
            axios.put(this.url + playlist.playid, playlist)
            .then((Response)=> {this.Playlists = Response.data.playlists;
                console.log(Playlists);
                this.get_playlistList();}
            )
            .catch( (error) => {
                console.log(error);
            })
        },
        deletePlaylist(playlist){
            axios.delete(this.url + playlist.playid, playlist)
            .then((Response)=> {this.Playlists = Response.data.playlists;
                console.log(Playlists);
                this.get_playlistList();}
            )
            .catch( (error) => {
                console.log(error);
            })
            
            },
            voirSong(playlist){
                console.log(playlist)
            // axios.delete(this.url + playlist.playid, playlist)
            // .then((Response)=> {this.Playlists = Response.data.playlists;
            //     console.log(Playlists);
            //     this.get_playlistList();}
            // )
            // .catch( (error) => {
            //     console.log(error);
            // })
            
            }

    },
    mounted(){
        this.get_playlistList();
    }

}
</script>

<style>

</style>