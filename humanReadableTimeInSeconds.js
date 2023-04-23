function formatDuration (seconds) {
  if (seconds < 0) return "You can't turn back time"
  if (seconds === 0) return 'now'

  const sec = seconds % 60
  const min = (Math.floor((seconds / 3600) * 60)) % 60
  const hour = Math.floor((seconds / 3600) % 24);
  const day = Math.floor(seconds / (3600 * 24) % 365);
  const year = Math.floor(seconds / (3600 * 24 * 365));

  const components = [];

  if (year > 0) {
    components.push(year === 1 ? "1 year" : `${year} years`);
  }

  if (day > 0) {
    components.push(day === 1 ? "1 day" : `${day} days`);
  }

  if (hour > 0) {
    components.push(hour === 1 ? "1 hour" : `${hour} hours`);
  }

  if (min > 0) {
    components.push(min === 1 ? "1 minute" : `${min} minutes`);
  }

  if (sec > 0) {
    components.push(sec === 1 ? "1 second" : `${sec} seconds`);
  }

  if (components.length === 1) {
    return components[0];
  }

  const lastComponent = components.pop();
  return `${components.join(", ")} and ${lastComponent}`;
}

console.log(formatDuration(132030240))
