type StatsData = {
    userCount: number,
    userCountLstMnth: number,
    reqCountPerAction: Record<string, number>[],
    reqCountLstMnth: number,
    mostReqUsers: Record<string, number>[],
    successPercentage: number
}