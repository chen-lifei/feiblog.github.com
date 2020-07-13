<template>
  <div>
    <form method="post" action="http://localhost:3000/postdata">
      <input type="hidden" :value="date" name="time" />
      <div class="form-group row">
        <label for="title" class="col-md-2 col-form-label">标题：</label>
        <div class="col-md-10">
          <input
            type="text"
            class="form-control"
            id="title"
            autofocus="autofocus"
            required="required"
            name="title"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="author" class="col-md-2 col-form-label">作者：</label>
        <div class="col-md-10">
          <input
            type="text"
            class="form-control"
            id="author"
            autofocus="autofocus"
            required="required"
            name="author"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="selectCover" class="col-md-2 col-form-label" name="cover">封面图片：</label>
        <div class="col-md-10">
          <input
            type="file"
            class="form-control-file"
            id="selectCover"
            v-on:change="uploadFile()"
            required="required"
          />
        </div>
      </div>
      <img src alt class="preview" id="preview" />
      <div class="form-group" row>
        <label for="textarea">编辑博客内容：</label>
        <textarea class="form-control" id="textarea" rows="30" required="required" name="content"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" id="submit" @click="getDate()">发布博客</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ""
    };
  },
  methods: {
    uploadFile() {
      var that = this;
      const file = document.getElementById("selectCover");
      const fileObj = file.files[0];
      const windowURL = window.URL || window.webkitURL;
      const img = document.getElementById("preview");
      if (file && fileObj) {
        const dataURl = windowURL.createObjectURL(fileObj);
        img.setAttribute("src", dataURl);
        img.style.height = "210px";
        img.style.width = "320px";
      }
    },
    getDate() {
      const date = new Date();
      const y = date.getFullYear();
      const mon = date.getMonth() + 1;
      const d = date.getDate();
      this.date = y + "-" + mon + "-" + d;
      // console.log(this.date);
      this.$router.push({ path: "/home" });
    }
  }
};
</script>