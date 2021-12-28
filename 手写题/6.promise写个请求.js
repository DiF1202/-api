function getDatas(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((url = "url1111")) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

const promise = getDatas("url1122");

promise.then(
  (res) => {
    console.log("成功获取");
  },
  (err) => {
    console.log("获取失败");
  }
);
