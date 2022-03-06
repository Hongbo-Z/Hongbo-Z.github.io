<template>
  <div>
  <common-header></common-header>
  <div class="common-box core-staff">
    <div class="title">Academic Staff</div>

    <el-row class="staff-container">
      <el-col :span="6" class="profile-photo">
      <a href="https://www.research.manchester.ac.uk/portal/angelo.cangelosi.html"><img src="./images/members/CentreManagementTeam/Angelo-Cangelosi.jpg" alt="PROFILE" class="photo"></a>
      </el-col>
      <el-col :span="18" class="profile-intro">
        <p class="name">Prof Angelo Cangelosi</p>
        <p class="name sub-intro">Co-Director</p>
        <el-tabs tab-position="left" style="height: 350px;">
          <el-tab-pane label="Background">
            <p class="prof-title">Angelo Cangelosi is Professor of Machine Learning and Robotics at the University of Manchester.</p>
            <p class="prof-title">Previously he was Professor of Artificial Intelligence and Cognition, and founding director, at the Centre for Robotics and Neural Systems at Plymouth University.</p>
            <p class="prof-title"> Cangelosi's main research expertise is on language grounding and embodiment in humanoid robots, developmental robotics, human-robot interaction, and on the application of neuromorphic systems for robot learning.</p>
          </el-tab-pane>
          <el-tab-pane label="Contact">
            <p class="prof-title">Email: <a href="mailto:angelo.cangelosi@manchester.ac.uk" class="link">angelo.cangelosi@manchester.ac.uk</a></p>
            <p class="prof-title">Tel.: +44 (0) 776 613 4202</p>
          </el-tab-pane>
          <el-tab-pane label="Research">
            <p class="prof-title">Publications:</p>
            <p class="content"><a href="https://scholar.google.co.uk/citations?user=NyoHewcAAAAJ&hl=en" class="link">https://scholar.google.co.uk/citations?user=NyoHewcAAAAJ&hl=en</a></p>
            <p class="prof-title">Research Lead:</p>
            <p class="content">Cognitive Robotics Lab</p>
            <!-- <p class="prof-title">Research Contributor:</p>
            <p class="content">Robots for Hazardous Environments</p>
            <p class="prof-title">Programme Director:</p>
            <p class="content">MSc Robotics</p> -->
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-row class="staff-container">
      <el-col :span="6" class="profile-photo">
      <a href="https://www.research.manchester.ac.uk/portal/barry.lennox.html"><img src="./images/members/CentreManagementTeam/Barry-Lennox.jpeg" alt="PROFILE" class="photo"></a>
      </el-col>
      <el-col :span="18" class="profile-intro">
        <p class="name">Prof Barry Lennox</p>
        <p class="name sub-intro">Co-Director</p>
        <el-tabs tab-position="left" style="height: 350px;">
          <el-tab-pane label="Background">
            <p class="prof-title">Barry Lennox FREng is Professor of Applied Control in the School of Electrical & Electronic Enginnering.</p>
            <p class="prof-title"> He held the EPSRC Chair in Nuclear Decommissioning between 2012-2014 and is Research Director of the Dalton Cumbrian Facility. He is a Fellow of the Royal Academy of Engineering, Senior Member of the IEEE, Fellow of the IET and InstMC and a Chartered Engineer.</p>
            <p class="prof-title"> His research interests are in the development and deployment of robotic systems for nuclear decommissioning applications, applied control systems and the use of acoustic pulse reflectometry for monitoring industrial pipelines. In 2002 he co-founded Perceptive Engineering, a process control solutions provider and through Circor, his work in acoustics has led to the development of equipment that has been commercialised and successfully applied in the North Sea, USA and Asia to detect and locate blockages in subsea pipelines and heat exchangers.</p>
          </el-tab-pane>
          <el-tab-pane label="Contact">
            <p class="prof-title">Email: <a href="mailto:barry.lennox@manchester.ac.uk" class="link">barry.lennox@manchester.ac.uk</a></p>
            <p class="prof-title">Tel.: +44 (0) 161 306 4661</p>
          </el-tab-pane>
          <el-tab-pane label="Research">
            <p class="prof-title">Publications:</p>
            <p class="content"><a href="https://scholar.google.co.uk/citations?user=Hr14AdQAAAAJ&hl=en" class="link">https://scholar.google.co.uk/citations?user=Hr14AdQAAAAJ&hl=en</a></p>
            <p class="prof-title">Research Lead:</p>
            <p class="content">Control Systems Centre</p>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-row class="staff-container">
      <el-col :span="6" class="profile-photo">
      <a href="https://www.research.manchester.ac.uk/portal/clare.dixon.html"><img src="./images/members/CentreManagementTeam/Clare Dixon.jpeg" alt="PROFILE" class="photo"></a>
      </el-col>
      <el-col :span="18" class="profile-intro">
        <p class="name">Prof Clare Dixon</p>
        <p class="name sub-intro">Funding Lead</p>
        <el-tabs tab-position="left" style="height: 350px;">
          <el-tab-pane label="Background">
            <p class="prof-title">I am a Professor of Computer Science in the Department of Computer Science at the University of Manchester.</p>
            <p class="prof-title">Until June 2020 I was Professor of Computer Science in the Department of Computer Science at the University of Liverpool</p>
            <p class="prof-title">My research interests include verification of robot and autonomous systems, specification and verification of systems, theorem-proving for temporal and modal logics. I lead the Autonomy and Verification research group.</p>
          </el-tab-pane>
          <el-tab-pane label="Contact">
            <p class="prof-title">Email: <a href="mailto:clare.dixon@manchester.ac.uk" class="link">clare.dixon@manchester.ac.uk</a></p>
            <!-- <p class="prof-title">Tel.: +44 (0) 7766134202</p> -->
          </el-tab-pane>
          <el-tab-pane label="Research">
            <p class="prof-title">Publications:</p>
            <p class="content"><a href="https://scholar.google.co.uk/citations?user=ySfW34EAAAAJ&hl=en" class="link">https://scholar.google.co.uk/citations?user=ySfW34EAAAAJ&hl=en</a></p>
            <p class="prof-title">Research Lead:</p>
            <p class="content">Autonomy and Verification research group</p>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
  <common-footer></common-footer>
