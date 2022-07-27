<template>
  <div>
    <div style="height:auto;width:100vw;background:#fff;position:relative">
      <div
        style="text-align:left;margin-left:5vw;margin-top:2vw;padding:3vw 0 0 0;font-size:4.5vw;font-weight:bold;color:#202020"
      >
        可用卡券
      </div>
      <div style="width:100vw;height:auto;background:#fff">
        <div v-for="item in valid_tickets" :item="item" :key="item._id">
          <Ticket :ticket="item" />
        </div>
      </div>
    </div>
    <div style="height:1.5vw;background:#fff;width:100vw" />
    <div
      style="height:auto;margin-bottom:5vw;width:100vw;background:#fff;position:relative"
    >
      <div
        style="text-align:left;margin-left:5vw;margin-top:2vw;padding:3vw 0 0 0;font-size:4.5vw;font-weight:bold;color:#202020"
      >
        已失效
      </div>
      <div style="width:100vw;height:auto;background:#fff">
        <div v-for="item in invalid_tickets" :item="item" :key="item._id">
          <Ticket :ticket="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ticket from "../../../components/market/exchange/Ticket";
import { mapState } from "vuex";
export default {
  components: {
    Ticket
  },
  mounted() {
    this.$store.dispatch("exchange_market/loadTickets");
  },
  computed: {
    valid_tickets() {
      return this.tickets.filter(t => t.valid);
    },
    invalid_tickets() {
      return this.tickets.filter(t => !t.valid);
    },
    ...mapState({
      tickets: state => state.exchange_market.myTickets
    })
  }
};
</script>

<style></style>
