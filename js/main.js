$(".btn-read-more").click(function(){
    // console.log($(this)[0].innerText);
    if($(this)[0].innerText=="阅读全文"){
        $(this).parent().parent().children()[1].style.height = "auto";
        $(this)[0].innerText = "收起";
    }else{
        $(this).parent().parent().children()[1].style.height = "20px";
        $(this)[0].innerText = "阅读全文";
    }
})

$(".nav-title").click(function(){
    $(".nav-title a").each(function(){
        $(this).removeClass("nav-active");
    })
    $(this).addClass("nav-active");
})
// if(window.localStorage){
//     alert('This browser supports localStorage');
// }else{
//     alert('This browser does NOT support localStorage');
// }

// var localArr = [];
// var localObj = {};
// var localStorage = window.localStorage;
// // localStorage.setItem("name","renee");
// var sessionStorage = window.sessionStorage;
// // sessionStorage.setItem("age",19);
// document.getElementById("localSave").onclick = function(){
//     var email =document.getElementById("email1").value;
//     var name = document.getElementById("name1").value;
//     localArr[localArr.length] = email;
//     localStorage.setItem("localArr",localArr);
// }
//
// var arr = localStorage.getItem("localArr");
//
//     for(var i=0;i<arr.length;i++) {
//         console.log(arr[i].email);
//         $("#localTable").append("<tr><td>" + arr[i].email + "</td><td>" + arr[i].name + "</td></tr>");
//     }


