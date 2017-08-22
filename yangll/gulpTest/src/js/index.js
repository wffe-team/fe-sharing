var index = 0;
var printShow = setInterval(function(){
    var word = "前端自动化构建工具";
    document.querySelector(".text").innerText = word.substring(0,index++);
},300);
var clearPrint = setTimeout(function(){
    clearInterval(printShow);
},3000);
