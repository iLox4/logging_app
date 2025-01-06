/**ERROR MESSAGES: START*/
export const errorMissingDBCredentials = 'ERROR: could not load postgres credentials! Make sure that postgres service is running and is bind to this app!';
export const errorInitializingDB = "ERROR: initializing DB failed:";
export const errorAddingRecord = "ERROR: failed adding record to the table:";
export const errorGettingRecord = "ERROR: failed getting records from the table:";
export const errorGettingRecordList = "ERROR: failed getting records from the table:"
/**ERROR MESSAGES: END*/

/**INFO MESSAGES: START*/
export const infoInitilizingDB = "INFO: tables created (or exist)";
export const infoAddingRecord = "INFO: added record to the table:";
export const infoGettingRecord = "INFO: get record from the table:";
export const infoGettingRecordList = "INFO: get records from the table:";
/**INFO MESSAGES: END*/