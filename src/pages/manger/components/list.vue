<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="用户编号" sortable width="180"> </el-table-column>
      <el-table-column prop="username" label="用户名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="roleid" label="所属角色" sortable width="180">
      </el-table-column>
      <el-table-column prop="status" label="角色状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1">启用</el-button>
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="角色操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页效果 -->
    <el-pagination :current-page="page" :page-size="size" layout="prev, pager, next" :total="total" @current-change="changeCurrentPage"> </el-pagination>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { reqUserDel } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      list: "manger/list",
      total:"manger/total",
      page:"manger/page",
      size:"manger/size"
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
      reqUserDel({ uid: id }).then((res) => {
        alert("删除成功");
        this.requestUserList();
        // 重新获取总数
        this.requestUserCount(); 
        // 强制页面回到第一页
        this.changeCurrentPages(1);
      });
    },
    ...mapActions({
      requestUserList: "manger/requestUserList",
      requestUserCount:"manger/requestUserCount",
      changeCurrentPages:"manger/changeCurrentPages"
    }),
    // 修改当前页码显示对应内容
    changeCurrentPage(p){
        // 根据当前第几页请求数据，修改vuex中数据
        console.log(p);
        this.changeCurrentPages(p)
    },
  },
  mounted() {
    this.requestUserList();
    this.requestUserCount(); 
  },
};
</script>
<style></style>
