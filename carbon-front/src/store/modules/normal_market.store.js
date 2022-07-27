import { find } from "lodash-es";

export default {
  state: {
    cart: []
  },
  mutations: {
    addItem(state, item) {
      let existing_entry = find(state.cart, { item: { _id: item._id } });
      if (existing_entry) {
        existing_entry.count += 1;
      } else {
        state.cart.push({
          item,
          count: 1
        });
      }
    },
    removeItem(state, id) {
      for (let entry_idx in state.cart) {
        if (state.cart[entry_idx].item._id === id) {
          state.cart.splice(entry_idx, 1);
          break;
        }
      }
    }
  },
  actions: {
    cartAddItem({ commit }, item) {
      commit("addItem", item);
    },
    cartRemoveItem({ commit }, id) {
      commit("removeItem", id);
    }
  },
  namespaced: true
};
