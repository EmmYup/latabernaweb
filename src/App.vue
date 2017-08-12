<template>
  <div id="app">
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">
        <img src="./assets/logoT.png" alt="laTaberna">
      </a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {

    };
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  font-weight: 100;
  src: url("../static/Montserrat-Thin.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 200;
  src: url("../static/Montserrat-ExtraLight.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 300;
  src: url("../static/Montserrat-Light.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  src: url("../static/Montserrat-Regular.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  src: url("../static/Montserrat-Medium.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 600;
  src: url("../static/Montserrat-SemiBold.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  src: url("../static/Montserrat-Bold.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 800;
  src: url("../static/Montserrat-ExtraBold.otf") format("opentype");
}
@font-face {
  font-family: "Montserrat";
  font-weight: 900;
  src: url("../static/Montserrat-Black.otf") format("opentype");
}

body {
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
}

.navbar-light {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  padding: 10px 20px;
  z-index: 1000;
}
.navbar-brand img {
  width: 160px;
}

.clear-20 {
    height: 20px;
    display: block;
}

.clear-30 {
  height: 30px;
  display: block;
}

.clear-15 {
  height: 15px;
  display: block;
}

.clear-60 {
  height: 60px;
  display: block;
}

.font-19 {
  font-size: 19px;
}

.font-15 {
  font-size: 15px;
}

.decoration {
position: absolute;
z-index: 100;
}

@media only screen and (max-width: 768px) {
  .nav-menu {
    z-index: 1001;
  }
}

</style>
