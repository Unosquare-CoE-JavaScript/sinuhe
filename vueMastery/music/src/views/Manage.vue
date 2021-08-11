<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <AppUpload ref="upload" :addSong="addSong"></AppUpload>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <AppCompositionItem
                v-for="(song, index) in songs"
                :key="song.docId"
                :song="song"
                :updateSong="updateSong"
                :index="index"
                :removeSong="removeSong"
                :updateUnsavedFlag="updateUnsavedFlag"
            ></AppCompositionItem>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppUpload from '@/components/Upload.vue';
import AppCompositionItem from '@/components/CompositionItem.vue';

import { songsCollection, auth } from '@/includes/firebase';

export default {
  name: 'manage',
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    };
  },
  components: { AppUpload, AppCompositionItem },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next();
    } else {
      // eslint-disable-next-line no-alert, no-restricted-globals
      const leave = confirm('You have unsaved changes. Are you sure you wanna leave');
      next(leave);
    }
  },
  methods: {
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    },
    updateSong(i, values) {
      this.songs[i].modified_name = values.modified_name;
      this.songs[i].genre = values.genre;
    },
    removeSong(index) {
      this.songs.splice(index, 1);
    },
    addSong(document) {
      const song = {
        ...document.data(),
        docId: document.id,
      };

      this.songs.push(song);
    },
  },
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get();

    snapshot.forEach(this.addSong);
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log('Manage', to, from);
  //   if (store.state.userLoggedIn) {
  //     next();
  //   } else {
  //     next({ name: 'home' });
  //   }
  // },
};
</script>
