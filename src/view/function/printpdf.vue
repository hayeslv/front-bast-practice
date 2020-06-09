<!--
 * @Author: Lvhz
 * @Date: 2020-06-09 11:28:47
 * @Descripttion: 打印、下载pdf
--> 
<template>
  <div>
    <div ref="eventFullDetail" style="display:none">
      <div
        style="font-family: Songti SC,Arial,'\5B8B\4F53',SimSun,Helvetica Neue, Helvetica, Microsoft YaHei, sans-serif;font-size:12px;color:#000000"
      >
        <div style="margin-bottom:40px">
          <div style="vertical-align:middle;font-weight:bold;padding:0 0 20px 0;">任务详情</div>

          <div style="margin-bottom:16px;overflow:auto;color:#375dc8">
            <div style="width:64px;text-align:left;vertical-align:middle;float:left;">任务编号：</div>
            <div style="margin-left: 64px;">{{ getEventDetailText('caseCode') }}</div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">上报时间：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('reportTime') }}</div>
            </div>
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">问题来源：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('sourceName') }}</div>
            </div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">大类名称：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('mainTypeName') }}</div>
            </div>
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">小类名称：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('subTypeName') }}</div>
            </div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">所属街道：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('streetName') }}</div>
            </div>
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">所属社区：</div>
              <div
                style="margin-left: 64px;color:#606266;"
              >{{ getEventDetailText('communityName') }}</div>
            </div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">责任网格：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('gridName') }}</div>
            </div>
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">所属路段：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('roadName') }}</div>
            </div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:64px;text-align:left;vertical-align:middle;float:left;">立案规范：</div>
            <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('acceptStandard') }}</div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:64px;text-align:left;vertical-align:middle;float:left;">结案规范：</div>
            <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('closeStandard') }}</div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">地址描述：</div>
              <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('addr') }}</div>
            </div>
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">处置时限：</div>
              <div style="margin-left: 64px;color:#606266;">-</div>
            </div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">处置部门：</div>
              <div style="margin-left: 64px;color:#606266;">-</div>
            </div>
            <div style="width:50%;float:left">
              <div style="width:64px;text-align:left;vertical-align:middle;float:left;">路灯杆号：</div>
              <div style="margin-left: 64px;color:#606266;">-</div>
            </div>
          </div>

          <div style="margin-bottom:16px;overflow:auto;">
            <div style="width:64px;text-align:left;vertical-align:middle;float:left;">问题描述：</div>
            <div style="margin-left: 64px;color:#606266;">{{ getEventDetailText('description') }}</div>
          </div>
        </div>

        <div>
          <div style="font-weight:bold;padding:0 0 20px 0;">图片</div>
          <div v-for="eventImage in eventImages" :key="eventImage.taskKey" style="clear: both;">
            <div style="margin-bottom:10px">{{ eventImage.taskName }}</div>
            <div>
              <div
                v-for="(img,index) in eventImage.list"
                :key="img.id"
                style="margin:0 10px 10px 0;width:30%;font-size:0px;float: left;"
              >
                <cg-img style="width:100%;height:150px" :src="img.url" alt srcset />
                <div style="text-align:center;margin-top:10px;font-size:14px">{{ img.classifyName }}</div>
                <br v-if="index % 3 === 0" />
              </div>
            </div>
          </div>
        </div>

        <div style="clear: both;">
          <div style="vertical-align:middle;font-weight:bold;padding:0 0 20px 0;">办理经过</div>
          <div v-for="log in eventLogs" :key="log.id" style="margin-bottom:16px;overflow:auto;">
            <div
              style="width:120px;text-align:left;vertical-align:middle;float:left;"
            >{{ log.createTime }}</div>
            <div style="margin-left: 120px;color:#606266;">
              <div>
                <span style="color:#fc5e5e">{{ log.userName }}</span>
                <span>在{{ log.sourceName }}阶段,进行了</span>
                <span style="color:#fc5e5e">{{ log.lineName }}</span>
              </div>
              <div>处理意见：{{ log.notes || '-' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async getFullDetail() {
      await this.initData(); // 初始化数据
      return this.$refs.eventFullDetail.innerHTML;
    },
    initData() {},
    // 打印
    async printEvent() {
      const getFullDetail = await this.$refs.eventFullDetail.getFullDetail();
      const iframe = document.createElement("iframe");
      iframe.setAttribute("width", "0px");
      iframe.setAttribute("height", "0px");
      document.body.appendChild(iframe);
      iframe.contentDocument.write(getFullDetail);
      iframe.contentWindow.print();
      iframe.parentNode.removeChild(iframe);
    },
    // 下载pdf
    async downLoadPdf() {
      const getFullDetail = await this.$refs.eventFullDetail.getFullDetail();

      const html = `
      <!DOCTYPE html>
      <html lang="zh-cn">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        ${getFullDetail}
      </body>
      </html>
      `;

      const fileBuffer = await exportExpPdf({
        html: html,
        fileName: "fileName"
      });
      downloadFileByArraybuffer(fileBuffer, `${Date.now()}.pdf`);
    },
    /**
     * post html转pdf
     * @returns {Promise<Result>}
     */
    exportExpPdf(data = {}) {
      return request({
        url: `${cgApi}/export/expPdf`,
        method: "post",
        responseType: "arraybuffer",
        data
      });
    },
    /**
     * 下载文件流
     * @param {string} url 文件链接地址
     * @param {ArrayBuffer} buffer 文件流
     * @param {string} name 文件名
     * @returns {Promise<boolean>}
     */
    async downloadFileByArraybuffer(buffer, name) {
      try {
        const blob = new Blob([buffer]);
        const fileUrl = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.download = name;
        link.href = fileUrl;
        link.click();
        link = null;
        window.URL.revokeObjectURL(fileUrl);
        return true;
      } catch (error) {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
