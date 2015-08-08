/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Primero creamos un modulo, el cual es la aplicación de angular JS.
var aplicacion=angular.module('aplicacionsita',[]);
//En los corchetes van las directivas.

//Definimos un controlador para comunicarnos con el index.html
aplicacion.controller('controladorPrincipal',function ($scope, $http){
    //Creamos un modelo simple
    
    $scope.mensajito='Hola desde angular!!!';
    $scope.nombre='';
    $scope.algo='';
    $scope.diacorte='';
    
    $scope.apachurrame = function (){
        $scope.algo='haz apachurrado el boton!!!';
    };
    
    $scope.guardar=function(){
        $http.post('http//localhost:9000/tarjeta/'+
                $scope.nombre+'/'+$scope.diacorte).success(function(data){
                    console.log(data);
                });
            };
            }
            );