<template lang="pug">
div.video-participant
  video.fit(loop :src="video.src")
  q-avatar(:class="avatarClassAudio" @click="clickAvatarAudio" color="white" :icon="avatarIconAudio" size="sm" :text-color="avatarTextColorAudio")
  q-avatar(:class="avatarClassIdent"                           color="white"                         size="sm" :text-color="avatarTextColorIdent") {{ avatarContentIdent }}
    q-tooltip {{ tooltipContentIdent }}
  q-avatar(:class="avatarClassLevel"                           color="white" :icon="avatarIconLevel" size="sm" :text-color="avatarTextColorLevel")
  q-avatar(:class="avatarClassVideo" @click="clickAvatarVideo" color="white" :icon="avatarIconVideo" size="sm" :text-color="avatarTextColorVideo")
</template>

<script>
export default {
  props: {
    video: {
      required: true,
      type: Array
    }
  },
  computed: {
    avatarClassAudio() {
      return this.video.index % 2 ? 'cursor-pointer' : ''
    },
    avatarClassLevel() {
      return ''
    },
    avatarClassIdent() {
      return ''
    },
    avatarClassVideo() {
      return this.video.index % 2 ? 'cursor-pointer' : ''
    },
    avatarContentIdent() {
      return `U${this.video.index + 1}`
    },
    avatarIconAudio() {
      return this.video.index % 2 ? 'mic' : 'mic_off'
    },
    avatarIconLevel() {
      return this.video.index % 2 ? 'network_wifi_3_bar' : 'network_wifi_2_bar'
    },
    avatarIconVideo() {
      return this.video.index % 2 ? 'photo_camera' : 'no_photography'
    },
    avatarTextColorAudio() {
      return this.video.index % 2 ? 'primary' : 'grey-6'
    },
    avatarTextColorIdent() {
      return 'text'
    },
    avatarTextColorLevel() {
      return 'text'
    },
    avatarTextColorVideo() {
      return this.video.index % 2 ? 'primary' : 'grey-6'
    },
    tooltipContentIdent() {
      return `U${this.video.index + 1} is a delegate`
    }
  },
  methods: {
    clickAvatarAudio() {
      console.log('clickAvatarAudio')
    },
    clickAvatarVideo() {
      console.log('clickAvatarVideo')
    }
  }
}
</script>
