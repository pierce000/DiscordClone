<template>
  <div class="serverbutton" :class="{'serverbutton-isHome': isHome,'serverbutton-hasNotification': hasNotification}">
  
  <img src="../../assets/discord.svg" v-if="isHome">
  <div class="mentions" v-if="mentions">{{mentions}}</div>
  </div>
</template>

<script>
export default {
    props: {
        selected: Boolean,
        isHome: Boolean,
        hasNotification: Boolean,
        mentions: Number
    }
};

</script>

<style scaped lang="scss">
.serverbutton{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    background-color: var(--primary);
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    transition: .2s;

    img{
        width: 24px;
        height: 24px;
        color: #fff;
    }


    &.active,
    &:hover {
        border-radius: 16px;
        background-color: var(--discord);
    }

    .mentions{
        background-color: var(--notification);
        width: auto;
        height: 24px;
        padding: 8 4px;
        position: absolute;
        bottom: -4px;
        right: -4px;
        border-radius: 12px;
        text-align: center;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);
        border:solid 4px var(--quaternary) ;
    }
}

.serverbutton-isHome{
    background-color: var(--rocketseat);

    &.active,
    &:hover {
        border-radius: 16px;
        background-color: var(--rocketseat);
    }
}

.serverbutton-hasNotification {
    &::before {
        content: "";
        width: 9px;
        height: 9px;
        background-color: var(--white);
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);
        border-radius: 50%;
        display: block;
    }
}
</style>