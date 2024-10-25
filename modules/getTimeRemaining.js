

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor( (total/1000) % 60 )
    const minutes = Math.floor( (total/1000/60) % 60 )
    const hours = Math.floor( (total/(1000*60*60)) % 24 )
    const days = Math.floor( total/(1000*60*60*24) % 365 )
    const years = Math.floor( total/(1000*60*60*24*365) )
  
    return { total, years, days, hours, minutes, seconds }
}

export default getTimeRemaining