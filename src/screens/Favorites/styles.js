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
    paddingHorizontal: 20,
  },
  SubTitle: {
    fontSize: 20,
    color: '#FFF',
    paddingHorizontal: 20,
  },
  ListContainer: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    height: hp('15%'),
    width: wp('90%'),
    marginBottom: wp('2%'),
    flexDirection: 'row',
    borderRadius: 5,
  },
  IconStart: {
    marginTop: hp('2%'),
    alignItems: 'flex-end',
    width: wp('10%'),
    padding: 16,
  },
  Poster: {
    width: wp('20%'),
    margin: hp('1%'),
    marginLeft: wp('3%'),
    color: '#007FF8',
  },
  Info: {
    marginTop: hp('3%'),
    marginLeft: wp('3%'),
    width: wp('45%'),
  },
  ListTitle: {
    fontSize: 15,
  },
});
