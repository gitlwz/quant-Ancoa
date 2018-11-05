
const status = ['Unassigned', 'Open', 'Resolved', 'Closed']

let data = [];

function randomInt(max, min=0) {
  return parseInt(Math.random() * (max + 1), 10) + parseInt(min, 10);
}

for (let index = 0; index < 90; index++) {
  data.push({
    key: index,
    id: index + 1,
    status: status[randomInt(3)],
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: randomInt(100),
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
  })
}

export default data;
