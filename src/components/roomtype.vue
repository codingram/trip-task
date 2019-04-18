<template>
  <div>
    <div>
      <div class="div-max-width ">
        <span class="font-weight-bold heading-color">
          Standard room-Queen Size bed
        </span>

        <img src="../assets/ImagesS/roomimage.jpeg" height="120px" />
        <div class=" text-size text-secondary ">
          <span>
            <span class="roomtype-facility-icon"> <font-awesome-icon :icon="['fas', 'check']"/></span>
            <span class="roomtype-facility-text">Hot/cold Running Water</span>
          </span>

          <div class="div-padding">
            <span> <font-awesome-icon :icon="['fas', 'torii-gate']"/></span>
            <span>Desk in Room</span>
          </div>
          <div class="div-padding">
            <span> <font-awesome-icon :icon="['fas', 'check']"/></span>
            <span> WIFI </span>
          </div>
          <div class="div-padding">
            <span> <font-awesome-icon :icon="['fas', 'shower']"/></span>
            <span> Shower Facility Available </span>
          </div>

          <div class="about-room font-weight-bold pt-2">
            MORE ABOUT THIS ROOM--->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.div-max-width {
  max-width: 183px;
}
.about-room {
  font-size: 10px;
  color: $alltextbluecolor;
}
.text-size {
  font-size: 13px;
  font-weight: 100;
}
.roomtype-facility-icon {
  padding: 6px;
  font-size: 10px;
  color: $allgraytextcolor;
}
.roomtype-facility-text {
  font-size: 12px;
  color: $allgraytextcolor;
}
.heading-color {
  color: $alltextheadcolor;
}
</style>
