import { sortsKeys } from "../../src/constants/translationWbConstants";
import { TranslationWBListQuery } from "../../types";
import { runQuery } from "../db";
import { translationWbCols } from "../dbCols";
import { errorAddingRecord, errorGettingRecord, errorGettingRecordList, infoAddingRecord, infoGettingRecord, infoGettingRecordList } from "../dbMessages";
import { addTranslationWbLog, listTranslationWbLogs, translationWbStatCommds } from "../sqlCmnds";

export async function addTranslationWbRecord(userId: string, action: string, success: boolean, fileOptions: Record<string, any>) {
    await runQuery(addTranslationWbLog, infoAddingRecord + " translation_wb_logs", errorAddingRecord + " translation_wb_logs", [userId, action, new Date(), success, fileOptions])
}

export async function listTranslationWbRecords(reqQuery: TranslationWBListQuery) {
    let baseQuery = listTranslationWbLogs;

    const whereClauses = [];
    const values = [];

    for (const [filterName, filterValue] of Object.entries(reqQuery)) {
        if (sortsKeys.includes(filterName)) continue;

        let filterRelation = "=";
        let columnName = filterName;
        
        if (filterName === "startDate") {
            filterRelation = ">";
            columnName = "timestamp";
        }

        if (filterName === "endDate") {
            filterRelation = "<";
            columnName = "timestamp";
        }

        if (filterValue) {
            whereClauses.push(`${columnName} ${filterRelation} $${whereClauses.length + 1}`);
            values.push(filterValue);
        }
    }

    if (whereClauses.length > 0) {
        baseQuery += ' WHERE ' + whereClauses.join(' AND ');
    }

    if (reqQuery.sortBy && translationWbCols.includes(reqQuery.sortBy)) {
        const orderDirection = reqQuery?.sortOrder?.toUpperCase() ?? "ASC";
        baseQuery += ` ORDER BY ${reqQuery.sortBy} ${orderDirection}`;
    }

    const { rows } = await runQuery(baseQuery, infoGettingRecordList + " translation_wb_logs", errorGettingRecordList + " translation_wb_logs", values);
    
    return rows;    
}

async function getStatValue(statsData: StatsData, keyName: string, sqlCommand: string, valueKey?: string) {
    const { rows } = await runQuery(sqlCommand, infoGettingRecord + " translation_wb_logs", errorGettingRecord + " translation_wb_logs");
    statsData[keyName as keyof StatsData] = valueKey ? rows[0][valueKey] : rows;
}

export async function getTranslationWbStats() {
    const statsData = {} as StatsData;

    await Promise.all([
        getStatValue(statsData, "userCount", translationWbStatCommds.getNumOfUsers, "user_count"),
        getStatValue(statsData, "userCountLstMnth", translationWbStatCommds.getNumOfUsersLstMnth, "user_count"),
        getStatValue(statsData, "reqCountPerAction", translationWbStatCommds.getNumOfReqsPerAction),
        getStatValue(statsData, "reqCountLstMnth", translationWbStatCommds.getNumOfReqsLstMnth, "request_count"),
        getStatValue(statsData, "mostReqUsers", translationWbStatCommds.getTopUsersBasedOnReqNum),
        getStatValue(statsData, "successPercentage", translationWbStatCommds.getSuccessPersentage, "success_percentage")
    ]);

    return statsData;
}