<template>
  <el-header height="80px">
    <el-row
      type="flex"
      justify="space-between"
      class="content"
    >
      <div class="left">
        <a
          href="/"
          class="link"
        >
          <img
            src="./images/cover.png"
            alt="LOGO"
            class="logo-img"
          >
        </a>
      </div>
      <div class="right">
        <el-menu
          :default-active="activeIndex"
          class="nav-menu"
          mode="horizontal"
          @select="handleSelect"
          text-color="#ffffff"
          background-color="#660099"
        >
          <el-menu-item index="1">
            <a href="/#about"><span>About</span></a>
          </el-menu-item>

          <el-submenu
            index="2"
            v-if="false"
          >
            <template slot="title">
              Members
            </template>

            <a
              href="/cmt"
              target="_blank"
            ><el-menu-item index="2-1">Centre Management Team</el-menu-item></a>
            <a
              href="/academic_staff"
              target="_blank"
            ><el-menu-item index="2-2">Academic Staff</el-menu-item></a>
            <a
              href="/students"
              target="_blank"
            ><el-menu-item index="2-3">Postdocs and PhD students</el-menu-item></a>
            <!-- <a href="/members" target="_blank"><el-menu-item index="2-4">PhD students</el-menu-item></a> -->
          </el-submenu>
          <el-menu-item index="2">
            <a href="#Members">Members</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#Research">Research</a>
            <!-- <template slot="title"><a href="/research" target="_blank">Research</a></template> -->
            <!-- <el-submenu index="3-4" popper-append-to-body="true">
              <template slot="title">Themes</template>
              <el-menu-item index="3-4-1">Platform design, Mechatronics and Control</el-menu-item>
              <el-menu-item index="3-4-2">Verification, Security and Trust</el-menu-item>
              <el-menu-item index="3-4-3">Human-Robot Interaction and Cognitive Robotics</el-menu-item>
              <el-menu-item index="3-4-4">AI, Machine Learning and Data</el-menu-item>
              <el-menu-item index="3-4-5">Ethics and Society</el-menu-item>
            </el-submenu>
          <el-menu-item index="3-1">Funded Projects</el-menu-item>
          <el-menu-item index="3-3">Robots & Equipments</el-menu-item> -->
            <!-- <a href="/projects" target="_blank"><el-menu-item index="3-2">Equipments</el-menu-item></a> -->
          </el-menu-item>

          <el-menu-item index="4">
            <a href="#Collaboration">Collaboration</a>
          </el-menu-item>
          <!-- <el-submenu index="4">
            <template slot="title"><a href="/collaboration" target="_blank">Collaboration</a></template>
            <a href="/collaboration" target="_blank"><el-menu-item index="4-1">Nuclear and Extreme Environments</el-menu-item></a>
            <a href="/collaboration" target="_blank"><el-menu-item index="4-2">Cobots and Industry 4.0</el-menu-item></a>
            <a href="/collaboration" target="_blank"><el-menu-item index="4-3">Healthcare and Education</el-menu-item></a>
            <a href="/collaboration" target="_blank"><el-menu-item index="4-4">Agritech</el-menu-item></a>
            <a href="/collaboration" target="_blank"><el-menu-item index="4-5">Autonomous Vehicles</el-menu-item></a> -->
          <!-- </el-submenu> -->
          <el-menu-item index="5">
            <a href="/#News">News & Event</a>
          </el-menu-item>
          <el-menu-item index="6">
            <a href="/#contact-us">Contact Us</a>
          </el-menu-item>
        </el-menu>
      </div>
    </el-row>

    <div class="drawer">
      <i
        class="close el-icon-circle-close"
        @click="showDrawer"
      />
      <el-row class="drawer-content">
        <el-col
          class="pro-img"
          :span="6"
        >
          <img
            src="./images/product.jpeg"
            alt="PRODUCTS"
            class="img"
          >
        </el-col>
        <el-col
          class="pro-list"
          :span="6"
        >
          <div class="pro-con">
            <p class="list-title high-light">
              <a
                href="/"
                class="link"
              >Overview</a>
            </p>
            <p class="list-title">
              Subtitle 1
            </p>
            <p class="list-item">
              Item 1
            </p>
            <p class="list-item">
              Item 2
            </p>
          </div>
        </el-col>
        <el-col
          class="pro-list pad"
          :span="6"
        >
          <div class="pro-con">
            <p class="list-title">
              Subtitle 2
            </p>
            <p class="list-item">
              Item 1
            </p>
            <p class="list-item">
              Item 2
            </p>
          </div>
        </el-col>
        <el-col
          class="pro-list pad"
          :span="6"
        >
          <div class="pro-con">
            <p class="list-title">
              Subtitle 3
            </p>
            <p class="list-item">
              Item 1
            </p>
            <p class="list-item">
              Item 2
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    const me = this
  },
  methods: {
    handleSelect: function (key, keyPath) {

    },
    showDrawer: function () {
      $('.drawer').slideToggle(500)
    }
  }
}
</script>

