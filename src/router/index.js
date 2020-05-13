/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import PlaylistList from '@/components/PlaylistList'
import SongList from '@/components/SongList'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlaylistList',
      component: PlaylistList
    },
    {
      path: '/songList',
      name: 'SongList',
      component: SongList,
      props: true
    },
  ]
})
/* eslint-disable */
