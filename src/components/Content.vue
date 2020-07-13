<template>
  <div>
    <div class="article">
      <div class="img">
        <img :src="articleList.image" alt="Img" />
      </div>
      <h3 class="title">{{articleList.title}}</h3>
      <div class="details">{{articleList.content}}</div>
      <div class="time">{{articleList.time}}</div>
    </div>
    <div class="toggle">
      <div class="pre"></div>
      <div class="next"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
      index: 0
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.id = this.$root.id;
      this.index = this.$root.index;
      this.articleList = this.$root.list[this.index];

      // 获取id： this.articleList.id
      // this.axios.get(`http://localhost:3000/content/${id}`).then(response => {
      //   this.articleList = response.data.data;
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  padding: 15px;
  background-color: #fff;
  .img {
    img {
      width: 100%;
    }
  }

  h3.title {
    color: #23b2dd;
    padding: 10px 0;
  }

  .details {
    letter-spacing: 0.1em;
    // text-indent: 2em;
  }

  .time {
    padding: 15px 0;
    color: #aaa;
  }
}

.toggle {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-top: 20px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  overflow: hidden;
  .pre,
  .next {
    position: relative;
    line-height: 40px;
    transition: all ease 0.6s;
    width: 48%;
    background-color: #fff;
  }
  .pre::before {
    content: "<上一篇";
    position: absolute;
    transition: all ease 0.6s;
    left: 50%;
    transform: translateX(-50%);
  }
  .next::before {
    content: "下一篇>";
    position: absolute;
    transition: all ease 0.6s;
    right: 50%;
    transform: translateX(50%);
  }
  .pre:hover,
  .next:hover {
    background-color: #23b2dd;
  }
  .pre:hover::before {
    color: white;
    left: 0;
    transform: translateX(0);
  }
  .next:hover::before {
    color: white;
    right: 0;
    transform: translateX(0);
  }
}
</style>