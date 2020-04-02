export function convertObject(data) {
    const obj = {};
    Object.keys(data).forEach((key, index) => {
        console.log(key);
        obj[key] = data[key];
    });
    return obj;
}
