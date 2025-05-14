import { writable, type Writable } from 'svelte/store';
// writeable that also saves to local storage
export const localStoreFactory = <T>(
	key: string,
	initialValue?: T,
	serializer: (val: T) => string = JSON.stringify,
	unserializer: (val: string) => T = JSON.parse
) => {
	let initial = initialValue;

	if (!import.meta.env.SSR) {
		const localStoreValue = localStorage.getItem(key);
		initial = localStoreValue ? unserializer(localStoreValue) : initialValue;
	}

	let _val = initial;

	const { set: _set, update: _update, subscribe } = writable<T>(_val);

	const customWritable: Writable<T> = {
		subscribe,
		set: (val: T) => {
			localStorage.setItem(key, serializer(val));
			_val = val;
			_set(val);
		},
		update: (updater) => {
			const newVal = updater(_val);
			_val = newVal;
			_set(newVal);
			localStorage.setItem(key, serializer(newVal));
		}
	};

	return customWritable;
};
