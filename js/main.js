/**
 * Created by renee on 2017/4/10.
 */
// if(window.localStorage){
//     alert('This browser supports localStorage');
// }else{
//     alert('This browser does NOT support localStorage');
// }

var localArr = [];
var localObj = {};
var localStorage = window.localStorage;
// localStorage.setItem("name","renee");
var sessionStorage = window.sessionStorage;
// sessionStorage.setItem("age",19);
document.getElementById("localSave").onclick = function(){
    var email =document.getElementById("email1").value;
    var name = document.getElementById("name1").value;
    localArr[localArr.length] = email;
    localStorage.setItem("localArr",localArr);
}

var arr = localStorage.getItem("localArr");

    for(var i=0;i<arr.length;i++) {
        console.log(arr[i].email);
        $("#localTable").append("<tr><td>" + arr[i].email + "</td><td>" + arr[i].name + "</td></tr>");
    }


