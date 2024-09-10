import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
  },
  modalLayout: {
    margin: 20,
    backgroundColor: '#FFCE07',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    
  },
  buttonClose: {
    alignSelf: 'flex-end',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#3B1B4D",
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: "#3B1B4D",
  },
  input: {
    height: 40,
    borderColor: "none",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  videoContainer: {
    width: 300,
  },
  alertContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  alertIcon: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  alertText: {
    fontSize: 16,
    color: '#800080', // Roxo
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  yesButton: {
    backgroundColor: '#00FF00', // Verde
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  yesButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  noButton: {
    backgroundColor: '#FF0000', // Vermelho
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  noButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  confirmaButtonContainer:{
    backgroundColor: 'black',
    margin: 0,
  },
  confirmaButton: {
    backgroundColor: '#3B1B4D', 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
  },
  confirmaButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textVideo: {
    color: 'red',
    textDecorationLine: 'underline',
  }
});
