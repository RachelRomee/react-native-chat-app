import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
export const USER_LOADED_FROM_STORAGE = 'USER_LOADED_FROM_STORAGE';

export default () => {
  return (dispatch) => {
    AsyncStorage.getItem('chatUser')
      .then((result) => {
        console.log(result);
        dispatch({
          type: USER_LOADED_FROM_STORAGE,
          payload: JSON.parse(result)
        });
		Actions.chatRoom();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
