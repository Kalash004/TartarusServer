export default class Parsed {
    constructor(answer) {
        this.answer = answer;
    }

    getData() {
        if (!("data" in this.answer)) {
            return null;
        }
        if (this.answer["data"].toLowerCase() === "none") {
            return null;
        }
        if (this.answer["data"].toLowerCase() === "[]") {
            return null
        }
        const listData = JSON.parse(this.answer["data"]);
        for (let d of listData) {
            delete d["table"];
        }
        return listData;
    }

    getStatus() {
        return this.answer["status"];
    }

}