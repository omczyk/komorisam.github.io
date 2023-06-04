function playSound() {
	var audio = new Audio('../media/audio/click.wav');
	audio.play();
}

function playSoundAndRedirect(url) {
	var audio = new Audio('../media/audio/click.wav');
	audio.play();
	setTimeout(function () {
		window.location.href = url;
	}, audio.duration * 1000);
}

// 动画旋转
var music = document.getElementById('music')    //获取音乐
var musicico = document.getElementById('musicico')   //获取音乐图标
var tem = true  //设置一个变量，用来控制音乐是否在播放。

//定义一个函数，当用户单击的时候触发这个函数，从而实现音乐的暂停与播放。
function musiccc() {
	//tem 用来控制音乐当前是否在播放。true 代表音乐正在播放，false 代表音乐当前正在处于暂停的状态。
	if (tem == false) {
		music.play()  //播放音乐
		tem = true
		document.getElementById('musicico').style.animationPlayState = 'running'  //播放音乐图标
	} else {
		music.pause()  //暂停音乐
		tem = false
		document.getElementById('musicico').style.animationPlayState = 'paused'  //暂停音乐图标
	}
}

// 获取 json 文件中 splashes 数组内的字符串数据
fetch('../media/text/splashes.json')
	.then(response => response.json())
	.then(data => {
		const splashes = data.splashes;
		// 将字符串数组渲染到页面上
		const splashElem = document.getElementById('splash');
		splashElem.innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
	})
	.catch(error => console.error(error));