</div>

</template>

<script>
export default {
  name: 'Members'
}
</script>

<style lang="less" scoped>
@themeColor: #660099;
.common-box{
      width: 100%;
      padding: 60px;
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
        max-width: 700px;
        display: block;
        margin-top: 10px;
        font-weight: 300;
        color: #777;
        font-size: 24px;
        text-align: center;
      }
    }
.core-staff{
        .title{
          position: relative;
          margin-bottom: 60px;
        }
        .title:before{
          content: "";
          width: 40px;
          border-bottom: 4px solid #0c0c0c;
          position: absolute;
          left: 50%;
          margin-left: -20px;
          bottom: -30px;
        }
        .staff-container{
          width: 960px;
          border-bottom: 2px solid grey;
          padding: 15px 0;
          .profile-photo{
            .photo{
              width: 100%;
              border-radius: 50%;
              box-shadow: rgba(0,0,0,0.25) 0 3px 11px 0 !important;
            }
          }
          .profile-intro{
            padding-left: 35px;
            .name{
              color: rgb(26, 26, 26);
              font-size: 30px;
              font-family: Oswald;
              font-weight: 400;
              &.sub-intro{
                font-size: 24px;
              }
            }
            .el-tabs{
              margin-top: 30px;
              .el-tabs__nav{
                .el-tabs__active-bar{
                  background-color: #000;
                }
                .el-tabs__item{
                  height: 100px;
                  line-height: 100px;
                  color: #878787;
                  &.is-active{
                    color: #000;
                  }
                }
                .el-tabs__item:hover{
                  color: #000;
                }
              }
              .el-tabs__content{
                display: flex;
                flex-direction: column;
                justify-content: center;
                .el-tab-pane{
                  height: 350px;
                  display: flex;
                  flex-direction: column;
                  // justify-content: center;
                  .prof-title, .content{
                    .link{
                      border-bottom: 1px solid #000;
                      color: #000;
                      text-decoration: none;
                    }
                  }
                  .prof-title:nth-child(even){
                    margin: 20px 0;
                  }
                  .content{
                    margin-bottom: 30px;
                  }
                }
              }
            }
          }
        }
        .staff-container:first-child{
          border-top: 2px solid grey;
        }
      }

</style>
