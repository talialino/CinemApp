import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1F2923',
  },
  Title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: hp('7%'),
    paddingHorizontal: 16,
  },
  SubTitle: {
    fontSize: 20,
    color: '#FFF',
    paddingHorizontal: 16,
  },
});
