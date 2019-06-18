<template>
  <div class="hotel-selected">
    <p>Спасибо за использование нашего сервиса. Ваше бронирование в {{ hotel.name }} подтверждено</p>
    <router-link to='/'>Вернуться</router-link>
  </div>
</template>

<script>

export default {
  name: 'HotelSelected',
  data: () => {
    return {
      hotel: ''
    }
  },
  mounted() {
    if (localStorage.getItem('selectedHotelUuid')) {
      this.hotel = JSON.parse(localStorage.getItem('hotels'))
              .filter(item => item.uuid === localStorage.getItem('selectedHotelUuid'))[0];
    }
  },
}
</script>
