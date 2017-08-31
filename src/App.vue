<template>
  <div id="app" :class="{ sidenavOpen: isOpen }">
    <div class="container nav-container">
      <div class="row">
        <div class="col-md-11">
          <nav class="navbar navbar-light bg-faded">
            <a class="navbar-brand" href="#">
              <img src="./assets/logoT.png" alt="laTaberna">
            </a>
          </nav>
        </div>
        <div class="col-md-1">
          <button class="hamburger hamburger--squeeze " type="button" :class="{ isActive: isActive }" @click="isOpen = !isOpen; isActive = !isActive">
            <span class="hamburger-box">
              <a><span class="hamburger-inner"></span></a>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="sidenav">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <a href="#" @click="isOpen = !isOpen; isActive = !isActive">
            <span>eventos</span>
          </a>
        </div>
        <div class="col-md-4 col-sm-6">
          <a href="#" @click="isOpen = !isOpen; isActive = !isActive">
            <span>tabersemana</span>
          </a>
        </div>
        <div class="col-md-4 col-sm-6">
          <a href="#" @click="isOpen = !isOpen; isActive = !isActive">
            <span>menú<br>ejecutivo</span>
          </a>
        </div>
      </div>
      <div class="clear-15"></div>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <a href="#" @click="isOpen = !isOpen; isActive = !isActive">
            <span>nuestra<br>historia</span>
          </a>
        </div>
        <div class="col-md-4 col-sm-6">
          <a href="#" @click="isOpen = !isOpen; isActive = !isActive">
            <span>menú</span>
          </a>
        </div>
        <div class="col-md-4 col-sm-6">
          <a href="#" @click="isOpen = !isOpen; isActive = !isActive">
            <span>contacto</span>
          </a>
        </div>
      </div>
      <div class="clear-15"></div>
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <a href="#" @click="isOpen = !isOpen; isActive = !isActive">
            <span>bolsa de trabajo</span>
          </a>
        </div>
      </div>
    </div>
    <div class="overlay-sidenav" @click="isOpen = !isOpen; isActive = !isActive"></div>
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
      isOpen: false,
      isActive: false,
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

.nav-container{
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  padding: 10px 20px;
  z-index: 1000;
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

.hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
  background-color: #fff;
}

body.sidenavOpen {
  overflow-y: auto;
}

body.sidenavOpen .sidenav {
  transform: translateX(0);
}

body.sidenavOpen .nav-menu button {
  transform: translateX(-480px);
  transition: all 0.5s ease-in-out;
}

body.sidenavOpen .overlay-sidenav {
  display: block;
  opacity: 0.5;
}

.sidenav {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #155b73;
  height: 100vh;
  width: 504px;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
  padding: 40px 40px;
}

.sidenav a {
  color: #fff;
  font-size: 15px;
  position: relative;
  display: block;
  font-weight: 500;
  line-height: 15px;
  height: 141px;
  width: 141px;
  text-align: center;
  background-color: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.05);
}

.sidenav a:hover {
  background-color: #fabc54;
  border-color: #fff;
}

.sidenav a:hover span {
  color: #155b73;
}

.sidenav a span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 100%;
}

.sidenav .row .col-md-4 {
  min-height: 141px;
  padding: 0 10px;
  position: relative;
}

.sidenav .row .col-md-12 {
  position: relative;
  padding: 0 10px;
  min-height: 141px;
}

.sidenav .row .col-md-12 a {
  width: 100%;
  font-size: 21px;
}

.overlay-sidenav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 998;
  display: none;
  background: #155b73;
  opacity: 0;
  transition: transform 0.5 ease-in-out;
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

@media only screen and (max-width: 768px) {
  body.sidenavOpen .nav-menu button {
    transform: translateX(0);
  }
}

@media only screen and (max-width: 768px) {
  .sidenav {
    width: 100%;
    padding-top: 100px;
  }
}

@media only screen and (max-width: 768px) {
  .sidenav a {
    width: 100%;
    height: 112px;
    font-size: 12px;
  }
}

@media only screen and (max-width: 768px) {
  .sidenav .row .col-md-12 {
    padding: 0 2px;
  }
}

@media only screen and (max-width: 768px) {
  .sidenav .row .col-sm-6 {
    padding: 0 2px;
    height: 112px;
    width: 32%;
    min-height: 112px;
    display: inline-block;
  }
}
</style>
