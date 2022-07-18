<template>

<div id="grid">
   <server-list />
   <serverName />
   <channelList />
   <userInfo/>
   <channelInfo/>
   <channelData />
   <userList/>
</div>

</template>

<script>
import serverList from './serverList';
import serverName from './serverName';
import channelList from './ChannelList';
import userInfo from './Userinfo';
import channelInfo from './channelInfo';
import channelData from './channelData';
import userList from './userList';

export default {
   components: {
    serverList,
    serverName,
    channelList,
    userInfo,
    channelInfo,
    channelData,
    userList
},
};
</script>

<style scoped>
#grid {
display: grid;
height: 100vh;
grid-template-columns: 71px 240px auto 240px;
grid-template-rows: 45px auto 52px;
grid-template-areas: 
     "SL SN CI CI"
     "SL CL CD UL"
     "SL UI CD UL"
;
}
</style>
