<template>
   <div>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="true"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="false"
      :showFile="false"
      :showTypingIndicator="showTypingIndicator"
	  :showLauncher="false"
	  :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage">
        <template v-slot:header> 
            <div style="margin-left:37vw;color:#fff;font-size:5vw;margin-top:3.7vw;">
                官方客服
            </div> 
        </template>

    </beautiful-chat>
  </div>
</template>

<script>
import Vue from 'vue';
import Chat from 'vue-beautiful-chat';
Vue.use(Chat);
import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'

export default {
  name: 'app',
  data() {
    return {
      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [
        {
          id: 'user1',
          name: '咨询店家',
          imageUrl: 'https://s2.ax1x.com/2020/01/26/1mgijO.th.png'
        }
      ], 
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.th.png',
      messageList: [
          { type: 'text', author: `user1`, data: { text: `您好，` } },
          { type: 'text', author: `user1`, data: { text: `您在购物中有什么问题吗？` }, suggestions: ['无法支付', '哪里查看订单','我要退货'] },
      ], 
      newMessagesCount: 0,
      isChatOpen: false, 
      showTypingIndicator: '', 
      colors: {
        header: {
          bg: '#ff7611',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#ff6005',
          text: '#fff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, 
      alwaysScrollToBottom: false, 
      messageStyling: true 
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      
      this.$router.go(-1);

    },
    handleScrollToTop () {
      
  	},
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  }
}
</script>

<style>

</style>