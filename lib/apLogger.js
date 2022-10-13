// apLogger : method uri : status - request-id - current-date/time : (response-time)
// node-logger : POST /uri : 201 - 11bf5...etc : Wed Oct 12 2022 10:48:10 GMT-0500 (Central Daylight Time) : 800ms

// console.log(Date());

const formatMap = require("./formats");

function apLogger(format = "", opts = {}) {
    /*

    */
    if (!format) {
    }
    function logger(req, res, next) {
        req.startTime = process.hrtime();
        req.startTime = new Date();

        const log = formatMap[format];

        res.on("finish", () => {
            log(req, res);
        });

        // res.on("close", () => {
        //     if (!resFinished) {
        //         console.log("Request aborted - route:", req.path);
        //         console.log("closed");
        //     }
        // });

        next();
    }

    return logger;
}

module.exports = apLogger;
