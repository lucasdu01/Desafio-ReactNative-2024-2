import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalView: {
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
    width: '80%',
    height: "35%",
    marginTop: 20,
    backgroundColor: "white",
  },
  webview: {
    flex: 1,
  },
});
