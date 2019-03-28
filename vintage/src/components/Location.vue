<template>
  <div class="location">
    <div class="location__item">
      <h1 class="location__title">Our Offices</h1>
      <div class="location__container">
        <div class="location__tabs">
          <template v-for="(tab, key) in locationArray">
            <div :class="{'location__tab-item':true,
                          'active': activeKey === key}"
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
    <GmapMap
      :center="mapPosition"
      :zoom="7"
      map-type-id="terrain"
      style="width: 50%;"
    >
      <GmapMarker
        key="index"
        :clickable="true"
        :draggable="true"
      />
    </GmapMap>
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
            company: 'Global',
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
           company: 'Global',
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
            company: 'Global',
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
            company: 'Global',
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
    &__item {
      width: 50%;
    }
    &__tabs {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    &__info {
      text-align: left;

    }
  }
</style>
