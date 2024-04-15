import Parsed from "./models/parsed.js"

export const parseAnswer = (data) => {
    data = data.replace(/^[\n\r]+|;+$/g, '');
    const parts = data.split(";");
    const parsed = {};
    for (let part of parts) {
        part = splitFirstOccurrence(part, ":");
        const key = part[0].trim().toLowerCase();
        const value = part[1].trim();
        parsed[key] = value;
    }
    console.log(data)
    return new Parsed(parsed);
}


function splitFirstOccurrence(str, delimiter) {
    const index = str.indexOf(delimiter);
    if (index !== -1) {
        return [str.substring(0, index), str.substring(index + delimiter.length)];
    } else {
        return [str];
    }
}