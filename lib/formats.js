const loggerName = "apLogger";

function detailed(req, res) {
    console.log(
        `${loggerName} :: ${req.method} ${req.path} : ${res.statusCode}`
    );
}

function dev() {
    console.log("dev");
}

function responseTime() {
    const elapsed = process.hrtime(startAt);
    const ms = (elapsed[0] * 1e3 + elapsed[1] * 1e-6).toFixed(3);
    return ms;
}

module.exports = { detailed, dev };
