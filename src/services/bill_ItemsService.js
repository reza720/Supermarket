const {Bill_Items}=require("../models");

class Bill_ItemsService{
    async createBill_Items(data){
        return Bill_Items.create(data);
    }
    async getBill_Items(){
        return Bill_Items.findAll();
    }
    async getBill_ItemsById(id){
        const target=await Bill_Items.findByPk(id);
        if(!target){
            const err=new Error("Bill_Item not found");
            err.status=404;
            throw err;
        }
        return target;
    }
    async updateBill_Items(id,data){
        const bill_Items=await this.getBill_ItemsById(id);
        await bill_Items.update(data);
        return bill_Items;
    }
    async deleteBill_Items(id){
        const bill_Items=await this.getBill_ItemsById(id);
        await bill_Items.destroy();
        return {message:"Deleted"};
    }
}
module.exports= new Bill_ItemsService();