<template>
  <div>
    <div class="content">
      <div class="row">
        <div class="col-md-6">
          <article v-for="(item,index) in articleList1" :key="item.id">
            <div class="img">
              <img :src="item.image" alt="Image" />
            </div>
            <go-content :list="articleList1" :index="index">
              <h4>{{item.title}}</h4>
            </go-content>
            <div class="content">{{item.content}}</div>
            <div class="info">
              <div class="time">{{time}}</div>
              <div class="author">
                Author：
                <span>{{item.author}}</span>
              </div>
            </div>
            <div class="operation">
              <button type="button" class="read btn btn-outline-primary">
                <go-content :list="articleList1" :index="index">阅读详情</go-content>
              </button>
              <button type="button" class="delete btn btn-secondary">删除</button>
            </div>
          </article>
        </div>
        <div class="col-md-6">
          <article v-for="(item, index) in articleList2" :key="item.id">
            <div class="img">
              <img :src="item.image" alt="Image" />
            </div>
            <go-content :list="articleList2" :index="index">
              <h4>{{item.title}}</h4>
            </go-content>
            <div class="content">{{item.content}}</div>
            <div class="info">
              <div class="time">{{item.time}}</div>
              <div class="author">
                Author：
                <span>{{item.author}}</span>
              </div>
            </div>
            <div class="operation">
              <button type="button" class="read btn btn-outline-primary">
                <go-content :list="articleList2" :index="index">阅读详情</go-content>
              </button>
              <button type="button" class="delete btn btn-secondary">删除</button>
            </div>
          </article>
        </div>
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
      time: "",
      articleList: [],
      articleList1: [],
      articleList2: []
    };
  },
  mounted() {
    this.getDate();
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
    getlist() {
      this.axios.post("http://localhost:3000/info").then(response => {
        this.articleList = response.data.data;
        for (var i = 0; i < this.articleList.length; i++) {
          if (i % 2 == 0) {
            this.articleList1.push(this.articleList[i]);
          } else {
            this.articleList2.push(this.articleList[i]);
          }
        }
      });
    }
  }
};
</script>