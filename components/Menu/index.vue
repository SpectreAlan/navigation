<template>
  <div :class="['side-menu', collapse ? 'fold' : 'unfold']">
    <el-menu
      :collapse="collapse"
      default-active="2"
      class="menu-vertical"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item>
        <i class="el-icon-position" />
        <span slot="title">热门链接</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-sold-out" />
          <span>软件下载</span>
        </template>
        <el-menu-item>PC软件</el-menu-item>
        <el-menu-item>MAC软件</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "layout",
  computed: {
    ...mapGetters({
      collapse: 'app/collapse'
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">

.side-menu {
  transition: all 0.2s;
  .el-menu{
    border: none;
    background-color: transparent;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
}

.fold {
  width: 64px;
  .el-menu--collapse{
    width: 64px;
  }
}

.unfold {
  width: 200px;
}
</style>
