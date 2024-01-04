import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const tab = [];
  tab.push(new ClassRoom(19));
  tab.push(new ClassRoom(20));
  tab.push(new ClassRoom(34));
  return tab;
}
