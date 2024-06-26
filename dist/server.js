"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); //configure to use environment variables
const PORT = process.env.PORT;
app_1.default.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
