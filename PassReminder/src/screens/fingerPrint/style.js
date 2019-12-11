import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      borderColor: '#000000',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    logo: {
      marginVertical: 45,
    },
    heading: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontSize: 21,
    },
    description: (error) => ({
      textAlign: 'center',
      color: error ? '#ea3d13' : '#a5a5a5',
      height: 65,
      fontSize: 18,
      marginVertical: 10,
      marginHorizontal: 20,
    }),
    buttonContainer: {
      padding: 20,
      alignItems: 'center'
    },
    buttonText: {
      color: '#000000',
      fontSize: 15,
      fontWeight: 'bold',
    },
    tituloModal: {
      color: '#555555',
      fontSize: 20,
    }
  });