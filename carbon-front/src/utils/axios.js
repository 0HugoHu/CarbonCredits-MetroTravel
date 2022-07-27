import axios from "axios";

const service = axios.create({
  baseURL: "//",
  timeout: 5000
});

service.interceptors.response.use(
  response => {
    const res = response.data;
    const status = response.status;

    if (status !== 200) {
      // Message({
      //   message: res.message || '发生错误',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return Promise.reject(new Error(res.message || "发生错误"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    let message = error.message;
    if (error.response) {
      if (error.response.data && error.response.data.message) {
        message = error.response.data.message;
      }

      if (error.response.status === 401) {
        // to re-login
        // MessageBox.confirm('登录状态已失效，您可以点击取消以留在当前页面，或者重新登录', 'Confirm logout', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
        return Promise.reject(error);
      }
    }

    // Message({
    //   message: message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default service;
