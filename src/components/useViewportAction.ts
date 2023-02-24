
let intersectionObserver: IntersectionObserver | undefined

function ensureIntersectionObserver() {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
        entry.target.dispatchEvent(new CustomEvent(eventName));
      });
    },
    { root: null, rootMargin: '0px', threshold: 0 }
  );
}

export default function viewport(element: HTMLElement) {
  ensureIntersectionObserver();

  intersectionObserver?.observe(element);

  return {
    destroy() {
      intersectionObserver?.unobserve(element);
    }
  }
}
// https://svelte.dev/repl/6db375be880441299f7721b54434068f?version=3.38.1