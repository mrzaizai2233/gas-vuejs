<template>
        <div class="col-footer ">
            <div class="col-footer_item col-footer_remove">
                <button class="flat-btn btn-danger"><i class="fa fa-trash-o fa-2x"></i></button>
            </div>
            <div class="col-footer_total col-footer_item">
                <span class="price">{{total | toVND}}</span>
            </div>
            <div class="col-footer_add col-footer_item">
                <button class="btn-success flat-btn" @click="submit()"><i class="fa fa-plus fa-2x"></i></button>
            </div>
        </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OrderFooter",
  data() {
    return {
      userSelected: {}
      // users:[
      //     {name:"ba thin",_id:1,code:"kh1",phone:"123"},
      //     {name:"ba thin",_id:2,code:"kh1",phone:"123"},
      //     {name:"ba thin",_id:3,code:"kh1",phone:"123"},
      //     {name:"ba thin",_id:4,code:"kh1",phone:"123"}
      // ]
    };
  },
  methods: {
    ...mapActions("order", ["changeItem", "removeItem"]),
    ...mapActions("user", ["getAllUser"]),
    submit: function() {
      console.log(this.order);
    },
  
  },
  computed: {
    ...mapGetters("order", ["items", "order", "total"]),
    ...mapGetters("product", ["products"]),
    ...mapGetters("user", ["users"]),
    hasItems: function() {
      if (this.items.length > 0) return 1;
      else return 0;
    }
  },
  watch: {},
  filters: {
    toVND(value) {
      return `${value.toLocaleString()} VNĐ`;
    }
  },
  created() {
    if (this.users.length <= 0) {
      this.getAllUser();
    }
  }
};
</script>
<style scoped>
/* footer */
.col-footer {
  display: flex;
}

@media only screen and (max-width: 959px) {
  .wrap-col-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
  }
  .col-footer {
    flex: 1;
  }
}
.flat-btn {
  width: 100%;
  border-radius: 0;
  border: none;
  padding: 10px;
  outline: none;
}

.col-footer {
  display: flex;
  
}

.col-footer .col-footer_total {
  flex: 2;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff9900 !important;
    color: white;
    
}

.col-footer .col-footer_total .price {
  font-weight: bold;
  font-size: 20px;
  color:white;
}

.col-footer .col-footer_add {
  flex: 1;
  background: #181b46;
}

.col-footer .col-footer_add button {
  background: #181b46;
}
.col-footer .col-footer_remove {
  flex: 1;
  background: white;
  color:black;
}
</style>
