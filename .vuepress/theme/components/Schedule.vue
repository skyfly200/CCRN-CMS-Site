<template>
  <iframe :src="'https://calendar.google.com/calendar/embed?title=Upcoming%20Shows&amp;showNav=0&amp;showDate=0&amp;showTabs=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;mode=AGENDA&amp;' + schedule + '&amp;ctz=America%2FDenver'" style="border-width:0" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
</template>
<script>
export default {
  props: ["schedule"]
};
</script>
<style>
</style>
