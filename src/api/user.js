const user = {
  get: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const data = window.localStorage.getItem('user');
        res(data);
      }, 1500);
    });
  },
  set: payload => {}
};

export default user;
