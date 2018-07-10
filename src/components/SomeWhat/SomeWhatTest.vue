<template>
    <v-ons-page>
      
    </v-ons-page>
</template>
<script>
import Vue from 'vue'

export default {
  methods:{
    
  },
  mounted () {
    document.addEventListener("deviceready", ()=>{
      console.log(cordova)
    }, false)
    /*Vue.cordova.on('deviceready', () => {
      alert('Cordova : device is ready !')
      var permissions = cordova.plugins.permissions;
      console.log(cordova)
      permissions.hasPermission(permissions.CAMERA, checkPermissionCallback, null);
      function checkPermissionCallback(status) {
        if (!status.hasPermission) {
          var errorCallback = function () {
            console.warn('摄像头的权限没有打开');
          }
          permissions.requestPermission(permissions.CAMERA, function (status) {
            if (!status.hasPermission) errorCallback();
            console.log('获取权限成功！');
            if(cordova.plugins.device.capture){
              alert('start')
              Vue.cordova.camera.getPicture((imageURI) => {
                window.alert('Photo URI : ' + imageURI)
              }, (message) => {
                window.alert('FAILED : ' + message)
                return
              }, {
                quality: 50,
                destinationType: Vue.cordova.camera.DestinationType.FILE_URI
              })
            }else{
              alert('not find')
            }
          }, errorCallback)
        }
      }
    })*/
  }  
}
</script>


