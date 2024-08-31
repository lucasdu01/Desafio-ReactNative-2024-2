
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
    fontSize: 55,
    fontWeight: 'bold',
    color: '#FFCE07',
    textAlign: 'center',
    marginTop: 120,
  },
  buttonAdd: {
    width: 30,
    height: 30,
    margin: 10,
  },
  sectionTabela: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'justify',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFC107',
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    color: '#FFC107',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFC107',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
  actionsCell: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
});