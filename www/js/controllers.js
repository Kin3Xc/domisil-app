angular.module('starter.controllers', [])

.controller('homeController', function($scope){
  console.log('SOY HOME');
})

.controller('loginController', function($scope, $location){
  //Defino el modelo a utilizar, en este caso un sensillo login
  //con los datos de usuario y clave
  $scope.login = {
    usuario: '',
    clave: ''
  };

  //Funcion para ingresar, se ejecuta al hacer clic sobre el boton Ingresar
  $scope.ingresar = function(){
    //Aquí validaria los datos que ingresa el usuario
    if ($scope.login.usuario != "" && $scope.login.clave != "") {
      if ($scope.login.usuario === "root") {
        if ($scope.login.clave === "root") {
          // alert('Bienvenido al sistema');
          console.log('AUI');
          $location.url("/tab/home");
        }else{
          alert('Su clave es incorrecta\nPor favor vuelva a intentarlo');
          $scope.login.clave = "";
        }
      }else{
        alert('El usuario ingresado no existe\nPor favor vuelva a intentarlo');
        $scope.login.usuario = "";
      }
    }else{
      alert('Existen campos vacios, por favor verifique\nIngrese todos los datos.');
    }
  };
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
