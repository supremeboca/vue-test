<template>
    <div>
       {{playlist.playid }}
       <input type="text" v-model="song.nalbum" name="nalbum">
      <input type="text" v-model="song.title">
      <input type="text" v-model="song.singer">
      <button v-on:click="postSong">sauver</button>
       <div v-for="(song) in songList" :key="song.songid">
           <!-- {{song.title}} -->
           <Song v-bind:song="song" @el_update="updateSong" @el_delete="deleteSong"></Song>
       </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import router from '../router';
import Song from'./Song'
export default {
     name: 'Songlist', 
     components:{ Song},        
     props: ["playlist"],
       data() {
    return {
        song:{
          nalbum:'',
          singer:'',
          songid:0,
          title:'',
          userid:1,},   
          songList: [],
    }
  },
created: function() {
    this.fetchItems(); 
  },
    methods: {
    fetchItems() {
      let uri = "http://localhost:8003/api/song/"+ this.playlist.playid
      axios.get(uri).then(response => {
          console.log(response.data.Song)
         this.songList = response.data.Song;

      })
      .catch( (error) => {
          console.log(error);
      });
    },
      postSong(){
        const songData = {
          playid : this.playlist.playid,
          title : this.song.title,
          nalbum: this.song.nalbum,
          singer : this.song.singer,
          songid: this.song.songid
        }
      axios.post("http://localhost:8003/api/song/", songData)
      .then((response)=> {this.songList = response.data.Song;
          console.log(response.data);
          router.push({name: 'PlaylistList'})
          
      })
      .catch( (error) => {
          console.log(error);
      })
  },
          updateSong(song){
            axios.put("http://localhost:8003/api/song/" + song.songid, song)
            .then((Response)=> {this.songList = Response.data.Song;
                console.log(response.data);
                router.push({name: 'PlaylistList'})
                }
            )
            .catch( (error) => {
                console.log(error);
            })
        },
        deleteSong(song){
            axios.delete("http://localhost:8003/api/song/"+ song.songid, song)
            .then((Response)=> {this.songList = Response.data.Song;
                console.log(Response.data);
                router.push({name: 'PlaylistList'})
                }
            )
            .catch( (error) => {
                console.log(error);
            })
            
            },
    },
    mounted(){
        this.fetchItems();

}
}
</script>


