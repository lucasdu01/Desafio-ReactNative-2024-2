import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B1B4D',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFCE07',
    marginBottom: 50,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: 18,
    color: '#FFC107',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#FFCE07',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#FFF',
    backgroundColor: '#6E028C',
  },
  button: {
    width: '50%',
    height: 80,
    backgroundColor: '#FFCE07',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 40,
    color: '#3B1B4D',
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'row', // Alinha os itens horizontalmente
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: '#FFCE07',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'white',
    backgroundColor: '#6E028C',
  },
  inputSenha: {
    width: '90%',
    color: '#FFF',
  },
  eyeIcon: {
    width: 24,   // Largura do ícone de olho
    height: 24,  // Altura do ícone de olho
    tintColor: '#white', // Cor do ícone, pode ser ajustada conforme o tema

  },
});
  