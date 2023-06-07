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
// 声明一个读取 TXT 文件内容的函数
async function readTextFile(file) {
    const response = await fetch(file);
    const text = await response.text();
    return text;
}

// 读取 ./media/text/end.txt 文件
readTextFile("../media/text/end.txt").then(text => {
    const outputDiv = document.getElementById("output");
});

// 将前缀转换成对应的样式
function convertStyleCode(str) {
    const codes = {
        "0": "black",
        "1": "dark_blue",
        "2": "dark_green",
        "3": "sky_blue",
        "4": "red",
        "5": "purple",
        "6": "gold",
        "7": "gray",
        "8": "dark_gray",
        "9": "blue",
        "a": "bright_green",
        "b": "cyan",
        "c": "light_red",
        "d": "pink",
        "e": "yellow",
        "f": "white",
        "l": "bold",
        "o": "italic",
        "m": "strikethrough",
        "n": "underline",
        "k": "magic"
    };
    const code = str.replace("§", "");
    return codes[code] || "";
}

// 将文本中的 PLAYERNAME 替换为用户输入的值
function replacePlayerName(str, name) {
    return str.replace(/\bPLAYERNAME\b/g, name);
}

// 将样式应用到文本中并返回处理后的文本
function applyTextStyle(text) {
    const lines = text.split("\n");
    const regex = /§./g; // 正则匹配前缀，如 §1、§k 等
    const outputLines = lines.map(line => {
        let lastClass = ""; // 上一个样式类
        const processedLine = line.replace(regex, match => {
            const className = convertStyleCode(match);
            if (className) {
                const classList = [className];
                if (className === "magic") {
                    classList.push("no-select"); // 防止选中内容
                }
                lastClass = className;
                return `</span><span class="${classList.join(" ")}">`;
            } else {
                // 如果无效的前缀有连续的多个，则只显示最后一个
                return lastClass ? `</span><span class="${lastClass}">` : "";
            }
        });
        return `<span>${processedLine}</span>`;
    });
    return outputLines.join("<br>");
}

// 将文本样式和PLAYERNAME替换一起应用到文本中，并显示在页面上
function convertText() {
    const inputName = document.getElementById("name").value;
    const outputDiv = document.getElementById("output");
    readTextFile("../media/text/end.txt").then(text => {
        const processedText = applyTextStyle(replacePlayerName(text, inputName));
        outputDiv.innerHTML = processedText;
    });
}
