<template>
  <div class="contacts">
    <h1 class="contacts__title">
      Contacts
    </h1>
    <div class="contacts__body">
      <div class="contacts__item">
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
            <li><a tel="+41 41 544 62 00" class="contacts__phone green">+41 41 544 62 00</a></li>
          </ul>
          <ul>
            <li>Email</li>
            <li class="green uppercase">info@gms-worldwide.com</li>
            <li>Send message</li>
            <li class="green uppercase">Viber us</li>
            <li>Send form</li>
            <li class="green uppercase">Contact us</li>
          </ul>
        </div>
      </div>
      <div class="contacts__item">
        <h2 class="contacts__sub-title">Technical support <span class="green">24/7</span></h2>
        <p class="contacts__item-text ">GMS understands that it can be hard to follow all new technologies. We regulary provide for all our clients educational training to make your operators business earn more and better though our best practices </p>
        <a tel="+41 41 544 62 00" class="contacts__phone green">+41 41 544 62 00</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contacts'
  }
</script>

<style scoped lang="scss">
  .contacts {
    &__body {
      display: flex;
    }
    &__item {
      width: 50%;
      text-align: left;
    }
    &__title {
      font-size: 50px;
      font-weight: 400;
      text-align: left;
    }
    &__sub-title {
      font-weight: 400;
    }

    &__list {
      display: flex;

      ul {
        padding: 0;
        list-style-type: none;
        margin-right: 30px;
        width: 50%;
      }
      li {
        margin-bottom: 10px;
      }
    }

    &__phone {
      font-size: 26px;
      font-weight: 400;
    }
  }

  .green {
    color: #3db565;
  }

  .uppercase {
    text-transform: uppercase;
  }
</style>