<style lang="less">
@themeColor: #660099;
a{text-decoration:none!important;}

.el-dropdown-menu{
  .el-dropdown-menu__item{
    display: flex;
    flex-direction: row;
    align-content: center;
    height: 50px;
    .icon{
      width: 30px;
    }
  }
}
.el-menu--horizontal{
  .el-menu-item{
    background-color: transparent!important;
    &.is-active{
      color: #fff!important;
      border-bottom: 4px #7b22aa solid!important;
      background-color: @themeColor;
      .el-submenu__title{
        color: #fff!important;
        border-bottom: 4px #7b22aa solid!important;
        background-color: @themeColor;
      }
    }
  }
  .el-menu{
    &.el-menu--popup{
      .el-menu-item{
        &.is-active{
          color: #fff!important;
          border-bottom: 4px #7b22aa solid!important;
          background-color: @themeColor;
          .el-submenu__title{
            color: #fff!important;
            border-bottom: 4px #7b22aa solid!important;
            background-color: @themeColor;
          }
        }
      }
    }
  }
  .el-submenu{
    .el-submenu__title{
      background-color: transparent!important;
    }
    &.is-active{
      .el-submenu__title{
        color: #fff!important;
        border-bottom: 4px #7b22aa solid!important;
        background-color: @themeColor;
      }
    }
  }
}
.el-header{
  width: 100%;
  top: 0;
  background: rgba(102,0,153,0.7);
  border: 1px solid transparent;
  position: relative;
  padding: 0;
  .content{
    min-width: 750px;
    width: auto;
    margin: 5px auto;
    height: 70px;
    padding: 0 20px;
    .left{
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .logo-img{
        height: 50px;
      }
      .com-name{
        .name{
          font-size: 20px;
        }
        .slogan{
          font-size: 10px;
        }
      }
    }
    .right{
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .nav-menu{
        background: transparent!important;
        border-bottom: none;
      }
    }
  }
  .drawer{
    width: 100%;
    height: 300px;
    background: #fff;
    display: none;
    position: absolute;
    top: 80px;
    z-index: 999;
    .close{
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      cursor: pointer;
      color: @themeColor;
    }
    .drawer-content{
      width: 1200px;
      height: 100%;
      padding: 20px;
      margin: 0 auto;
      opacity: 1;
      .pro-img{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .img{
          width: 100%;
        }
      }
      .pro-list{
        font-family: Arial,Helvetica,sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        .pro-con{
          .list-title{
            font-size: 18px;
            font-weight: bolder;
            margin: 20px 0;
            color: #444;
            .link{
              text-decoration: none;
              color: #444;
            }
            &.high-light{
              font-size: 20px;
            }
          }
          .list-item{
            font-size: 16px;
            cursor: pointer;
            margin: 20px 0;
            .link{
              text-decoration: none;
              color: #777;
            }
          }
        }
        &.pad{
          padding-top: 40px;
        }
      }
    }
  }
}
</style>
