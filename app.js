/**
 * Created by admin on 2015-08-12.
 */

    // 1. 필요한 module require
    var http = require("http"),
        express = require("express"),
        app = express(),
        path = require("path"),
        bodyParser = require("body-parser");

    // 2. routing module require
    var routes = require("./routes");