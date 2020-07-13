<template>
  <div>
    <div class="blogGallery">
      <div class="imgBx" v-for="(item,index) in articleList" :key="item.id">
        <img :src="item.image" alt />
        <div class="mask"></div>
        <div class="passage">
          {{ item.content}}
          <span>By:{{item.author}}</span>
        </div>
        <go-content :list="articleList" :index="index">
          <div class="link"></div>
        </go-content>
        <div class="favor"></div>
      </div>
    </div>
    <div class="pagination">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import goContent from "./goContent.vue";
export default {
  components: {
    goContent
  },
  data() {
    return {
      articleList: []
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.axios.post("http://localhost:3000/info").then(response => {
        this.articleList = response.data.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1883867_qw840s5wk28.eot");
  src: url("//at.alicdn.com/t/font_1883867_qw840s5wk28.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1883867_qw840s5wk28.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1883867_qw840s5wk28.woff") format("woff"),
    url("//at.alicdn.com/t/font_1883867_qw840s5wk28.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1883867_qw840s5wk28.svg#iconfont") format("svg");
}
.blogGallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .imgBx {
    position: relative;
    display: flex;
    height: 300px;
    width: 50%;
    overflow: hidden;
    background-color: #fff;
    border: 5px solid #f6f6f6;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
      transition: all 0.8s ease;
    }

    .mask {
      position: absolute;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(to right bottom, #37ec7d, #129c8e);
      opacity: 0;
      transition: all 0.8s ease;
    }

    .passage {
      position: absolute;
      display: block;
      letter-spacing: 0.1em;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
      color: #fff;
      margin: calc(50% - 40px) 0;
      transform: translateY(-50%) scale(0);
      opacity: 0;
      transition: all 0.5s ease-in;
      padding: 0 10px;
      span {
        float: right;
        margin-top: 15px;
      }
    }
    .link,
    .favor {
      position: absolute;
      bottom: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
      opacity: 0;
      transform: scale(1.2);
      transition: all 0.3s ease;
    }
    .link {
      right: 50px;
    }

    .favor {
      right: 10px;
    }

    .link:before,
    .favor:before {
      position: absolute;
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #11998e;
      top: 0;
      left: 0;
      line-height: 30px;
      margin-left: 50%;
      transform: translateX(-50%);
      transition: all ease 0.4s;
    }

    .link:before {
      content: "\e610";
    }

    .favor:before {
      content: "\e607";
      font-size: 18px;
    }

    .link:hover,
    .favor:hover {
      background-color: #17a78b;
      box-shadow: 2px -2px 6px #fff, -2px 2px 6px #fff, 2px 2px 6px #fff,
        -2px -2px 6px #fff;
    }

    .link:hover::before,
    .favor:hover::before {
      color: #fff;
    }
  }

  .imgBx:hover .mask {
    opacity: 1;
  }

  .imgBx:hover img {
    transform: scale(2);
  }

  .imgBx:hover .passage {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  .imgBx:hover .link,
  .imgBx:hover .favor {
    opacity: 1;
    transform: scale(1);
  }
}
</style>