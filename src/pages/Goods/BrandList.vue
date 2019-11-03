<template>
  <div class="brandlist-main">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="品牌名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="品牌首字母：">
        <el-input v-model="form.first_letter"></el-input>
      </el-form-item>
      <el-form-item label="品牌LOGO：">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="品牌专区大图：">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="品牌故事：">
        <el-input type="textarea" v-model="form.story"></el-input>
      </el-form-item>
      <el-form-item label="排序方式">
        <el-select v-model="form.rank" placeholder="请选择排序方式">
          <el-option label="正序" value="0"></el-option>
          <el-option label="倒序" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否显示：">
        <el-radio-group v-model="form.is_show">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button type="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: " brandlist-main",
  data() {
    return {
      form: {
        name: "", //品牌名称
        first_letter: "", //品牌首字母
        story: "", //品牌故事
        rank: "", //排序方式
        is_show: "", //是否显示
        dialogImageUrl: "",
        dialogVisible: false
      }
    };
  },
  methods: {
    onSubmit() {
      //  name: "", //品牌名称
      //   first_letter: "", //品牌首字母
      //   story: "", //品牌故事
      //   rank: "", //排序方式
      //   is_show: "", //是否显示
      console.table({
        品牌名称: this.form.name,
        品牌首字母: this.form.first_letter,
        品牌故事: this.form.story,
        排序方式: this.form.rank,
        是否显示: this.form.is_show
      });
    },

    handlePreview(file) {
      console.log("上传的logo：", file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.brandlist-main {
  width: 50%;
  text-align: left;
  background: #fff;
  padding: 15px;
}
</style>