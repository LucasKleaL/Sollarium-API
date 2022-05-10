
class PostHandlerController {
    constructor(app) {

        app.post("/cubesat/post", (req, res) => {
            //result = req.body.json;
            console.log(req.body);
        });

    }
}

module.exports = PostHandlerController;