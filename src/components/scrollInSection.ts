
export function scrollInSection(a: number, b = 0, c: number) {
	const sectionScrollAnimation = Math.min(1, (a - b * c) / c);
	console.log(sectionScrollAnimation);
	return sectionScrollAnimation;
}
export default scrollInSection

