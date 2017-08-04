<template>
<div class="footer">
  <footer>
    <img src="../../assets/footer.png" alt="">
    <div class="text-footer">
      <div class="copy">
        &copy; {{ getYear() }} |
        <h1> &nbsp; La Taberna de los Amigos</h1>
      </div>
      <div class="links-footer">
        <a href="#">Política de Privacidad</a> | &nbsp;<a href="#">Política de Cancelaciones</a>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'footerGeneral',
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  position: absolute;
  /*bottom: 0;*/
  width: 100%;
  z-index: 10;
}

.footer footer {
  width: 100%;
}

.footer footer img {
  width: 100%;
}

.footer footer .text-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #fff;
  padding: 28px 0;
  font-weight: 300;
}

.footer footer .text-footer h1 {
  font-size: 15px;
  color: #fff;
  display: inline-block;
  margin: 0;
  font-weight: 300;
}

.footer footer .text-footer a {
  color: #fff;
}

@media only screen and (max-width: 768px) {
  .footer {
    background-color: #155b73;
  }
  .footer footer .text-footer {
    margin-top: 50px;
  }
}
</style>
