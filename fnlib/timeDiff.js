
function calcTimeDifference(dtimeTotal) {
    const total = dtimeTotal
    const seconds = Math.floor( (total/1000) % 60 )
    const minutes = Math.floor( (total/1000/60) % 60 )
    const hours = Math.floor( (total/(1000*60*60)) % 24 )
    const days = Math.floor( total/(1000*60*60*24) % 365 )
    const years = Math.floor( total/(1000*60*60*24*365) )
    return { total, years, days, hours, minutes, seconds }
}

/**
 * 
 * @param {new Date(Date.now())} endtime 
 * @returns json
 */
export function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date())
    return calcTimeDifference(total)
}

/**
 * 
 * @param {new Date(Date.now())} starttime 
 * @returns json
 */
export function getTimeSince(starttime){
    const total =  Date.parse(new Date()) - Date.parse(starttime)
    return calcTimeDifference(total)
}