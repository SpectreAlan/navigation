<template>
  <div class="default">
    <div class="header">
      <div class="left">
        <div :class="['logo', collapse ? 'fold' : 'unfold']">
          <img src="../static/images/logo.png" alt="logo">
          <span v-show="!collapse">喔喔搜酷</span>
        </div>

        <el-menu mode="horizontal">
          <el-menu-item>
            <i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
               @click="updateVal({key: 'collapse', val: !collapse})"/>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-s-home" />
            首页
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-postcard" />
            <a href="https://jszoo.com" target="_blank">个人博客</a>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-notebook-1" />
            <a href="https://note.jszoo.com" target="_blank">文档</a>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-c-scale-to-original" />
            <a href="https://jszoo.com" target="_blank">关于</a>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <span>每日一言</span>
        <i class="el-icon-search"/>
      </div>
    </div>
    <Nuxt/>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: "default",
  computed: {
    ...mapGetters({
      collapse: 'app/collapse'
    })
  },
  methods: {
    ...mapMutations({
      updateVal: 'app/updateVal'
    })
  }
}
</script>

<style scoped lang="less">
@import "static/css/reset.css";
.default {
  width: 100%;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      .el-menu{
        border: none;
        .el-menu-item{
          margin-right: 20px;
        }
      }

      .logo {
        line-height: 60px;
        display: flex;
        justify-content: space-between;

        img {
          height: 40px;
        }
      }

      .fold {
        width: 64px;
        img {
          margin: 0 auto;
        }
      }

      .unfold {
        width: 200px;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
