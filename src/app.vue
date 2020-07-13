<template>
  <div class="main">
    <div class="navigation">
      <div class="navBx">
        <div class="logo" @click="toHome">
          <img src="/images/logo.png" alt />
        </div>
        <!-- <div class="name" @click="toHome">FEI's BLOG</div> -->
        <div class="name" @click="toHome">BLOG</div>
        <input type="search" class="search" placeholder="Search..." />
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link to="/home">
              <a class="nav-link active">首页</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/edit">
              <a class="nav-link">编辑博客</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery">
              <a class="nav-link">博客长廊</a>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">关于</a>
          </li>
          <li class="nav-item login dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="/images/avator.jpg" alt />
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">设置</a>
              <a class="dropdown-item" href="#">退出登录</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <!-- 主体部分 -->
            <router-view :key="$route.path"></router-view>
          </div>
          <div class="col-md-4">
            <div class="latest">
              <div class="title">Latest Posts</div>
              <div class="postList" v-for="(item, index) in latestList" :key="item.id">
                <div class="img">
                  <img :src="item.image" alt="Image" />
                </div>
                <div class="info">
                  <go-content :list="latestList" :index="index">
                    <div class="name">{{item.title}}</div>
                  </go-content>
                  <!-- <div class="name">{{item.title}}</div> -->
                  <div class="time-author">{{time}} By:{{item.author}}</div>
                </div>
              </div>
            </div>
            <div class="gallery">
              <div class="title">Image Gallery</div>
              <div class="imgList">
                <div class="img" v-for="item in imgList" :key="item.id">
                  <img :src="item.image" alt="Image" />
                </div>
              </div>
            </div>
            <div class="calendar">
              <div class="dateNav">
                <div class="pre">&lt;</div>
                <div class="date"></div>
                <div class="back">&gt;</div>
              </div>
              <ul class="week">
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
              </ul>
              <ul class="day"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h4>社区</h4>
            <ul>
              <li>
                <a href="#">专栏博客</a>
              </li>
              <li>
                <a href="#">浏览博客</a>
              </li>
              <li>
                <a href="#">技术快讯</a>
              </li>
              <li>
                <a href="#">团队主页</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>社区</h4>
            <ul>
              <li>
                <a href="#">专栏博客</a>
              </li>
              <li>
                <a href="#">浏览博客</a>
              </li>
              <li>
                <a href="#">技术快讯</a>
              </li>
              <li>
                <a href="#">团队主页</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>社区</h4>
            <ul>
              <li>
                <a href="#">专栏博客</a>
              </li>
              <li>
                <a href="#">浏览博客</a>
              </li>
              <li>
                <a href="#">技术快讯</a>
              </li>
              <li>
                <a href="#">团队主页</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>关于</h4>
            <ul>
              <li>
                <a href="#">免责声明</a>
              </li>
              <li>
                <a href="#">联系我们</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cr">Copyright © 2020 Fei Fei. All rights reserved.</div>
    </footer>
  </div>
</template>

<script>
import goContent from "./components/goContent.vue";
export default {
  components: {
    goContent
  },
  data() {
    return {
      time: "",
      imgList: [],
      articleList: [],
      latestList: []
    };
  },

  mounted: function() {
    this.getlist();
  },
  methods: {
    getDate() {
      var date = new Date();
      var y = date.getFullYear();
      var m = (date.getMonth() + 1).toString().padStart(2, 0);
      var d = date
        .getDate()
        .toString()
        .padStart(2, 0);
      this.time = y + "-" + m + "-" + d;
    },
    toHome() {
      window.location.href = "/";
    },
    getlist() {
      this.axios.post("http://localhost:3000/info").then(response => {
        this.articleList = response.data.data;
        this.imgList = response.data.data;
        for (var i = 0; i < this.articleList.length; i++) {
          if (i >= this.articleList.length - 5) {
            this.latestList.unshift(this.articleList[i]);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation .navBx .login a img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>