<script lang="ts" setup>

import SocialIcon from './SocialIcon.vue'
</script>

<template>
  <div id="top-line">
    <img id="profile-img" alt="me" height="300" src="../assets/me.png" width="300" />
    <div id="line">
      <p>Je suis <strong class="text-highlight-1">Laurent LAPORTE</strong>,<br />
        Leader Technique Python</p>
      <div id="social">
        <SocialIcon img="linkedin.png"
                    name="LinkedIn"
                    url="https://www.linkedin.com/in/laurent-laporte-pro/" />
        <SocialIcon img="github.png"
                    name="GitHub"
                    url="https://github.com/laurent-laporte-pro/" />
        <SocialIcon img="stackoverflow.png"
                    name="StackOverflow"
                    url="https://stackoverflow.com/users/1513933/laurent-laporte" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#top-line {
  margin-top: 50px;
  width: 100%;
  height: 300px;
}

#profile-img {
  float: left;
  margin-right: 50px;
}

#line {
  float: left;
  transform: translateY(40%);
  text-align: center;
}

#top-line p {
  font-size: 42px;
  line-height: 60px;
}

#social {
  margin-top: 15px;
}

@media screen and (max-width: 905px) {
  #profile-img {
    display: none;
  }

  #line {
    transform: translateY(0%);
  }

  #top-line p {
    font-size: 32px;
    line-height: 40px;
  }
}
</style>