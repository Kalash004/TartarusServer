export default class Parsed {
    constructor(data) {
        this.data = data;
    }

    getData() {
        if (!("data" in this.data)) {
            return null;
        }
        if (this.data["data"].toLowerCase() === "none") {
            return null;
        }
        if (this.data["data"].toLowerCase() === "[]") {
            return null
        }
        const listData = JSON.parse(this.data["data"]);
        for (let d of listData) {
            delete d["table"];
        }
        return listData;
    }

    getStatus() {
        return this.data["status"];
    }
}