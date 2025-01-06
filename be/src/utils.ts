import { Response } from "express";

// TODO: Add error logic => based on error sent different error code
export async function handleRequest(res: Response, validateProperties: () => Promise<any>, executeLogic: () => Promise<any>, successMsg?: string ) {
    try {
        await validateProperties();
        const result = await executeLogic();

        res.status(200).send(successMsg ?? result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}
