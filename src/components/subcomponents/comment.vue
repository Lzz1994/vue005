<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return{
            pageIndex:1,//默认显示第一页评论内容
            comments:[]//获取评论内容
        }
    },
    created(){
        this.getComments();
    },
    methods:{
       getComments(){
           this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result=>{
              if(result.body.status===0){
                 this.comments=result.body.message;
              }else{
                  Toast("评论获取失败")
              }
            
               
           })
       },
       getMore(){
            // 加载更多
      this.pageIndex++;
      this.getComments();
       }
    },
    props: ["id"]

}
    
</script>


<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
