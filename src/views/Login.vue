<template>
  <div>123</div>
</template>

<!-- <template> -->
<!--  <div class="register"> -->
<!--    <el-row style="width: 90%; margin: 0 auto; display: flex; align-items: center; flex-wrap: wrap;"> -->
<!--      <el-col -->
<!--        class="slogan" -->
<!--        :xs="24" -->
<!--        :sm="14"> -->
<!--        <div> -->
<!--          Built for<br> -->
<!--          SJTUers -->
<!--        </div> -->
<!--        &lt;!&ndash;<div class="help">&ndash;&gt; -->
<!--        &lt;!&ndash;  媒体站在已有电影站的基础上 ，使用Jellyfin提供媒体管理服务。<br>&ndash;&gt; -->
<!--        &lt;!&ndash;  增加了番剧 、电视剧 、音乐、网课等资源。<br>&ndash;&gt; -->
<!--        &lt;!&ndash;  为同学们提供更加丰富的内网生活，希望大家能够喜欢。&ndash;&gt; -->
<!--        &lt;!&ndash;</div>&ndash;&gt; -->
<!--      </el-col> -->
<!--      <el-col -->
<!--        :xs="24" -->
<!--        :sm="10"> -->
<!--        <el-form -->
<!--          ref="ruleForm" -->
<!--          class="register-form" -->
<!--          label-position="top" -->
<!--          label-width="80px" -->
<!--          :model="formModel"> -->
<!--          <el-form-item -->
<!--            label="用户名" -->
<!--            prop="username" -->
<!--            :rules="[ -->
<!--              { required: true, message: '请输入用户名', trigger: 'blur' }, -->
<!--            ]"> -->
<!--            <el-input v-model="formModel.username" /> -->
<!--          </el-form-item> -->
<!--          <el-form-item -->
<!--            prop="password" -->
<!--            label="密码" -->
<!--            :rules="[ -->
<!--              { required: true, message: '请输入密码', trigger: 'blur' }, -->
<!--            ]"> -->
<!--            <el-input v-model="formModel.password" type="password" /> -->
<!--          </el-form-item> -->
<!--          <el-form-item> -->
<!--            <el-button -->
<!--              style="display: block; width: 100%;" -->
<!--              type="primary" -->
<!--              @click="onSubmit"> -->
<!--              登录 -->
<!--            </el-button> -->
<!--          </el-form-item> -->
<!--        </el-form> -->
<!--      </el-col> -->
<!--    </el-row> -->
<!--  </div> -->
<!-- </template> -->

<!-- <script lang="ts"> -->
<!-- import { AdminApi } from '@/api/admin' -->
<!-- import { defineComponent, reactive, ref } from 'vue' -->
<!-- import { useRouter } from 'vue-router' -->

<!-- export default defineComponent({ -->
<!--  name: 'Login', -->
<!--  setup (props, context) { -->
<!--    const router = useRouter() -->
<!--    const formModel = reactive({ -->
<!--      username: '', -->
<!--      password: '' -->
<!--    }) -->
<!--    const ruleForm = ref() -->
<!--    const login = async () => { -->
<!--      const res = await AdminApi.login(formModel) -->
<!--      await router.replace('/') -->
<!--    } -->
<!--    const onSubmit = async () => { -->
<!--      await ruleForm.value.validate(async res => { -->
<!--        if (res) { -->
<!--          await Login() -->
<!--        } -->
<!--      }) -->
<!--    } -->

<!--    return { -->
<!--      formModel, -->
<!--      ruleForm, -->
<!--      onSubmit -->
<!--    } -->
<!--  } -->
<!-- }) -->
<!-- </script> -->
<!-- <style lang="scss" scoped> -->
<!-- @media (max-width: 768px) { -->
<!--  .slogan { -->
<!--    margin: 20px 0; -->
<!--    font-size: 48px; -->
<!--    font-weight: 500; -->
<!--    text-align: center; -->
<!--    .help { -->
<!--      margin-top: 20px; -->
<!--    } -->
<!--  } -->
<!-- } -->

<!-- @media (min-width: 768px) { -->
<!--  .register { -->
<!--    justify-content: center; -->
<!--    display: flex; -->
<!--    align-items: center; -->
<!--    flex: 1; -->
<!--  } -->
<!--  .slogan { -->
<!--    font-size: 64px; -->
<!--    font-weight: 500; -->
<!--  } -->
<!-- } -->
<!-- .register { -->
<!--  width: 100vw; -->
<!--  height: 100vh; -->
<!--  .slogan { -->
<!--    .help { -->
<!--      text-align: left; -->
<!--      font-size: 16px; -->
<!--      font-weight: 400; -->
<!--    } -->
<!--  } -->
<!--  .register-form { -->
<!--    border-radius: 5px; -->
<!--    padding: 20px; -->
<!--    .label { -->
<!--      height: 30px; -->
<!--      line-height: 30px; -->
<!--    } -->
<!--  } -->
<!-- } -->
<!-- </style> -->
