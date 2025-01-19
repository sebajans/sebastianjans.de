// export function scrollIntoView(target: string) {
//   var el = document.getElementById(target);
//   if (!el) return;
//   el.scrollIntoView({
//     behavior: 'smooth'
//   });
// }

export function scrollIntoView(target: string, duration: number = 800) {
	const el = document.getElementById(target);
	if (!el) return;
	console.log('target', target);
	const elementPosition = el.getBoundingClientRect().top;
	const startingY = window.pageYOffset;
	const diff = elementPosition - 60; // You can adjust this value to offset the final position from the top

	let startTime: number;

	function step(currentTime: number) {
		if (!startTime) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const scrollY = easeInOutCubic(timeElapsed, startingY, diff, duration);
		window.scrollTo(0, scrollY);
		if (timeElapsed < duration) {
			requestAnimationFrame(step);
		}
	}

	function easeInOutCubic(t: number, b: number, c: number, d: number): number {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t * t + b;
		t -= 2;
		return (c / 2) * (t * t * t + 2) + b;
	}

	requestAnimationFrame(step);
}
