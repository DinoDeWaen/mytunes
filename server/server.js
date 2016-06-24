/**
 * Created by serrut on 24/06/16.
 */
const express = require('express');

module.exports = {

    app: function () {
        const app = express();

        app.use(express.static(__dirname + '/../js'));

        return app;
    }

};