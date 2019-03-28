<template>
  <div class="location">
    <div class="location__item col-lg-6">
      <h1 class="location__title">Our Offices</h1>
      <div class="location__container">
        <div class="location__tabs">
          <template v-for="(tab, key) in locationArray">
            <div :class="{'location__tab-item':true,
                          'green': activeKey === key}"
                          @click="activeKey=key">
              {{tab.city}}
            </div>
          </template>
        </div>
        <div class="location__info">
          <p class="location__company">{{activeElement.company}}</p>
          <p class="location__street">{{activeElement.street}}</p>
          <p class="location__post-index">{{activeElement.postIndex}}</p>
          <p class="location__country">{{activeElement.country}}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 pr-0 pl-0 position-relative">
      <div class="location__dot"></div>
      <GmapMap
        :center="mapPosition"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 550px;"
      >
        <GmapMarker
          key="index"
          :clickable="true"
          :draggable="true"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Location',
    data() {
      return {
        locationArray:{
         'kyiv': {
              city: 'Kyiv',
            company: 'Global Message Services Ukraine LLC',
            street: 'Kiyv, Stepan Bandera',
            postIndex: '03046',
            country: 'Ukraine',
            position: {
              lat: 48.174270,
              lng: 16.329620,
            }
          },
         'newyork': {
           city: 'New York',
           company: 'Global Message Services American LLC',
           street: 'New York, Stepan Bandera',
           postIndex: '04569',
           country: 'USA',
           position: {
             lat: 8.174270,
             lng: 46.329620,
           }
         },
          'barcelona': {
            city: 'Barcelona',
            company: 'Global Message Services Spain LLC',
            street: 'Barcelona, Stepan Bandera',
            postIndex: '87978',
            country: 'Spain',
            position: {
              lat: 48.174270,
              lng: 116.329620,
            }
          },
          'guangzhou': {
            city: 'Guangzhou',
            company: 'Global Message Services China LLC',
            street: 'Guangzhou, Stepan Bandera',
            postIndex: '56667',
            country: 'China',
            position: {
              lat: 58.174270,
              lng: 71.329620,
            }
          }
        },
        activeKey: 'kyiv',
      }
    },
    computed: {
      activeElement()  {
        return  this.locationArray[this.activeKey];
      },
      mapPosition() {
        return  this.activeElement.position;
      },
    },
  }
</script>

<style scoped lang="scss">
  .location {
    display: flex;
    background-color: #262626;
    &__title {
      font-size: 34px;
      font-weight: 400;
      text-align: left;
      color:#fff;
    }
    &__item {
      padding-left: 50px;
      padding-top: 50px;
      color: #fff;
    }
    &__tabs {
      margin: 50px 0;
      text-align: left;
    }
    &__dot {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      background-color: #3db565;
      border-radius: 50%;
      z-index: 111;
    }
    &__tab-item {
      text-transform: uppercase;
      font-weight: 500;
      cursor:pointer;
      margin:0 10px;
      display: inline-block;
      &:first-child {
        margin-left: 0px;
      }
    }
    &__info {
      text-align: left;
    }
    &__company {
      font-size: 26px;
      letter-spacing: 1px;
      margin-bottom: 50px;
    }
    &__container {
      width: 95%;
      margin-bottom: 100px;
    }
  }

  .green {
    color:#3db565;
  }

  @media only screen and (max-width : 960px) {
    .location {
      flex-wrap:wrap;
    }
  }

  @media only screen and (max-width : 576px) {
    .location__item {
      padding-top: 20px;
      padding-left: 20px;
    }
  }
</style>
