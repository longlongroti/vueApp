<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <h1>浏览器存储</h1>
    <div>
      <ol>
        <li>
          生命周期：
          <ul>
            <li>
              cookie如果不设置有效期，那么就是临时存储（存储在内存中），是会话级别的，会话结束后，cookie也就失效了，如果设置了有效期，那么cookie存储在硬盘里，有效期到了，就自动消失了。
            </li>
            <li>
              localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。localStorage除非主动删除数据，否则数据永远不会消失。
            </li>
            <li>
              sessionStorage仅在当前会话下有效。sessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。
            </li>
          </ul>
        </li>
        <li>
          网络流量：cookie的数据每次都会发给服务器端，而localstorage和sessionStorage不会与服务器端通信，纯粹为了保存数据，所以，webstorage更加节约网络流量。
        </li>
        <li>
          大小限制：cookie大小限制在4KB，非常小；localstorage和sessionStorage在5M
        </li>
        <li>
          安全性：WebStorage不会随着HTTPheader发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获。
        </li>
      </ol>
    </div>
    <button @click="saveData">click to save data to localStorage</button>
    <button @click="retrieveData">
      click to retrieve data from localStorage
    </button>
    <button @click="deleteData">click to delete data from localStorage</button>
    <hr />
    <button @click="saveData1">click to save data to sessionStorage</button>
    <button @click="retrieveData1">
      click to retrieve data from sessionStorage
    </button>
    <button @click="deleteData1">
      click to delete data from sessionStorage
    </button>
  </div>
</template>

<script>
let p = { name: "张三", age: 19 };
export default {
  name: "browser_storage432423",
  methods: {
    saveData() {
      window.localStorage.setItem("key", JSON.stringify(p));
    },
    retrieveData() {
      alert(JSON.parse(window.localStorage.getItem("key")));
    },
    deleteData() {
      // window.localStorage.removeItem("key")
      window.localStorage.clear();
    },
    saveData1() {
      window.sessionStorage.setItem("key", JSON.stringify(p));
    },
    retrieveData1() {
      alert(JSON.parse(window.sessionStorage.getItem("key")));
    },
    deleteData1() {
      // window.localStorage.removeItem("key")
      window.sessionStorage.clear();
    },
  },
};
</script>

<style>
</style>