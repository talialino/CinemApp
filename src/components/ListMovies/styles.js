import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    height: hp('12%'),
    width: wp('90%'),
    marginBottom: wp('2%'),
    flexDirection: 'row',
  },
  IconStart: {
    marginTop: hp('2%'),
    alignItems: 'flex-end',
    width: wp('19%'),
    padding: 16,
  },
  IconCircle: {
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
    padding: 1,
    color: '#007FF8',
  },
  Info: {
    marginTop: hp('3%'),
    marginLeft: wp('3%'),
    width: wp('60%'),
  },
  Title: {
    fontSize: 15,
  },
});
