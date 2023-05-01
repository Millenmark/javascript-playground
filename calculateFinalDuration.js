function calculateFinalDuration(hours, mins, secs, speed) {
  let initialDuration = (hours * 3600) + (mins * 60) + secs
  let finalDuration = initialDuration / speed

  let finalHours = Math.floor(finalDuration / 3600)
  let finalMins = Math.floor((finalDuration % 3600) / 60)
  let finalSecs = Math.floor(finalDuration % 60)

  return `${finalHours}:${finalMins}:${finalSecs}`
}

console.log(calculateFinalDuration(9, 44, 42, 1.5))
