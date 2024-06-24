const sam = {
    name: "abcd",
    duration: "6 months",
    role: "fullstack developer",
    destination: "frontend developer",
    sam: function() {
        console.log("website connect");
    },
    developer: {
        testing: ["frontend", "ui", "ux"],
        backend: ["nodejs", "express", "mongodb", "mysql", "redis", "rabbitmq", "kafka"]
    },
    trainingduration: "1 week"
};

const sendJSON = JSON.stringify(sam);
console.log(sendJSON);
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
