export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  // { name: 'Tutorial', path: '/tutorial' },
  // { name: 'Predictions', path: '/predictions' },
  { name: 'Profile', path: '/profile' },
  {name: 'Matches',path: '/all-matches'},
  {name:'About',path:'/about'}
];

export const MOCK_MATCHES = [
  {
    id: '1',
    team1: { name: 'India', flag: 'https://flagcdn.com/w80/in.png' },
    team2: { name: 'Australia', flag: 'https://flagcdn.com/w80/au.png' },
    date: '2024-03-15',
    timeLeft: '2d 5h',
    venue: 'Melbourne Cricket Ground'
  },
  {
    id: '2',
    team1: { name: 'England', flag: 'https://flagcdn.com/w80/gb-eng.png' },
    team2: { name: 'South Africa', flag: 'https://flagcdn.com/w80/za.png' },
    date: '2024-03-16',
    timeLeft: '3d 8h',
    venue: 'Lords Cricket Ground'
  },
  {
    id: '3',
    team1: { name: 'New Zealand', flag: 'https://flagcdn.com/w80/nz.png' },
    team2: { name: 'Pakistan', flag: 'https://flagcdn.com/w80/pk.png' },
    date: '2024-03-17',
    timeLeft: '4d 2h',
    venue: 'Eden Park'
  }
];