    <template>
    <div class="container">
    <div class="messages">
   <channelMessage author="Junior Nobre" date="17/07/2022" hasMention>Esta é uma mensagem</channelMessage>
    <channelMessage author="Discord" date="18/07/2022" isBot hasMention>Esta é uma mensagem</channelMessage>
    <channelMessage v-for="messages in 18" :key="messages.id" author="Natali souza" date="16/07/2022">Esta é uma mensagem</channelMessage>
    <channelMessage author="Natan bouth" date="18/07/2022" hasMention>Esta é uma mensagem</channelMessage>
     <channelMessage author="Natan bouth" date="18/07/2022" isMention>
     <Mention>Natali souza </Mention>, Que bacana!vem dá uma olhada</channelMessage>
    </div>
    <div class="input-wrapper">
        <input type="text" placeholder="Conversar rm #chat-livre">
        <div class="icon">
            <At :size="24" />
        </div>
    </div>
    </div>
    </template>

<script>
import Vue from "vue";
import At from "vue-material-design-icons/At"
    import channelMessage from "./channelMessage";
    export default{
        components: {
            At,
            channelMessage
        },
    };

    Vue.component('Mention', {
        template: '<span class="mention"><slot/></span>'
    });
    </script>

    <style scoped lang="scss">
    .container{
        grid-area: CD;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--primary);
        flex: 1;
    }

    .messages{
        display:flex;
        flex-direction: column;
        height: calc(100vh - 46px - 68px);
        max-height: calc(100vh - 46px - 68px);
        overflow-y: scroll;

   .channel-message:first-child{
        margin-top: 0;
    }
        &::-webkit-scrollbar{
            width: 8px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: var(--tertiary);
            border-radius: 4px;
          }
        &::-webkit-scrollbar-track{
            background-color: var(--secondary);
        }
    }
        .input-wrapper{
            width:100%;
            padding: 0 16px;
            height: 68px;

            input{
                width: 100%;
                height: 44px;
                padding: 0 10px 0 57px;
                border-radius: 5px;
                position: relative;
                background-color: var(--chat-input);
                color: var(--white);

                    &::placeholder{
                    color:var(--grey);
        }
        }
            .icon{
                color: var(--grey);
                position: relative;
                top:-50%;
                left: 14px;
                transition: .2s;
                width: 24px;
            }
        }
    </style>