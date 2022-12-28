import { localStoreFactory } from "./localStoreFactory";

const key = "nightmode"

function userPrefersDark() {
    if (import.meta.env.SSR) {
        return false;
    }


    //   return (
    //       sessionData  === 'dark' ||
    //       (!(sessionData) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    //       );
    const sessionData = window.sessionStorage.getItem(key)
    if (sessionData) {
        return "true" === sessionData;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  
}

function persistDarkMode(dark: boolean) {
        document.body.classList.toggle('dark', dark);
    if (dark) {
        document.body.classList.add('dark');
        sessionStorage.theme = 'dark';
    } else {
        document.body.classList.remove('dark');
        sessionStorage.theme = 'light';
    }
}

const { set, subscribe, update } = localStoreFactory<boolean>(key)

export const nightMode = {
    subscribe,
    userPrefersDark,
    setDarkMode(enableDarkMode: boolean = false) {
        persistDarkMode(enableDarkMode)
        set(enableDarkMode)
    },
    toggleDarkMode: () => update(enableDarkMode => {
        persistDarkMode(!enableDarkMode)
        return !enableDarkMode
    })
}

