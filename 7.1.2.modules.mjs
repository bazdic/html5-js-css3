function getCurrentTime() {
    const date = new Date();
    return date.toLocaleTimeString('sk-SK', {
        hour12: false
    })
}

export function log(message) {
    const time = getCurrentTime();
    return console.log(`${time} ${message}`);
}

export function info(message) {
    const time = getCurrentTime();
    return console.info(`${time} ${message}`);
}

export function warn(message) {
    const time = getCurrentTime();
    return console.warn(`${time} ${message}`);
}

export function error(message) {
    const time = getCurrentTime();
    return console.error(`${time} ${message}`);
}

export default {
    log,
    info,
    warn,
    error
};