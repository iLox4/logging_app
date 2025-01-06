import express, { Request, Response } from 'express';
import cors from "cors";
import { translationWbAddBodySchema, translationWbListQuerySchema } from './src/validation/schemas';
import { addTranslationWbRecord, listTranslationWbRecords } from './db/handlers/translationWbHandlers';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.post("/log/add", async (req: Request, res: Response) => {
    const { appName, ...rest } = req.body;

    switch (appName.trim().toLowerCase()) {
        case "translation-wb":
            try {
                await translationWbAddBodySchema.validateAsync(rest);
                await addTranslationWbRecord(rest.userId, rest.action, rest.success, rest.fileOptions);
                res.status(200).send("Log was successfuly saved");
            } catch (error: any) {
                res.status(400).send(error.message);
            }
            break;
        default:
            res.status(400).send("Invalid app name");
    }
});

app.get("/log/list/:appName", async (req: Request, res: Response) => {
    const { appName } = req.params;
    const requestQuery = req.query;

    switch (appName.trim().toLowerCase()) {
        case "translation-wb":
            try {
                await translationWbListQuerySchema.validateAsync(requestQuery);

                const { rows } = await listTranslationWbRecords(requestQuery);
                
                if (rows.length === 0) {
                    res.status(404).send("Records were not found!");
                } else {
                    res.status(200).send(rows);
                }
            } catch (error: any) {
                console.error("ERROR: ", error.message);
                res.status(400).send(error.message);
            }
            break;
        default:
            res.status(400).send("Invalid app name");
    }
});

app.all("*", (req, res) => {
    res.status(404).send("Ohh noo!!! This endpoint does not exist!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});