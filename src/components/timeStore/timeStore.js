import { useSyncExternalStore } from 'react';

const createTimeStore = () => {

    const timeStore = {
        notifiers: new Set(),
        time: new Date().toLocaleTimeString(),
        subscribe: (notifier) => {
            timeStore.notifiers.add(notifier);
            return () => timeStore.notifiers.delete(notifier);
        }

    }

    setInterval(() => {
        timeStore.time = new Date().toLocaleTimeString();
        timeStore.notifiers.forEach(notifier => notifier());
    }, 1000);

    return timeStore;
}

const timeStore = createTimeStore();

export const useTimeStore = () => useSyncExternalStore(timeStore.subscribe, () => timeStore.time);
