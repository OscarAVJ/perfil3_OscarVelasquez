import { useNavigation } from "@react-navigation/native";

const data = Object.freeze({
  name: 'Oscar Abel Velásquez Joyar',
  studentId: '20230404',
  groupAndSection: '2A',
});

export function useProfileScreen() {
  const navigation = useNavigation()
  const openShows = () => navigation.navigate('Shows');

  return {
    student: data,
    openShows,
  };
}
