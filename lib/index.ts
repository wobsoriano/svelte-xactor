import type { ActorSystem } from 'xactor';

function toSvelteStore<T extends object>(system: ActorSystem<unknown, T>) {
    return {
        subscribe(fn: (payload: T) => void) {
            fn(system.getSnapshot())
            const { unsubscribe } = system.subscribe((state) => {
                fn(state);
            })
            return unsubscribe
        }
    }
}

export default toSvelteStore