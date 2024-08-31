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
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFCE07',
    textAlign: 'center',
    marginTop: 100,
  },
  section: {
    backgroundColor: '#3B1B4D',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderTopColor: '#FFCE07',
    borderBottomColor: '#FFCE07',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFCE07',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionContent: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  phoneItem: {
    fontSize: 18,
    color: '#FFF',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});