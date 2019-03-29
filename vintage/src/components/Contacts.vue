<template>
  <div class="contacts">
    <h1 class="contacts__title">
      Contacts
    </h1>
    <div class="row">
      <div class="col-md-6 text-left">
        <h2 class="contacts__sub-title">
          <span class="green">GSM</span>
          Headquarters
        </h2>
        <div class="contacts__list">
          <ul>
            <li>Global Message Services Ukraine LLC</li>
            <li>Bundesstrasse 5 | 3rd Floor</li>
            <li>6300 Zug</li>
            <li>Switzerland</li>
            <li><a href="tel:+41415446200" class="contacts__phone green">+41 41 544 62 00</a></li>
          </ul>
          <ul class="d-none d-lg-block">
            <li>Email</li>
            <li ><a class="green uppercase" href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a></li>
            <li>Send message</li>
            <li><a class="green uppercase" href="viber://chat?number=+380970658239">Viber us</a></li>
            <li>Send form</li>
            <li class="green uppercase cursor-pointer" @click="scrollToForm">Contact us</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 text-left">
        <h2 class="contacts__sub-title">Technical support <span class="green">24/7</span></h2>
        <p class="contacts-text ">GMS understands that it can be hard to follow all new technologies. We regulary provide for all our clients educational training to make your operators business earn more and better though our best practices </p>
        <a href="tel:+41415446200" class="contacts__phone green">+41 41 544 62 00</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contacts',
    methods: {
      scrollToForm() {
        window.scrollTo(0,document.body.scrollHeight);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/style/variables.scss";
  @import "@/assets/style/typography.scss";
  .contacts {
    padding: 50px;
    &__title {
      font-size: 50px;
      font-weight: 400;
      text-align: left;
      margin-bottom: 40px;
    }
    &__sub-title {
      font-weight: 400;
      margin-bottom: 20px;
    }

    &__list {
      display: flex;

      ul {
        padding: 0;
        list-style-type: none;
        margin: 0;
        margin-right: 30px;
        width: 100%;
      }
      li {
        margin-bottom: 10px;
      }
    }

    &__phone {
      font-size: 26px;
      font-weight: 400;
      display: block;
      padding-top: 20px;
    }
  }


  @media only screen and (max-width : 576px) {
    .contacts {
      padding: 20px;
    }
  }
</style>
