<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="width">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="角色权限" :label-width="width">
          <el-tree :data="menuList" show-checkbox node-key="id" ref="tree" :props="{ children: 'children', label: 'title' }"> </el-tree>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch v-model="form.status" active-color="#13ce66" inactive-color="#ff4949" :active-value="1" :inactive-value="2"> > </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { reqRoleAdd, reqRoleListOne, reqRoleEdit } from "../../../util/request";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      menuList: "menu/list",
    }),
  },
  components: {},
  data() {
    return {
      width: "160px",
      // isShow: false,
      form: {
        rolename: "",
        menus: [],
        status: 1,
      },
      // data: [
      //   {
      //     id: 1,
      //     label: "一级 1",
      //     children: [
      //       {
      //         id: 4,
      //         label: "二级 1-1",
      //         children: [
      //           {
      //             id: 9,
      //             label: "三级 1-1-1",
      //           },
      //           {
      //             id: 10,
      //             label: "三级 1-1-2",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     id: 2,
      //     label: "一级 2",
      //     children: [
      //       {
      //         id: 5,
      //         label: "二级 2-1",
      //       },
      //       {
      //         id: 6,
      //         label: "二级 2-2",
      //       },
      //     ],
      //   },
      // ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    // 重置
    empty() {
      this.form = {
        rolename: "",
        menus: [],
        status: 1,
      };
      this.form.menus = this.$refs.tree.setCheckedKeys([]);
    },
    // 隐藏弹框
    hide(){
      this.info.isShow = false
    },
    // 添加
    add() {
      // 由于后台要的是字符串数组，而获取到的是数组，所以stringify转一下
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleAdd(this.form).then((res) => {
        this.requestRoleList();
        this.empty()
        this.hide()
      });
    },

    ...mapActions({
      requestMenuList: "menu/requestMenuList",
      requestRoleList: "role/requestRoleList",
    }),
    // 获取一条数据
    look(id) {
      reqRoleListOne({ id: id }).then((res) => {
        this.form = res.data.list;
        this.form.menus = this.$refs.tree.setCheckedKeys(JSON.parse(res.data.list.menus));
        this.form.id = id;
      });
    },
    update() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleEdit(this.form).then((res) => {
        this.requestRoleList();
        this.hide()
      });
    },
  },
  mounted() {
    if (this.menuList.length == 0) {
      this.requestMenuList();
    }
    console.log(this.menuList);
  },
};
</script>
<style></style>
