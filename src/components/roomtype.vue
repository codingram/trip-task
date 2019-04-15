<template>
  <b-row>
    <div>
      <b-col>
        <div class="div-max-width ">
          <span class="font-weight-bold">Standard room-Queen Size bed</span>

          <img src="../assets/ImagesS/roomimage.jpeg" height="120px" />
          <div class="p-3 text-size text-secondary ">
            <div></div>
            <span class="div-padding"
              ><font-awesome-icon :icon="['fas', 'check']" /> Hot/cold Running
              Water</span
            >

            <div class="div-padding">
              <font-awesome-icon :icon="['fas', 'torii-gate']" /> Desk in Room
            </div>
            <div class="div-padding">
              <font-awesome-icon :icon="['fas', 'check']" /> WIFI
            </div>

            <div></div>
            <div class="div-padding">
              <font-awesome-icon :icon="['fas', 'shower']" /> Shower Facility
              Available
            </div>

            <div class="about-room font-weight-bold pt-2">
              MORE ABOUT THIS ROOM--->
            </div>
          </div>
        </div>
      </b-col>
    </div>
  </b-row>
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
.div-padding {
  padding: 6px;
  font-size: 11px;
  color: #808080e8;
}
</style>
