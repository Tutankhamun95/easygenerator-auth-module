"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = () => ({
    jwt: {
        secret: 'secret',
    },
    database: {
        uri: 'mongodb://localhost:27017/nestjs-auth',
    }
});
//# sourceMappingURL=config.js.map