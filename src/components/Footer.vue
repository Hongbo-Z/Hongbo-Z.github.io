<template>
  <el-footer height="300px">
    <el-row class="foot-container" :gutter="20">
      <el-col :span="8" class="logo">
        <img src="./images/cover.png" alt="LOGO" class="icon">
      </el-col>
      <el-col :span="8" class="product border">
        <div class="content">
          <p class="pro-title">Quick Links</p>
          <div class="pro-list">
            <p class="pro-item"><a href="https://hotrobotics.co.uk" class="link" target="_blank">Hot Robotics: A National Nuclear User Facility</a></p>
            <p class="pro-item"><a href="https://rainhub.org.uk/" class="link" target="_blank">RAIN Hub</a></p>
            <p class="pro-item"><a href="https://nuclearrobots.org/" class="link" target="_blank">RNE Programme Grant</a></p>
            <p class="pro-item"><a href="https://www.torone-project.com/" class="link" target="_blank">TORONE Project</a></p>
            <p class="pro-item"><a href="https://www.dalton.manchester.ac.uk/" class="link" target="_blank">Dalton Cumbrian Facility</a></p>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="contact border">
        <div class="content">
          <p class="con-title">LOCATION</p>
          <div class="con-addr">
            Kilburn Building <br>
            University of Manchester <br>
            Oxford Road <br>
            Manchester <br>
            M13 9PL
          </div>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
@themeColor:#fff;
.el-footer{
  height: 300px;
  width: 100%;
  background: @themeColor;
  color: #6b3090;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .foot-container{
    width: 1200px;
    margin: 0 auto;
    height: 200px;
    font-family: Source Han Sans, Geneva, sans-serif;
    .logo{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      .icon{
        width: 300px;
      }
      .com-name{
        font-size: 35px;
      }
      .com-slogan{
        font-size: 10px;
        margin-top: 5px;
      }
    }
    .product{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      color: #6b3090;
      height: 200px;
      font-family: Source Han Sans, Geneva, sans-serif;
      .content{
        .pro-title{
          font-size: 14px;
          font-weight: bolder;
          background-image: -webkit-linear-gradient(left, #B733D9, #826CE6, #0ECFF1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pro-list{
          font-size: 14px;
          margin-top: 15px;
          .pro-item{
            margin-top: 5px;
            cursor: pointer;
            .link{
              text-decoration: none;
              color: #6b3090;
            }
          }
        }
      }
    }
    .contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      color: #6b3090;
      height: 200px;
      font-family: Source Han Sans, Geneva, sans-serif;
      .content{
        .con-title{
          font-size: 14px;
          font-weight: bolder;
          //background-image: -webkit-linear-gradient(left, #B733D9, #826CE6, #0ECFF1);
          background-image: -webkit-linear-gradient(left, #B733D9, #0ECFF1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .con-addr{
          font-size: 14px;
          margin-top: 20px;
        }
        .con-email{
          font-size: 14px;
          margin-top: 20px;
        }
      }
    }
    .border{
      border-left: 2px solid rgba(255,255,255,0.5);
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

</style>
