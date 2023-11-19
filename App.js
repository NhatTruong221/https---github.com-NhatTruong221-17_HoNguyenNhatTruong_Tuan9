import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';

/*function reducer(state = { count: 1}, action){
  switch (action.type){
    case "plus":
      return {
        count: state.count + 1,
      };
    case "minus":
      return {
        count: state.count - 1,
      };

    default: 
      return state;
  }
}*/

function reducer(state = [], action){
  switch (action.type){
    case "plus":
      return [...state, ' Nhật Trường']
    case "minus":
      return [...state, ' Đang học']

    default: 
      return state;
  }
}


var store = createStore(reducer);

console.log(store);
store.dispatch({type:'plus'});
console.log(store.getState());

/*store.dispatch({type:'plus'});
console.log(store.getState());*/

store.dispatch({type:'minus'});
console.log(store.getState());

export default function App() {
  return (
    <View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
