import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	outerContainer: {
	  flex: 1,
	},
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  paddingHorizontal: 20,
	  paddingTop: 20,
	},
	title: {
	  fontSize: 30,
	  alignSelf: 'center',
	  marginBottom: 30
	},
	buttonText: {
	  fontSize: 18,
	  color: 'white',
	  alignSelf: 'center'
	},
	buttonPrimary: {
	  height: 36,
	  backgroundColor: 'pink',
	  borderColor: 'pink',
	  borderWidth: 1,
	  borderRadius: 8,
	  marginBottom: 10,
	  alignSelf: 'stretch',
	  justifyContent: 'center'
	},
	author: {
		fontWeight: 'bold',
		marginTop: 10,
	},
	message: {

	}
});
