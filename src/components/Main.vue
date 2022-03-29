<template>
  <div class="uom-main">
    <el-container direction="vertical">
      <common-header></common-header>
      <div class="head-bg">
        <div class="main-head">
          <p class="title">Centre for Robotics and AI</p>
          <p class="sub-title">University of Manchester</p>
        </div>
      </div>
      <el-main>
        <div class="common-box project-carousel" id="about">

          <p class="title"><span>About</span></p>
          <p class="intro">The robotics and autonomous systems research at the University of Manchester has a
            distinctive profile developing, integrating and applying novel AI approaches in the design of robots and
            autonomous systems for real world applications. This is a highly interdisciplinary Centre, building on the
            close collaboration between engineering approaches to robotics and control and computer science approaches
            to AI and cognitive and neural systems. It is further enhanced by robotics research in privacy and ethics in
            the social sciences.</p>

          <el-carousel :interval="5000" arrow="always" class="carousel-container" height="500px">
            <el-carousel-item class="carousel-item">
              <img src="./images/about/1.png" alt="IMAGE">
            </el-carousel-item>
            <el-carousel-item class="carousel-item">
              <img src="./images/about/2.png" alt="IMAGE">
            </el-carousel-item>
            <el-carousel-item class="carousel-item">
              <img src="./images/about/3.png" alt="IMAGE">
            </el-carousel-item>
            <el-carousel-item class="carousel-item">
              <img src="./images/about/4.png" alt="IMAGE">
            </el-carousel-item>
            <el-carousel-item class="carousel-item">
              <img src="./images/about/5.png" alt="IMAGE">
            </el-carousel-item>
            <el-carousel-item class="carousel-item">
              <img src="./images/about/6.png" alt="IMAGE">
            </el-carousel-item>
          </el-carousel>
        </div>
        <common-cmt></common-cmt>
        <common-research></common-research>
        <common-collaboration></common-collaboration>

        <div class="common-box partner" style="padding-bottom:60px">
          <div class="title">Our Collaborators from Academia and Industry
          </div>
          <div class="partner-list">
            <div class="clients-logo slick-slider">
              <div class="item">
                <img src="./images/partner/1.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/2.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/3.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/4.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/5.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/6.png" alt="PARTNER" class="img-item">
              </div>

              <div class="item">
                <img src="./images/partner/1.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/2.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/3.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/4.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/5.png" alt="PARTNER" class="img-item">
              </div>
              <div class="item">
                <img src="./images/partner/6.png" alt="PARTNER" class="img-item">
              </div>
            </div>
          </div>
        </div>
        <div class="common-box news" id="News">
          <div class="title">News & Events</div>
          <el-carousel :autoplay="false" arrow="always" class="news-carousel-container" height="550px">

            <el-carousel-item class="carousel-item">
              <el-row class="news-header">
                <el-col :span="12" class="news-content">
                  <p class="news-title">Inaugural workshop of the new Manchester Centre for Robotics and AI 2022</p>
                  <p class="news-timeline"><span class="high-light">When: </span> The workshop will be on Monday April 4 </p>
                  <p class="news-timeline"><span class="high-light">EOI:</span> Deadline for registration is March 10</p>
                  <p class="news-timeline"><span class="high-light">Venue:</span> Mix(ofline + online)</p>
                  <p class="news-timeline"><span class="high-light">Cost:</span> Free</p>
                </el-col>
                <el-col :span="12" class="news-image">
                  <img src="./images/product.jpeg" alt="NEWS_IMG" class="news-img">
                </el-col>
              </el-row>
              <div class="news-body">
                <p class="news-intro">Our robotics and autonomous systems community has achieved a critical mass of academics and research projects in robotics, with a distinctive profile developing, integrating and applying novel AI approaches in the design of robots and autonomous systems for real world applications.Collectively, we have 50 academics with expertise in AI, robotics and autonomous systems spread across the Faculty of Science and Engineering. These foundations are complemented by numerous academics across other Faculties working at the interface between robotics, autonomy and AI across humanities and biological and medical sciences.</p>
                <p class="news-intro">Our University now has the potential to build on these solid foundations and further establish itself as a world leader in this important and rapidly growing field, via the establishment of the new interdisciplinary Manchester Centre for Robotics and AI. An inaugural workshop has been organised for Monday, 4 April to promote the activities of the Centre and support collaboration. Any academic interested in being affiliated to the Centre and/or in participating in the workshop (with talk/poster option) is welcome to submit their application via the following online registration form by 10 March.</p>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=B8tSwU5hu0qBivA1z6kad7pN2vHvziFHp8HrwJvIhltUQ0czRVpBSlRBSTlRRDVVMEpaWVFRQkpDNC4u"><el-button round class="news-btn">Further Info / Registration</el-button></a>
              </div>
            </el-carousel-item>

            <el-carousel-item class="carousel-item" >
              <a class="twitter-timeline" href="https://twitter.com/corolab_UoM?ref_src=twsrc%5Etfw">Tweets by corolab_UoM</a>
            </el-carousel-item>

          </el-carousel>
        </div>


        <div class="common-box contact-us" id="contact-us">
          <div class="title">CONTACT US</div>
          <div class="intro">We are on the Internet!</div>
          <div class="icons">
            <a href="https://twitter.com/corolab_uom"><i class="icofont-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UC6vGqfRiJ1x6lyi2S7yl8tQ"><i class="icofont-youtube-play"></i></a>
            <a href="mailto:corolabuom@gmail.com"><i class="icofont-email"></i></a>
          </div>
        </div>
      </el-main>
      <common-footer></common-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      lang: 'en',
      content: {},
      activeIndex: 0,
      drawer: false,
      value: 4.0,
      activeName: 'first'
    }
  },
  mounted () {
    let me = this
    let width = window.innerWidth
    let height = (width / 1400) * 400
    $('.main-head').eq(0).css('height', height + 'px')
    let mySwiper = new Swiper('.swiper-container', {
      slideToClickedSlide: true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    $('.clients-logo').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      speed: 500
    })
  },
  methods: {
    removeMask: function () {
      // $(".mask").removeClass("active");
      $('.drawer').slideToggle(500)
    },
    handleClick (tab, event) {

    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
}

@themeColor: #660099;

.uom-main {
  width: 100%;
  height: 100%;
  min-width: 1200px;

  .el-container {
    .head-bg {
      background: url("./images/RoboticsBanner.jpg") no-repeat center center;
      background-size: cover;

      .main-head {
        height: 400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        // padding-top: 10%;
        .title {
          font-size: 60px;
          color: #fff;
          // background-color: rgba(255, 255, 255, 0.7);
          // padding: 10px;
          text-align: center;
          font-family: "Atmosphere";
        }

        .sub-title {
          color: #fff;
          // background-color: rgba(255, 255, 255, 0.7);
          // padding: 10px;
          font-size: 50px;
          margin-top: 30px;
          text-align: center;
        }
      }
    }

    .el-main {
      width: 100%;
      padding: 0;
      min-width: 1200px;

      .common-box {
        width: 100%;
        // padding: 60px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title {
          font-size: 32px;
          margin-bottom: 0;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #333;

          .high-light {
            color: @themeColor;
          }
        }

        .intro {
          max-width: 1200px;
          display: block;
          margin-top: 10px;
          font-weight: 300;
          color: #777;
          font-size: 24px;
          text-align: center;
        }
      }

      // .common-box:nth-child(odd) {
      //   background-color: rgba(102, 0, 153, 0.3);
      // }

      .project-carousel {
        .carousel-container {
          .el-carousel__container {
            .el-carousel__item {
              img {
                width: 100%;
                // height: 100%;
              }
            }
          }

          width: 670px;
          margin-top: 30px;

        }
      }

      .comment {
        position: relative;

        .swiper-container {
          margin-top: 30px;
          width: 1110px;
          //height: 305px;
          .swiper-wrapper {
            width: 100%;

            .swiper-slide {
              width: 100%;
              max-width: 547px;
              cursor: pointer;
              background: #fff;
              padding: 30px;
              margin: 0px 4px !important;

              .content {
                .profile {
                  display: flex;
                  flex-direction: row;

                  .profile-photo {
                    width: 80px;
                    height: 80px;
                    border-radius: 100%;
                    margin-right: 20px;
                    margin-bottom: 30px;
                    border: 5px solid #eff0f3;
                    margin-top: -5px;
                    overflow: hidden;

                    .photo {
                      width: 100%;
                    }
                  }

                  .profile-title {
                    .title {
                      font-family: "Exo", sans-serif;
                      font-weight: 700;
                      color: #222;
                      font-size: 1.3rem;
                      line-height: 30px;
                    }

                    .intro {
                      line-height: 1.6;
                      font-family: "Roboto", sans-serif;
                      -webkit-font-smoothing: antialiased;
                      font-size: 16px;
                      color: #6F8BA4;
                      font-weight: 400;
                      text-align: left;
                    }
                  }
                }

                .comments {
                  font-size: 18px;
                  color: #6F8BA4;
                  line-height: 30px;
                  margin-bottom: 15px;
                }
              }

              .quote {
                position: absolute;
                right: 46px;
                bottom: -20px;
                color: #e12454;
                opacity: .3;
                font-size: 72px;
                font-weight: bold;
              }
            }
          }
        }

        .swiper-pagination {
          bottom: 20px;
        }
      }

      .core-staff {
        .title {
          position: relative;
          margin-bottom: 60px;
        }

        .title:before {
          content: "";
          width: 40px;
          border-bottom: 4px solid #0c0c0c;
          position: absolute;
          left: 50%;
          margin-left: -20px;
          bottom: -30px;
        }

        .staff-container{
          width: 1200px;
          border-bottom: 2px solid grey;
          padding: 15px 0;
          .staff-col{
            padding: 20px;
            .el-card{
              .img-box{
                width: 100%;
                height: 260px;
                overflow: hidden;
                .image{
                  width: 100%;
                  margin-top: -20px;
                }
              }
              .staff-intro{
                .staff-intro-title{
                  font-weight: 700;
                }
                .staff-intro-content{
                  color: #999;
                }
              }
            }
          }
        }

        .staff-container:first-child {
          border-top: 2px solid grey;
        }
      }

      .projects_bak {
        .content {
          max-width: 1200px;
          width: 100%;
          margin-top: 30px;
          padding: 30px 0 0 0;
          //display: flex;
          //flex-direction: column;
          //justify-content: space-between;
          .sys-col {
            padding: 25px 20px;

            .sys-item {
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

              .icon {
                width: 100%;
                margin-bottom: 10px;
              }

              .detail {
                padding: 10px;

                .title {
                  font-size: 22px;
                  margin-top: 10px;
                }

                .sub-title {
                  font-size: 16px;
                  color: #aaa;
                  margin-top: 5px;
                }

                .el-rate {
                  margin-top: 10px;
                }
              }

              .oprations {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 10px;
                border-top: 1px solid #9a9ea4;

                .left {
                  display: flex;
                  flex-direction: row;
                  align-items: center;

                  .icon {
                    width: auto;
                    margin-bottom: 0;
                    color: #F56C6C;
                    margin-right: 5px;
                    display: inline-block;
                  }
                }

                .right {
                  display: flex;
                  flex-direction: row;
                  align-items: center;

                  .icon {
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

      .partner {
        .partner-list {
          width: 1200px;
          height: 85px;
          margin-top: 30px;

          .clients-logo {
            width: 100%;
            height: 100%;

            .item {
              display: flex;
              align-items: center;
              justify-content: center;
              // width: 190px;
              height: 100%;

              .img-item {
                // max-width: 100%;
                height: 100px;
              }
            }
          }
        }
      }

      .news {
        .news-carousel-container {
          width: 1200px;
          margin-top: 30px;

          .carousel-item {
            width: 100%;
            padding: 30px;
            overflow: auto;

            .news-header {
              .news-content {
                .news-title {
                  font-size: 30px;
                  font-family: Oswald;
                  font-weight: 400;
                  text-decoration: underline;
                  margin-bottom: 20px;
                }

                .news-timeline {
                  font-size: 16px;
                  color: #1a1a1a;
                  font-weight: 300;
                  margin-top: 10px;

                  .high-light {
                    font-weight: 400;
                  }
                }
              }

              .news-image {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .news-img {
                  height: 180px;
                }
              }
            }

            .news-body {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 20px;

              .news-intro {
                font-size: 16px;
                margin-top: 20px;
              }

              .news-btn {
                font-size: 20px;
                width: 280px;
                margin-top: 30px;
              }
            }
          }
        }
      }

      .contact-us {
        background-color: #222 !important;
        background-image: url("./images/map-image.png");
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 500px;

        .title {
          color: #fff;
        }

        .infto {
          color: #fff;
        }

        .icons {
          width: 300px;
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          i {
            font-size: 60px;
            cursor: pointer;
            color: @themeColor;
          }

          i:hover {
            opacity: 0.7
          }
        }
      }
    }
  }
}
</style>
