/**
 * Created by Parken_Vikas on 12/18/2016.
 */
angular.module('smsApp',[]).controller('smscontroller',function($http,$scope){
    console.log("running");
    $scope.sendSms=function(mobile,message)
    {
    var url='https://control.msg91.com/api/sendhttp.php?authkey=134204A8Py82q7wcuF58567448&mobiles='+mobile+'&message=hello&sender=NewUsr&route=4&country=91&response=json';
        alert(mobile+"\n"+message);
        $http.get(url).then(function(response){
            console.log(response);
        });

     }
});