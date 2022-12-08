import { localStoreFactory } from "./localStoreFactory";

const key = "nightmode"

function userPrefersDark() {
  const localTheme = localStorage.getItem(key)
  return (
      localTheme  === 'dark' ||
      (!(localTheme) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

function persistDarkMode(dark: boolean) {
        document.body.classList.toggle('dark', dark);
    // if (dark) {
    //     document.body.classList.add('dark');
    //     // localStorage.theme = 'dark';
    // } else {
    //     document.body.classList.remove('dark');
    //     // localStorage.theme = 'light';
    // }
}

const { set, subscribe, update } = localStoreFactory<boolean>(key)

export const nightMode = {
    subscribe,
    userPrefersDark,
    setDarkMode(dark: boolean) {
        persistDarkMode(dark)
        set(dark)
    },
    toggleDarkMode: () => update(dark => {
        persistDarkMode(!dark)
        return !dark
    })
}