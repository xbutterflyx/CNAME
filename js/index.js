const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
	Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
	const ms = randomIn(2000, 4000)
	el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
	mixupInterval(el)
	el.addEventListener('webkitAnimationIteration', () => {
		mixupInterval(el)
	})
})

Integer count = (Integer) application.getAttribute("count");
if(count == null) {
	count = 0;
}
application.setAttribute("count", count + 1);
var num = count
document.getElementById("num").innerHTML = num;
