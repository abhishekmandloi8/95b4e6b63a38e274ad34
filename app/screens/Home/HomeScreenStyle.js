import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    inputFormHeader: {
        marginTop: verticalScale(20),
        // justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: scale(90),
    },

    inputStyle: {
        borderBottomWidth: scale(0.3),
        borderRadius: scale(50),
        borderColor: 'skyblue',
        // paddingLeft: 20,
        width: width - 30,
        height: scale(50),
        alignSelf: 'center',
        marginTop: verticalScale(100),
        textAlign: 'center',
        fontSize: scale(20),
    },

    submitButton: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(150),
        height: scale(50),
        borderRadius: scale(25),
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
        marginVertical: scale(20),
        marginLeft: scale(5),
        color: '#241f1f'
    },

    search: {
        fontSize: scale(20),
        marginLeft: scale(20),
        marginVertical: scale(10),
        textAlign: 'left',
        fontWeight: 'bold',
    }
    
});
