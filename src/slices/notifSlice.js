import { createSlice } from '@reduxjs/toolkit';

const getInitialNotif = () => {
  // getting notif list
  const localNotifList = window.localStorage.getItem('notifList');
  // if todo list is not empty
  if (localNotifList) {
    return JSON.parse(localNotifList);
  }
  window.localStorage.setItem('notifList', []);
  return [];
};

const initialValue = {
  filterStatus: 'all',
  notifList: getInitialNotif(),
};

export const notifSlice = createSlice({
  name: 'notif',
  initialState: initialValue,
  reducers: {
    addnotif: (state, action) => {
      state.notifList.push(action.payload);
      const notifList = window.localStorage.getItem('notifList');
      if (notifList) {
        const notifListArr = JSON.parse(notifList);
        notifListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('notifList', JSON.stringify(notifListArr));
      } else {
        window.localStorage.setItem(
          'notifList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
}
})

export const { addnotif } =
  notifSlice.actions;
export default notifSlice.reducer;