
export function getAge(birthDate='', fromDate='') {
  
    const bDate = new Date(birthDate)
    const fDate = new Date(fromDate)

    var age = fDate.getFullYear() - bDate.getFullYear()
    var month = fDate.getMonth() - bDate.getMonth()

    if (month < 0 || (month === 0 && fDate.getDate() < bDate.getDate()))
        age = age - 1


    return age
}

