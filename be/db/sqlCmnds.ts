/**TRANSLATION WB CMDS: START */
export const translationWbStatCommds = {
    getNumOfUsers: `SELECT COUNT(DISTINCT user_id) AS user_count FROM translation_wb_logs`,
    getNumOfUsersLstMnth: `SELECT COUNT(DISTINCT user_id) AS user_count FROM translation_wb_logs WHERE timestamp >= DATE_TRUNC('month', NOW()) - INTERVAL '1 month'`,
    getNumOfReqsPerAction: `SELECT action, COUNT(action) AS request_count FROM translation_wb_logs GROUP BY action`,
    getNumOfReqsLstMnth: `SELECT COUNT(*) as request_count FROM translation_wb_logs WHERE timestamp >= DATE_TRUNC('month', NOW()) - INTERVAL '1 month'`,
    getTopUsersBasedOnReqNum: `SELECT user_id, COUNT(*) AS request_count FROM translation_wb_logs GROUP BY user_id ORDER BY request_count DESC LIMIT 5`,
    getSuccessPersentage: `SELECT ROUND((SUM(CASE WHEN success = TRUE THEN 1 ELSE 0 END) * 100.0) / COUNT(*), 2) AS success_percentage FROM translation_wb_logs;`
};

export const addTranslationWbLog = `INSERT INTO translation_wb_logs (user_id, action, timestamp, success, file_options)
VALUES ($1, $2, $3, $4, $5)`;

export const listTranslationWbLogs = `SELECT * FROM translation_wb_logs`; 
/**TRANSLATION WB CMDS: END */