<template>
  <div class="hello">
    <div id="summernote"></div>
    <button @click="showData()">保存</button>
    <h1>{{ msg }}</h1>
    <el-row class="content">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="12">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="form.userName" placeholder="请输入用户名" prefix-icon="el-icon-user"/>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input v-model="form.passWord" placeholder="请输入密码" prefix-icon="el-icon-coordinate" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted () {
    $('#summernote').summernote({
      lang: 'zh-CN',
      height: 300,
      minHeight: null, // set minimum height of editor
      maxHeight: null, // set maximum height of editor
      focus: true,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'hr']],
        ['view', ['fullscreen', 'codeview']],
        ['help', ['help']]
      ]
    })
  },
  name: 'Login',
  data () {
    return {
      msg: 'commonProject 管理台',
      form: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    showData () {
      const htmlData = $('#summernote').summernote('code')
      console.log(htmlData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    justify-content: center;
    display: flex;
  }
</style>
