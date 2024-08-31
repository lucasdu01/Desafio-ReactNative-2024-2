import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 0,
    backgroundColor: '#3B1B4D',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#FFCE07',
    textAlign: 'center',
    marginTop: 100,
  },
  sectionIntroContent: {
    backgroundColor: '#3B1B4D',
    padding: 10,
    marginVertical: 10,
    borderTopColor: '#FFCE07',
    borderBottomColor: '#FFCE07',
    borderWidth: 1.5,
  },
  sectionIntro: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionDestaques: {
    borderTopWidth: 0,
    borderBottomColor: '#FFCE07',
    borderWidth: 1,
  },
  sectionDestaquesContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardTreino: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTreinosContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardTreinoPrincipal: {
    width: 130,
    height: 150,
    borderRadius: 25,
    marginBottom: 20,
  },
  cardTreinoSec: {
    width: 100,
    height: 125,
    borderRadius: 25,
    marginBottom: 20,
    opacity: 0.6,
  },

});