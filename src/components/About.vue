<template>
  <div id="about">
    <img class="decoration pele hidden-sm-down" src="../assets/pele.png" alt="peleLaTaberna">
    <img class="decoration bat hidden-sm-down" src="../assets/bat.png" alt="batLaTaberna">
    <div class="container">
      <div class="row">
        <img src="../assets/tabertubo.png" alt="chicaTaberna" class="tube hidden-sm-down">
        <div class="col-md-6 col-lg-6"></div>
        <div class="col-md-6 col-lg-6">
          <div class="clear-30"></div>
          <div class="about-title">
            más de 18 años entre <strong>amigos</strong>
          </div>
          <div class="video">
            <iframe width="546" height="305" src="https://www.youtube.com/embed/OCqSTRKGIPc" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="about-desc">
            Si de ver deporte en vivo se trata, la taberna es el mejor lugar para disfrutar en grupo, una variedad de eventos deportivos relevantes.
          </div>
          <div class="history-link">
            <a href="#">nuestra historia</a>
          </div>
          <div class="streaming text-center hidden-sm-down">
            <div class="row">
              <div class="col-md-3" v-for="logo in logosUp">
                <img :src="getImgUrl(logo.company)" :alt="getAlt(logo.alt)" width="90">
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 offset-md-1">
                <img src="../assets/streaming/5TB.png" width="70" alt="Steaming_La_Taberna_5">
              </div>
              <div class="col-md-2" v-for="logo in LogosDown">
                <img :src="getImgUrl(logo.company)" :alt="getAlt(logo.alt)" width="70">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Logos {
  constructor(company, alt) {
    this.company = company;
    this.alt = alt;
  }
}

export default {
  name: 'about',
  data() {
    return {
      logosUp: [
        new Logos('9TB', 'Steaming_La_Taberna_9'),
        new Logos('8TB', 'Steaming_La_Taberna_8'),
        new Logos('7TB', 'Steaming_La_Taberna_7'),
        new Logos('6TB', 'Steaming_La_Taberna_6'),
      ],
      LogosDown: [
        new Logos('4TB', 'Steaming_La_Taberna_4'),
        new Logos('3TB', 'Steaming_La_Taberna_3'),
        new Logos('2TB', 'Steaming_La_Taberna_2'),
        new Logos('1TB', 'Steaming_La_Taberna_1'),
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      const images = require.context('../assets/streaming/', false, /\.png$/);
      return images(`./${img}.png`);
    },
    getAlt(alt) {
      return alt;
    },
  },
};
</script>

<style scoped>
#about {
  background: url('../assets/fondo.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 0;
  position: relative;
}

#about .history-link a {
  background-color: #fabc54;
  color: #fff;
  font-size: 37px;
  font-weight: 700;
  line-height: 31px;
  padding: 10px 60px;
  width: 500px;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  margin-top: 10px;
  text-decoration: none !important;
  outline: none !important;
  text-transform: uppercase;
  text-align: center;
}

#about .history-link a:hover {
  text-decoration: none;
  cursor: pointer;
}

#about .video {
  position: relative;
}

#about .video:before {
  position: absolute;
  top: -3px;
  left: -5px;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  content: "";
  background-color: #fabc54;
  transform: rotate(-1deg);
  z-index: 10;
}

#about .video iframe {
  position: relative;
  z-index: 11;
}

.about-title {
  font-size: 31px;
  text-transform: uppercase;
  color: #fabc54;
  margin-bottom: 0;
}

.about-title strong {
  font-weight: 700;
}

#about .about-desc {
  font-size: 16px;
  font-weight: 400;
  color: #fabc54;
  text-align: justify;
  margin: 0;
}

#about .streaming img{
  width: 100%;
  filter: brightness(1.1);
}

#about .tube {
  position: absolute;
  left: 200px;
  bottom: -42px;
  width: 24%;
  height: 117%;
}

#about .pele {
  left: 0;
  top: -40px;
}

#about .bat {
  bottom: -40px;
  left: 0;
  z-index: 10;
}

@media only screen and (max-width: 768px) {
  #about .history-link a {
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    border-radius: 3px;
    font-size: 27px;
  }
}

@media only screen and (max-width: 768px) {
  #about .video iframe {
    width: 100%;
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
  #about .about-title {
    text-align: center;
  }
}

@media only screen and (min-width: 1400px) {
  .tube {
    width: 40%;
  }
}

</style>
