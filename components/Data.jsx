export const teams = [
  { place: 1, name: 'Bluffton University', logo: 'BU', today: '+4', total: '+292', thru: '15-17', color: 'bg-fairway-600' },
  { place: 2, name: 'Heidelberg', logo: 'HU', today: '+7', total: '+295', thru: '14-17', color: 'bg-neutral-800' },
  { place: 3, name: 'Ohio Northern', logo: 'ONU', today: '+9', total: '+297', thru: '13-17', color: 'bg-neutral-700' },
  { place: 4, name: 'Capital', logo: 'CAP', today: '+11', total: '+299', thru: '12-16', color: 'bg-neutral-600' }
];

export const players = [
  { place: 1, name: 'Dylan Fiveash', team: 'Bluffton', score: '-2', total: '70', thru: '16' },
  { place: 2, name: 'Noah Macke', team: 'Bluffton', score: 'E', total: '72', thru: '15' },
  { place: 3, name: 'Carter Hill', team: 'Heidelberg', score: '+1', total: '73', thru: '17' },
  { place: 4, name: 'Mason Reed', team: 'ONU', score: '+2', total: '74', thru: '14' },
  { place: 5, name: 'Jack Lawson', team: 'Capital', score: '+3', total: '75', thru: '13' }
];

export const holes = Array.from({ length: 18 }, (_, i) => ({
  hole: i + 1,
  par: [4,5,3,4,4,3,5,4,4,4,5,3,4,4,5,3,4,4][i],
  yards: [410,532,176,397,421,188,548,402,431,398,540,165,388,455,522,181,407,445][i]
}));
