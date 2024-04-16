import * as net from 'net';
import { parseAnswer } from './response_parser.js';
const serverHost = '127.0.0.1'; // Change this to your server's IP address or hostname
const serverPort = 2004;

export const getConnectionToTartarus = () => {
    const client = net.createConnection({ host: serverHost, port: serverPort }, () => {
        console.log('Connected to server');
    });
    return client
}


export const sendRequest = async (request) => {
    return new Promise((resolve, reject) => {
        let conn = getConnectionToTartarus()
        conn.write(request)
        conn.on('data', (data) => {
            conn.end()
            const str = data.toString()
            const parsed = parseAnswer(str)
            resolve(parsed)
        })
    })
}