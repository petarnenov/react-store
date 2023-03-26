import { useSyncExternalStore } from 'react';

const createStore = (initialState) => {
    let state = initialState;
    const store = {
        listeners: new Set(),
        getState: () => state,
        setState: (newState) => {
            state = newState;
            localStorage.setItem('store', JSON.stringify(state));
            store.listeners.forEach(listener => listener(state))
        },
        subscribe: (listener) => {
            store.listeners.add(listener)
            return () => store.listeners.delete(listener)
        }
    }
    return store
}

let store = {}
window.onfocus = () => {
    const savedStore = JSON.parse(localStorage.getItem('store'));
    store.setState(savedStore || {});
}

const savedStore = JSON.parse(localStorage.getItem('store'));
store = createStore(savedStore || {});

export default store;

const useStore = (selector = (state) => state) =>
    useSyncExternalStore(store.subscribe, () => selector(store.getState()));

export { useStore };
