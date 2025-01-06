/**TRANSLATION WB CMDS: START */
export const addTranslationWbLog = `INSERT INTO translation_wb_logs (user_id, action, timestamp, success, file_options)
VALUES ($1, $2, $3, $4, $5)`;

export const listTranslationWbLogs = `SELECT * FROM translation_wb_logs`;
/**TRANSLATION WB CMDS: END */