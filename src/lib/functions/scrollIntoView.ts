export function scrollIntoView(target: string) {
  var el = document.getElementById(target);
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth'
  });
}