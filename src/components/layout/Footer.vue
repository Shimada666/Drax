<script setup lang="ts">
import { ref } from 'vue'

const linkGroups = ref([
  {
    title: '服务项目',
    items: [
      '游泳健身',
      '烧烤自助',
      '跑跑卡丁车',
    ],
  },
  {
    title: '热门产品',
    items: [
      '绿豆糕',
      '芋包王',
      '姜母鸭',
    ],
  },
  {
    title: '关于我们',
    items: [
      '公司介绍',
      '最新动态',
      '加入我们',
    ],
  },
  {
    title: '合作伙伴',
    items: [
      '百度官网',
      '腾讯官网',
      '中国移动',
      '中国电信',
    ],
  },
])
</script>

<template>
  <footer class="footer">
    <div style="padding: 20px; width: 100%;">
      <section class="left-section">
        <h3>联系我们</h3>
        <ul>
          <li>Email: example@example.com</li>
          <li>电话: 123-456-7890</li>
          <li>地址：上海市浦东新区xx街道xxx路xxx号</li>
          <div>
            <a class="icon" href="https://weibo.com" target="_blank" rel="noopener" one-link-mark="yes">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.316 2.42a6.353 6.353 0 016.047 1.956 6.35 6.35 0 011.329 6.215v.003a.92.92 0 01-1.75-.567 4.52 4.52 0 00-5.243-5.81.918.918 0 01-.384-1.798zM2.42 16.285c.258 2.608 3.688 4.404 7.661 4.012 3.973-.392 6.985-2.826 6.727-5.435-.258-2.607-3.688-4.403-7.661-4.01-3.972.392-6.985 2.825-6.727 5.433zm15.607-4.647h.001c1.377.427 2.909 1.46 2.909 3.28 0 3.01-4.342 6.802-10.869 6.802C5.09 21.721 0 19.308 0 15.34c0-2.075 1.315-4.475 3.578-6.739 3.024-3.022 6.549-4.399 7.874-3.073.585.585.642 1.597.266 2.805-.188.584.509.299.567.275l.004-.002c2.443-1.023 4.575-1.083 5.354.03.416.594.376 1.426-.007 2.39-.177.444.055.513.392.614zm1.914-5.079a3.093 3.093 0 00-2.945-.952.79.79 0 10.33 1.547v.001a1.518 1.518 0 011.441.464c.375.416.476.984.315 1.481h.001a.791.791 0 001.505.486 3.09 3.09 0 00-.647-3.027zM9.614 15.827c.241.099.548-.015.687-.253.133-.24.047-.508-.194-.596-.236-.094-.531.02-.67.252-.134.234-.06.5.177.597zm-2.406 1.97c.62.284 1.443.015 1.827-.598.378-.62.179-1.327-.444-1.592-.615-.258-1.41.008-1.79.603-.384.597-.204 1.31.407 1.588zM5.63 14.977c.821-1.666 2.958-2.608 4.849-2.116 1.957.505 2.955 2.35 2.155 4.144-.811 1.834-3.143 2.812-5.122 2.174-1.91-.617-2.718-2.503-1.882-4.202z"
                  fill="#BFBFBF" />
              </svg></a>
            <a class="icon" href="https://github.com" target="_blank" rel="noopener" one-link-mark="yes"><svg width="24"
                height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3z"
                  fill="#BFBFBF" />
              </svg></a>
            <a-tooltip color="white">
              <template #title>
                <img class="qrcode" src="https://ice.frostsky.com/2023/09/17/dc5f9fca8f4b3235e9eeaef6ddf35638.png">
              </template>
              <div class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 9.295C0 5.647 3.774 2.3 8.704 2.3c4.07 0 7.673 2.4 8.397 5.869a9.233 9.233 0 00-.372-.008c-5.448 0-7.899 3.965-7.899 6.78 0 .498.077 1.03.232 1.572-.217-.01-2.451-.117-3.503-.452l-2.38 1.349a.309.309 0 01-.451-.348l.53-2.007S0 12.943 0 9.295zM4.377 7.03a1.082 1.082 0 102.164 0 1.082 1.082 0 00-2.164 0zm6.289 0a1.082 1.082 0 102.164 0 1.082 1.082 0 00-2.164 0zm6.064 1.937c3.522 0 7.27 2.34 7.27 5.535 0 1.936-.842 3.879-2.611 5.112l.425 1.845a.196.196 0 01-.296.209l-1.873-1.19c-.843.28-1.813.439-2.915.439-4.981 0-7.094-3.593-7.094-5.975 0-2.378 2.113-5.975 7.094-5.975zm-3.234 3.972a.956.956 0 101.912 0 .956.956 0 00-1.912 0zm4.78 0a.956.956 0 101.912 0 .956.956 0 00-1.912 0z"
                    fill="#BFBFBF" />
                </svg>
              </div>
            </a-tooltip>
          </div>
        </ul>
      </section>
      <section class="right-section">
        <div class="link-groups">
          <div v-for="group in linkGroups" :key="group.title" class="link-group">
            <h4>{{ group.title }}</h4>
            <ul>
              <li v-for="item in group.items" :key="item">
                <a href="#" class="text-coolgray">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="copyright">
      沪xxxxxx号 沪ICP备xxxxxxxx号 Copyright@09473ZH
    </div>
  </footer>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 10px 0;
}

ul li a {
  text-decoration: none;
}

.footer {
  text-align: center;
  margin: auto 5rem;

  .left-section,
  .right-section {
    display: inline-block;
    vertical-align: top;
  }

  .left-section {
    width: 40%;
    text-align: left;
  }

  .right-section {
    width: 60%;
    text-align: right;

    .link-groups {
      display: flex;
      justify-content: space-around;

      .link-group {
        margin-bottom: 20px;
      }
    }
  }

  .copyright {
    text-align: center;
    font-size: 12px;
  }

  .icon {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    line-height: 24px;
    margin-right: 15px;
    vertical-align: middle;
    color: #999;
  }
}
</style>
