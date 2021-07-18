import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  Container: {
    padding: 16,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Search: {
    height: hp('9%'),
    width: wp('70%'),
    marginBottom: wp('3%'),
  },

  Button: {
    height: hp('6.5%'),
    width: wp('20%'),
    backgroundColor: '#11B621',
    marginLeft: wp('2%'),

    borderRadius: hp('0.8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('5%'),
    textAlign: 'center',
  },
});
