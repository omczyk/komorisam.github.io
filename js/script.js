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

const root = document.documentElement;

// 监听resize事件，实时更新CSS变量
window.addEventListener('resize', function () {
	// 获取网页宽度
	const pageWidth = window.innerWidth;
	// 获取网页高度
	const pageHeight = window.innerHeight;

	// 将宽度赋值给CSS变量
	root.style.setProperty('--page-width', `${pageWidth}px`);
	// 将高度赋值给CSS变量
	root.style.setProperty('--page-height', `${pageHeight}px`);

	if (pageHeight >= pageWidth) {
		const boxWidth = pageHeight;
		root.style.setProperty('--box-width', `${boxWidth}px`);
	} else {
		const boxWidth = pageWidth;
		root.style.setProperty('--box-width', `${boxWidth}px`);
	}
});

window.dispatchEvent(new Event('resize'));