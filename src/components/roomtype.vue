<template>
  <div class="div-max-width ">
    <span class="font-weight-bold heading-color">
      Standard room-Queen Size bed
    </span>
    <div class="mt-3">
      <img src="../assets/ImagesS/roomimage.jpeg" height="120px" />
    </div>
    <div class=" text-size text-secondary mt-3">
      <div class="p-1">
        <span class="roomtype-facility-icon">
          <font-awesome-icon :icon="['fas', 'check']" />
        </span>
        <span class="roomtype-facility-text">Hot/cold Running Water</span>
      </div>

      <div class="p-1">
        <span class="roomtype-facility-icon">
          <font-awesome-icon :icon="['fas', 'torii-gate']" />
        </span>
        <span class="roomtype-facility-text">Desk in Room</span>
      </div>
      <div class="p-1">
        <span class="roomtype-facility-icon">
          <font-awesome-icon :icon="['fas', 'check']" />
        </span>
        <span class="roomtype-facility-text"> WIFI </span>
      </div>
      <div class="p-1">
        <span class="roomtype-facility-icon">
          <font-awesome-icon :icon="['fas', 'shower']" />
        </span>
        <span class="roomtype-facility-text">
          Shower Facility Available
        </span>
      </div>

      <div class="about-room font-weight-bold pt-2">
        MORE ABOUT THIS ROOM
        <span class="ml-2">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/Sstyle/roomtype.scss";
</style>
