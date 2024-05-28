"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = __importDefault(require("./config/database"));
(0, database_1.default)();
//Import routes
const index_1 = __importDefault(require("./routes/index"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
//Initialize express
const app = (0, express_1.default)();
//Middleware Setup
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
//Routes
app.use('/', index_1.default);
app.use('/api/posts', postRoutes_1.default);
exports.default = app;
