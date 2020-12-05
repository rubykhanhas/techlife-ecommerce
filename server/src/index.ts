//#region Environment Variable
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
// readonly user
const MONGODB_URI =
    process.env.MONGODB_URI ||
    "mongodb+srv://readonly:147258369@e-commerce.dao5m.mongodb.net/techlife?retryWrites=true&w=majority";
//#endregion
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import Root from "./graphql/query";

//#region Config main middleware
const app: Application = express();
const corsOptions = {
    origin: '*',
};

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => console.log("- MONGODB CONNECTED"));
mongoose.connection.on("error", (err) => console.log(`- MONGODB CONNECTION ERROR: ${err}`));
app.use(cors(corsOptions));
//#endregion

app.use(
    "/graphql",
    graphqlHTTP({
        schema: Root,
        graphiql: true,
    })
);
app.listen(PORT, () => console.log("\x1b[40m\x1b[32m%s\x1b[0m", `Server listen at http://localhost:${PORT}`));
