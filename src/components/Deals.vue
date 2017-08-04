<template>
  <div id="deals">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-5">
            <div class="deals-text">
              <span>{{ dealsTitle1 }}</span> <br>
              <span class="text1">{{ dealsTitle2 }}</span> <br>
              <span class="text2">{{ dealsTitle3 }}</span>
            </div>
          </div>
          <!-- TODO: agregar el carousel para las promociones -->
          <div class="col-md-7"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'deals',
  data() {
    return {
      dealsTitle1: 'cada dia una',
      dealsTitle2: 'promocion',
      dealsTitle3: 'diferente',
    };
  },
};
</script>

<style scoped>
#deals {
  background: url('../assets/promocion-fondo.png');
  padding: 40px 0;
}

.deals-text {
  text-transform: uppercase;
  color: #155B73;
  font-size: 50px;
  font-weight: 300;
  line-height: 40px;
}

.deals-text .text1 {
  font-weight: 700;
  font-size: 59px;
  line-height: 45px;
}

.deals-text .text2 {
  font-weight: 900;
  font-size: 65px;
  line-height: 55px;
}

@media only screen and (max-width: 768px) {
.deals-text {
    font-size: 25px;
    text-align: center;
    line-height: 25px;
  }
}

@media only screen and (max-width: 768px) {
.deals-text .text1 {
    font-size: 37px;
    line-height: 37px;
  }
}

@media only screen and (max-width: 768px) {
.deals-text .text2 {
    font-size: 41px;
    line-height: 41px;
  }
}
</style>
