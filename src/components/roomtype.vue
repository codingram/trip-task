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
              ><font-awesome-icon :icon="['fas', 'times-circle']" /> Hot/cold
              Running Water</span
            >

            <div class="div-padding">
              <font-awesome-icon :icon="['fas', 'times-circle']" /> Desk in Room
            </div>
            <div class="div-padding">
              <font-awesome-icon :icon="['fas', 'times-circle']" />WIFI
            </div>

            <div></div>
            <div class="div-padding">
              <font-awesome-icon :icon="['fas', 'times-circle']" />Shower
              Facilities Available
            </div>

            <div class="about-room font-weight-bold">
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
}
</style>
