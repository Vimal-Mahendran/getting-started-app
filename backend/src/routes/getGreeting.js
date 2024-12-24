const GREETING = [
    'Hello world!',
    "Jsam",
    "The lord is my shepard",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING [Math.floor(Math.random() * GREETING.length)],
    });
};
