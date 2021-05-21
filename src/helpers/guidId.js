export function guidId(prefix) {
    return Math.random().toString(32).replace("0.", prefix+"-" || " ");
}