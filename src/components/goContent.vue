<template>
  <router-link :to="'/content/'+id+'/'+title">
    <!-- <router-link to="/content"> -->
    <div @click="handleClick">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["list", "index"],
  data() {
    return {
      id: 0,
      title: "",
      articleList: []
    };
  },
  mounted() {
    // this.getParams();
    this.getData();
  },
  methods: {
    handleClick() {
      this.$root.index = this.index;
      this.$root.list = this.list;
      this.articleList = this.$root.list[this.index];

      this.id = this.articleList.id;
      this.title = this.articleList.title;
    },
    getData() {
      const routeId = this.$route.params.id;
      this.axios
        .get(`http://localhost:3000/content/${routeId}`)
        .then(response => {
          response = JSON.stringify(response);
          this.articleList = response[1];
        });
    }
  }
};
</script>