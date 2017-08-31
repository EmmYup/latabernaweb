<template>
<div id="dishes" class="menu-section" :class="{ active: active }">
  <div class="menu-header">
    <img src="../assets/patriots.png" alt="patriots la taberna" class="decoration patriots">
    <div class="menu-text" @click="active = !active">
      {{ menuText }} <strong>{{ menuTextStrong }}</strong>
    </div>
  </div>
  <div class="menu-body">
    <div class="container">
      <div class="row">
      <div class="clear-30"></div>
        <div class="col-md-6 first">
          <div v-for="dish in platillosFirst">
            <div class="platillo" v-bind:class="{ hot: dish.isActive }">
              <div class="title-platillo">{{ dish.title }}</div>
              <p>{{ dish.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 second">
          <div v-for="dish in platillosSecond">
            <div class="platillo" :class="{ hot: dish.isActive }">
              <div class="title-platillo">{{ dish.title }}</div>
              <p>{{ dish.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chilometro">
        <div class="chilometro-barra">
          <div v-for="chile in chiles">
            <div class="hot" :class="chile.level">
              <span class="barra"></span>
              <span class="barra-text">{{ chile.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
class Dish {
  constructor(title, description, isActive) {
    this.title = title;
    this.description = description;
    this.isActive = isActive;
  }
}
class Chile {
  constructor(description, level) {
    this.description = description;
    this.level = level;
  }
}

export default {
  name: 'dishes',
  data() {
    return {
      active: false,
      menuText: 'Conoce Nuestro',
      menuTextStrong: 'Menú',
      platillosFirst: [
        new Dish('ALITAS', 'Las famosas, servidas con bastones de apio y zanahoria, acompañadas con aderezo blue cheese.', true),
        new Dish('BONELESS WINGS', 'Pechuga de pollo al tempura, servidas con bastones de apio y zanahoria.', true),
        new Dish('PASTA BUFFALO', 'Deliciosa combinacion de tu sazón preferido con pechuga de pollo parrillada y ejotes.', true),
        new Dish('PASTA ALFREDO', 'Con pechuga de pollo al grill, champiñones, pimiento rojo y cebolla, bañada en nuestra deliciosa salsa Alfredo.', false),
        new Dish('PIZZA MEXICANA', 'La nacionalizamos: combinación de frijoles, salsa4 chiles, jalapeño, chorizo, cebolla blanca, pimiento verde y rojo.', false),
        new Dish('TABER PIZZA', 'Para los amantes de la carne, arrachera de cerdo, chorizo y tocino.', false),
      ],
      platillosSecond: [
        new Dish('BUFFALO CHICKEN PIZZA', 'La pizza con tu sazón favorito, pollo buffalo con aderezo blue cheese.', true),
        new Dish('TABERNA BURGER', 'La hamburguesa mas popular con queso gouda y tocino.', true),
        new Dish('MOLCAJETE AZTECA', 'Arrachera, cerdo, pollo y chorizo en una sabrosa salsa de cuatro chiles con nopal asado y cebollas cambray, guarnición de frijoles y guacamole, estupendo para compartir.', false),
        new Dish('ENCHILADAS SUIZAS', 'Las tadicionales de México por que en Suiza  ¡no hay enchiladas!', false),
        new Dish('CHULETAS AL GRILL', 'Servidas con nopal y cebollas cambray asadas, acompañadas con guacamoles.', false),
        new Dish('TABERNAZO', 'Alimentos + Bebidas, Elije entre  5 tipos de alimentos y  la opcion de una botella o 18 cervezas frias.', false),
      ],
      chiles: [
        new Chile('Naturales, Ajo, BBQ, Miel Mostaza', 'level1'),
        new Chile('Tamarindo', 'level2'),
        new Chile('Chipotle', 'level3'),
        new Chile('Buffalo Cayena', 'level4'),
        new Chile('Buffalo Cayena', 'level5'),
        new Chile('Mango Habanero', 'level6'),
        new Chile('A la Diabla', 'level7'),
      ],
    };
  },
};
</script>

<style scoped>
.menu-section.active {
  background-image: url("../assets/fondoazul.jpg");
  transition: all 0.5s;
}

.decoration.patriots {
  right: 0;
  top: -20px;
}

.menu-section.active .menu-body {
  height: 800px;
  overflow: hidden;
  transition: all 0.5 ease-in-out;
}

.menu-section.active .menu-header {
  background-image: none;
}

.menu-section .menu-body {
  height: 0;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

.menu-section .menu-body .platillo {
  color: #fff;
  margin-bottom: 50px;
  text-align: justify;
  position: relative;
}

.menu-section .menu-body .platillo.hot .title-platillo {
  position: relative;
}

.menu-section .menu-body .platillo.hot .title-platillo:before {
  content: "";
  width: 45px;
  height: 42px;
  display: block;
  position: absolute;
  background-image: url("../assets/picante-blanco.png");
  background-repeat: no-repeat;
  background-size: 80%;
  top: -5px;
  left: -40px;
}

.menu-section .menu-body .platillo .title-platillo {
  font-size: 26px;
  font-weight: 500;
  line-height: 21px;
}
.menu-section .menu-body .platillo p {
  font-size: 19px;
  font-weight: 300;
  line-height: 19px;
}

.menu-section .menu-body .first .platillo {
  padding-left: 148px;
}

.menu-section .menu-body .second .platillo {
  padding-right: 90px;
  padding-left: 50px;
}

.menu-header {
  background-image: url("../assets/fondoazul.jpg");
  background-size: cover;
  backround-repeat: no-repeat;
  padding: 95px 0;
  position: relative;
  transition: all 0.5;
}

.menu-header .menu-text {
  font-size: 57px;
  font-weight: 100;
  text-align: center;
  line-height: 48px;
  color: #fff;
}

.menu-header .menu-text:hover {
  cursor: pointer;
}

.menu-header .menu-text strong {
  font-weight: 700;
}

.menu-header .menu-text strong:after {
  content: "";
  height: 0;
  width: 0;
  display: inline-block;
  border-top: 12px solid #fabc54;
  border-right: 16px solid transparent;
  border-left: 16px solid transparent;
  transform: translateY(-50%);
  left: 15px;
  position: relative;
}

.chilometro {
  display: block;
}

.chilometro .chilometro-barra {
  width: 700px;
  margin: 0 auto;
  padding-bottom: 50px;
  position: relative;
}

.chilometro .chilometro-barra:before {
  content: "";
  display: block;
  width: 55px;
  height: 50px;
  position: absolute;
  left: -55px;
  top: -20px;
  background-image: url('../assets/bajo-chile.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.chilometro .chilometro-barra:after {
  content: "";
  display: block;
  width: 55px;
  height: 50px;
  top: -20px;
  right: -55px;
  position: absolute;
  background-image: url('../assets/alto-chile.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.chilometro .hot {
  display: inline-block;
  position: relative;
  float: left;
  margin-right: 5px;
}

.chilometro .hot .barra {
  width: 94px;
  height: 6px;
  display: block;
  margin-left: 2px;
  position: relative;
}

.chilometro .hot .barra + .barra-text {
  font-size: 12px;
  font-weight: 300;
  color: #fff;
  width: 100%;
  text-align: center;
  position: relative;
  top: 10px;
  display: block;
}

.chilometro .hot .barra:hover {
  cursor: pointer;
}

.chilometro .hot .barra:hover:before,
.chilometro .hot .barra:hover:after {
  visibility: visible;
}

.chilometro .hot .barra:hover + .barra-text {
  visibility: visible;
}

.chilometro .hot:not(.level1 .barra + .barra-text,
.chilometro .hot .level6) .barra + .barra-text {
  font-size: 11px;
}

.chilometro .hot.level1 {
  display: inline-block;
  width: 94px;
}

.chilometro .hot.level1 .barra {
  background-color: #79bb43;
}

.chilometro .hot.level2 {
  display: inline-block;
  width: 94px;
}

.chilometro .hot.level2 .barra {
  background-color: #bbd132;
}

.chilometro .hot.level3 {
  display: inline-block;
  width: 94px;
}

.chilometro .hot.level3 .barra {
  background-color: #e4e119;
}

.chilometro .hot.level4 {
  display: inline-block;
  width: 94px;
}

.chilometro .hot.level4 .barra {
  background-color: #fbba13;
}

.chilometro .hot.level5 {
  display: inline-block;
  width: 94px;
}

.chilometro .hot.level5 .barra {
  background-color: #f5921e;
}

.chilometro .hot.level6 {
  display: inline-block;
  width: 94px;
}

.chilometro .hot.level6 .barra {
  background-color: #ef5c24;
}

.chilometro .hot.level7 {
  display: inline-block;
  width: 94px;
}

.chilometro .hot.level7 .barra {
  background-color: #e91f26;
}

@media only screen and (max-width: 768px) {
  .menu-section.active .menu-body {
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
  .menu-section .menu-body .first {
    padding: 0 60px;
  }
}

@media only screen and (max-width: 768px) {
  .menu-section .menu-body .first .platillo {
    padding: 0;
  }
}

@media only screen and (max-width: 768px) {
  .menu-section .menu-body .second {
    padding: 0 60px;
  }
}

@media only screen and (max-width: 768px) {
  .menu-section .menu-body .second .platillo {
    padding: 0;
  }
}

@media only screen and (max-width: 768px) {
  .chilometro {
    display: none;
  }
}
</style>
