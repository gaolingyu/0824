<template>
  <div>
    <el-table :data="list" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column prop="id" label="分类编号" sortable width="180"> </el-table-column>
      <el-table-column prop="catename" label="分类名称" sortable width="180"> </el-table-column>
      <el-table-column label="图片" sortable width="180"> 
          <template slot-scope="scope">
         <img :src="$preImg+scope.row.img" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="status" label="分类状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1">启用</el-button>
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="分类操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { reqCateDel } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      list: "cate/list",
    }),
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    //编辑
    edit(id) {
      this.$emit("edit", id);
    },
    //删除
    del(id) {
      reqCateDel({ id: id }).then((res) => {
        alert("删除成功");
        this.requestCateList();
      });
    },
    ...mapActions({
      requestCateList: "cate/requestCateList",
    }),
  },
  mounted() {
    this.requestCateList();
  },
};
</script>
<style scoped>
img{
    width: 60px;
}
</style>
