<template>
  <div class="goodlist-main">
    <!-- <div>{{methodTest()}}</div>
    <div>{{computedTest}}</div>-->
    <el-card class="filter-container" shadow="never">
      <div style="overflow:hidden;  text-align: left;">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float: right" @click="handleSearchList()" type="primary" size="small">查询结果</el-button>
        <el-button
          style="float: right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small"
        >重置</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="listQuery.keyword" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品货号：">
            <el-input style="width: 203px" v-model="listQuery.productSn" placeholder="商品货号"></el-input>
          </el-form-item>
          <el-form-item label="商品分类：">
            <el-cascader clearable v-model="selectProductCateValue" :options="productCateOptions"></el-cascader>
          </el-form-item>
          <el-form-item label="商品品牌：">
            <el-select v-model="listQuery.brandId" placeholder="请选择品牌" clearable>
              <el-option
                v-for="item in brandOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态：">
            <el-select v-model="listQuery.publishStatus" placeholder="全部" clearable>
              <el-option
                v-for="item in publishStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态：">
            <el-select v-model="listQuery.verifyStatus" placeholder="全部" clearable>
              <el-option
                v-for="item in verifyStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <div class="good-list-table">
      <div class="good-list-header">
        <el-card class="operate-container" shadow="never">
          <span style="float: left;">数据列表</span>
          <el-button
            class="btn-add"
            @click="handleAddProduct()"
            size="mini"
            type="primary"
            style="float: right;"
          >添加</el-button>
        </el-card>
      </div>
      <div class="good-list-content">
        <el-table :data="tableData3" height="250" border style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="编号" width="80">
            <template slot-scope="scope">{{scope.row.number}}</template>
          </el-table-column>
          <el-table-column label="商品图片" align="center" width="100">
            <template slot-scope="scope">
              <img style="height: 80px" :src="scope.row.imgUrl" />
            </template>
          </el-table-column>
          <el-table-column label="商品名称" width="120">
            <template slot-scope="scope">{{scope.row.name}}</template>
          </el-table-column>
          <el-table-column label="价格" width="100">
            <template slot-scope="scope">{{scope.row.price}}</template>
          </el-table-column>
          <el-table-column prop="statu" label="状态" width="180">
            <ul>
              <li>
                上架
                <el-switch
                  v-model="value1"
                  on-color="#00A854"
                  on-text="启动"
                  on-value="1"
                  off-color="#F04134"
                  off-text="禁止"
                  off-value="0"
                  @change="changeSwitch(value1)"
                ></el-switch>
              </li>
              <li>
                限时
                <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </li>
              <li>
                积分抢
                <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </li>
            </ul>
          </el-table-column>
          <el-table-column label="排序" width="80">
            <template slot-scope="scope">{{scope.row.desc}}</template>
          </el-table-column>
          <el-table-column label="库存" width="100">
            <template slot-scope="scope">{{scope.row.repertory}}</template>
          </el-table-column>
          <el-table-column label="销量" width="100">
            <template slot-scope="scope">{{scope.row.sales}}</template>
          </el-table-column>
          <el-table-column label="操作" width="260" align="center">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleShowProduct(scope.$index, scope.row)">查看</el-button>
              <el-button size="mini" @click="handleUpdateProduct(scope.$index, scope.row)">编辑</el-button>

              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
// 引入基本模板
const defaultListQuery = {
  keyword: null,
  pageNum: 1,
  pageSize: 5,
  publishStatus: null,
  verifyStatus: null,
  productSn: null,
  productCategoryId: null,
  brandId: null
};
export default {
  name: "goodlist-main",
  data() {
    return {
      message: "我是消息",
      listQuery: Object.assign({}, defaultListQuery),
      selectProductCateValue: null,
      publishStatusOptions: [
        {
          value: 1,
          label: "上架"
        },
        {
          value: 0,
          label: "下架"
        }
      ],
      verifyStatusOptions: [
        {
          value: 1,
          label: "审核通过"
        },
        {
          value: 0,
          label: "未审核"
        }
      ],
      value1: true,
      value2: true,
      value3: true,
      GoodList: "",
      tableData3: [
        {
          number: 1,
          imgUrl:
            "https://img.picbling.cn/8e5adbb5-8a88-4eae-829a-b2dbaf804157.jpg",
          name: "眼霜",
          price: 300.0,
          statu: {},
          desc: 1,
          repertory: 5500,
          sales: 1000
        },
        {
          number: 2,
          imgUrl:
            "https://img.picbling.cn/8e5adbb5-8a88-4eae-829a-b2dbaf804157.jpg",
          name: "化妆品",
          price: 500.0,
          statu: {},
          desc: 1,
          repertory: 500,
          sales: 10000
        }
      ]
    };
  },
  computed: {
    computedTest() {
      return "现在我用的是computed";
    }
  },
  methods: {
    methodTest() {
      return "现在我用的是methods";
    },
    // 编辑
    handleUpdateProduct(index, row) {
      this.$router.push({ path: "/pms/updateProduct", query: { id: row.id } });
    },
    // 查看
    handleShowProduct(index, row) {
      console.log("handleShowProduct", row);
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm("是否要进行删除操作?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        let ids = [];
        ids.push(row.id);
        this.updateDeleteStatus(1, ids);
      });
    },
    // 查询
    handleSearchList() {
      // this.listQuery.pageNum = 1;
      // this.getList();
    },
    // 重置
    handleResetSearch() {
      // this.selectProductCateValue = [];
      // this.listQuery = Object.assign({}, defaultListQuery);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    changeSwitch(data) {
      this.value1 = !data;
      console.log("data", this.value1);
    },
    // 商品列表添加
    handleAddProduct() {
      this.$router.push({ path: "/pms/addProduct" });
    }
  }
};
// place1 = '镜像世界的'
// unit = '天'
// place2 = '现实世界的'
// action = '等于'
// number1 = 1
// number2 = 666

// print(place1+str(number1)+unit+action+place2+str(number2）+unit)
</script>
