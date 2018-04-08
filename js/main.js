$(".btn-read-more").click(function(){
    if($(".btn-read-more")[0].innerText=="阅读全文"){
        $(".article-content")[0].style.height = "auto";
        $(".btn-read-more")[0].innerText = "收起";
    }else{
        $(".article-content")[0].style.height = "20px";
        $(".btn-read-more")[0].innerText = "阅读全文";
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


