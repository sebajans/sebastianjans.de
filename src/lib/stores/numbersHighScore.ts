import { writable } from "svelte/store";

export const highScore = writable<number[]>([])
