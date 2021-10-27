import { StyleSheet } from 'react-native';

const borderWidth = 3;
const margin = 1;
const maxContainerHeight = 100;
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    borderRadius: maxContainerHeight / 2,
    borderRightWidth: 0,
    borderWidth,
    margin,
  },
  containerRTL: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    borderRadius: maxContainerHeight / 2,
    borderLeftWidth: 0,
    borderWidth,
    margin,
  },
  icon: {
    alignItems: 'center',
    borderRadius: maxContainerHeight / 2,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: -borderWidth,
  },
  innerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
  title: {},
  secondaryIcon:{
    width: 23,
    height: 10,
    marginRight: 20
  }
});

export default styles;
export { borderWidth, margin };
