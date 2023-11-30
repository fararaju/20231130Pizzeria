export function signal(v) {
    let value = v;
    let subscriptors = new Set();
    const s = () => value;
    s.set = (v) => {
        if (value !== v) {
            value = v;
            for (const susbscriptor of subscriptors) {
                susbscriptor(value);
            }
        }
    };
    s.on = (cb) => {
        subscriptors.add(cb);
        return () => subscriptors.delete(cb);
    };
    s.dispose = () => {
        value = undefined;
        subscriptors = undefined;
    };
    return s;
}