export const getRoleColor = (role) => {
  switch (role) {
    case 'Batsman':
      return 'bg-gradient-to-br from-blue-50 to-blue-100';
    case 'Bowler':
      return 'bg-gradient-to-br from-blue-100 to-blue-200';
    case 'All-rounder':
      return 'bg-gradient-to-br from-blue-200 to-blue-300';
    case 'Wicket-keeper':
      return 'bg-gradient-to-br from-blue-300 to-blue-400';
    default:
      return 'bg-gradient-to-br from-gray-50 to-gray-100';
  }
};