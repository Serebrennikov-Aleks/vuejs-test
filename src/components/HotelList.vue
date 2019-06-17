<template>
  <div class="hotel-list">
    <div class="col-name">Название</div>
    <div class="col-price">Цена</div>
    <div class="col-action">Действие</div>
    <hr />
    <div v-for="(hotel) in hotels" v-bind:key="hotel.uuid" class="hotel-item">
      <div class="col-name">{{ hotel.name }}
        <span v-if="hotel.uuid === selectedHotelUuid" class="hotel-selected">Текущий выбор</span>
      </div>
      <div class="col-price">{{ hotel.price }}</div>
      <div class="col-action">
        <button @click="selectHotel(hotel.uuid)">Выбрать</button>
      </div>
    </div>
  </div>
</template>

<script>
import hotelsData from '../data/hotels-data';

export default {
  name: 'HotelList',
  data: () => {
    return {
      hotels: [],
      selectedHotelUuid: undefined
    }
  },
  mounted() {
    localStorage.setItem('hotels', JSON.stringify(hotelsData));
    this.hotels = hotelsData;
    if (localStorage.getItem('selectedHotelUuid')) {
      this.selectedHotelUuid = localStorage.getItem('selectedHotelUuid');
    }
  },
  methods: {
    selectHotel(uuid) {
      localStorage.setItem('selectedHotelUuid', uuid);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-name {
    width: 50%;
    display: inline-block;
  }
  .col-price {
    width: 30%;
    display: inline-block;
  }
  .col-action {
    width: 20%;
    display: inline-block;
  }
  .hotel-item {
    margin-bottom: 10px;
  }
  .hotel-selected {
    font-weight: bold;
  }
</style>
