<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="规格名称" :label-width="width">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="规格属性"
          :label-width="width"
          v-for="(item, index) in arrAttr"
          :key="index"
        >
          <el-row>
            <el-col :span="16">
              <el-input v-model="item.value" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" v-if="index == 0" @click="addAttr"
                >新增规格属性</el-button
              >
              <el-button type="danger" v-else @click="delAttr(index)">删除</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
            >
          </el-switch>
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
import { reqSpecsAdd,reqSpecsListOne,reqSpecsEdit } from "../../../util/request";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      // cateList: "cate/list",
    }),
  },
  components: {},
  data() {
    return { 
      width: "160px",
      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
      arrAttr: [
        {
          value: "",
        },
      ],
    };
  },
  methods: {

    // 重置
    empty() {
      this.form = {
        specsname: "",
        attrs: "",
        status: 1,
      };
    },

    // 隐藏弹框
    hide() {
      this.info.isShow = false;
    },

    // 添加
    add() {
     this.form.attrs =  JSON.stringify(this.arrAttr.map(item=>{return item.value}))
      reqSpecsAdd(this.form).then((res) => {
        this.requestSpecsList();
        this.empty();
        this.hide();
      });
    },
    // 新增属性
    addAttr() {
      this.arrAttr.push({
        value: "",
      });
    },
    delAttr(index) {
      this.arrAttr.splice(index, 1);
    },

    ...mapActions({
      requestSpecsList: "specs/requestSpecsList",
    }),
    // 获取一条数据
    look(id) {
      reqSpecsListOne({ id: id }).then((res) => {
        this.form = res.data.list[0];
        this.form.id = id;
       this.arrAttr =  JSON.parse(this.form.attrs).map(item=>{return {value:item}})
      });
    },
    update() {
      this.form.attrs =  JSON.stringify(this.arrAttr.map(item=>{return item.value}))
      reqSpecsEdit(this.form).then((res) => {
        this.requestSpecsList();
        this.hide();
      });
    },
  },
  mounted() {
    this.requestSpecsList();
  },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  border: 1px dashed #ccc;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
