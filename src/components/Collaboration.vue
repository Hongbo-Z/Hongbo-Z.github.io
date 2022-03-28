<template>
  <div class="common-box projects" id="Collaboration">
    <p class="title">Application Domains and Industry collaboration</p>
    <p class="intro">One of the key strengths of robotics research at the Centre is the breadth and variety of autonomous systems applications, and the direct engagement and collaboration with numerous industry partners and stakeholders. The impact activities are organised around 5 application domains.</p>

    <el-row class="content">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="sys-col">
        <div class="sys-item">
          <img src="./images/collaboration/Nuclear.jpg" alt="IMAGE" class="icon">
          <div class="detail">
            <p class="title">Domain 1: Nuclear and extreme environments</p>
            <p class="sub-title">Manchester has a world leading reputation in the field of nuclear robotics via the leadership of the RAIN hub and RNE programme grant (Lennox). Staff also participate in other extreme environment hubs, such as NCNR, ORCA and Fairspace. Other key application areas in this field include offshore robotics (HOME, MIMRee) and subterranean mines (Prometheus).</p>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="sys-col">
        <div class="sys-item">
          <img src="./images/collaboration/Cobots.jpg" alt="IMAGE" class="icon">
          <div class="detail">
            <p class="title">Domain 2: Cobots and Industry 4.0</p>
            <p class="sub-title">Numerous projects currently focus on collaborative robots (cobots) for flexible manufacturing (e.g. new CS-BAE iCASE, KTP P&G), joint action and control for manipulation (HONDA DeCIFER, US THRIVE++), and telerobotics and variable autonomy systems.</p>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="sys-col">
        <div class="sys-item">
          <img src="./images/collaboration/Healthcare.png" alt="IMAGE" class="icon">
          <div class="detail">
            <p class="title">Domain 3: Healthcare and education</p>
            <p class="sub-title">Current projects at Manchester include rehabilitation robotics platforms and control (5+ PhD students), robot companions for social and health care (MoveCare) and robot tutors for education (eLADDA). Projects on privacy and trust (SPRITE+) also consider application of autonomous systems to healthcare.</p>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="sys-col">
        <div class="sys-item">
          <img src="./images/collaboration/Agritech.jpg" alt="IMAGE" class="icon">
          <div class="detail">
            <p class="title">Domain 4: Agritech</p>
            <p class="sub-title">The work here focuses on the deployment of novel sensors in agricultural environments. Specific technologies include agritech, swarm robotics with links through to image analysis.</p>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="sys-col">
        <div class="sys-item">
          <img src="./images/collaboration/Autonomous Vehicles.jpg" alt="IMAGE" class="icon">
          <div class="detail">
            <p class="title">Domain 5: Autonomous Vehicles</p>
            <p class="sub-title">This includes applications in the field of aerial robotics, space robotics, human-robot interaction and control with autonomous and assisted driving. This includes projects as part of the RAIN/HOME projects, funding from Honda, etc.</p>
          </div>
        </div>
      </el-col>

    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>
<style lang="less" scoped>
@themeColor: #660099;
.common-box{
  width: 100%;
  // padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title{
    font-size: 32px;
    margin-bottom: 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #333;
    .high-light{
      color: @themeColor;
    }
  }
  .intro{
    max-width: 1000px;
    display: block;
    margin-top: 10px;
    font-weight: 300;
    color: #777;
    font-size: 24px;
    text-align: center;
  }
}
// .common-box:nth-child(even){
//   background-color: rgba(102,0,153,0.3);
// }

.projects{
        .content{
          max-width: 1200px;
          width: 100%;
          margin-top: 30px;
          padding: 30px 0 0 0;
          //display: flex;
          //flex-direction: column;
          //justify-content: space-between;
          .sys-col{
            padding: 25px 20px;
            .sys-item{
              //height: 600px;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              position: relative;
              border-radius: 5px;
              background-color: #fff;
              overflow: hidden;
              .icon{
                width: 100%;
                margin-bottom: 10px;
              }
              .detail{
                padding: 10px;
                min-height: 250px;
                .title{
                  word-wrap: break-word;
                  word-break: break-all;
                  font-size: 22px;
                  margin-top: 10px;
                }
                .sub-title{
                  font-size: 16px;
                  color: #aaa;
                  margin-top: 5px;
                  text-align: justify;
                }
                .el-rate{
                  margin-top: 10px;
                }
              }
              .oprations{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 10px;
                border-top: 1px solid #9a9ea4;
                .left{
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  .icon{
                    width: auto;
                    margin-bottom: 0;
                    color: #F56C6C;
                    margin-right: 5px;
                    display: inline-block;
                  }
                }
                .right{
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  .icon{
                    width: auto;
                    margin-bottom: 0;
                    color: #E6A23C;
                    margin-right: 5px;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
      }
</style>
