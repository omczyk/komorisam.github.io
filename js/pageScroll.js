//页面加载完毕后执行
window.onload = function () {
    //设置定时器
    timer = setInterval("scrollwindow()", 250);

}

//清除定时器
function clear() {
    clearInterval(timer);
}

//滚动函数
let gao = 0;
function scrollwindow() {
    gao = gao + 10;
    window.scroll(0, gao);
}

//滚动到底部触发函数
window.onscroll = function () {
    //变量scrollTop是滚动条滚动时，距离顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //变量windowHeight是可视区的高度
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //变量scrollHeight是滚动条的总高度
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //滚动条到底部的条件
    if (scrollTop + windowHeight == scrollHeight) {

        console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
        alert('已经滚到底部了了！');
        clear();

    }
}
