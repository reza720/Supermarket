const {Bill}=require("../models");

class BillService{
    async createBill(data){
        return Bill.create(data);
    }
    async getBills(){
        return Bill.findAll();
    }
    async getBillById(id){
        const target=await Bill.findByPk(id);
        if(!target){
            const err=new Error("Bill not found");
            err.status=404;
            throw err;
        }
        return target;
    }
    async updateBill(id,data){
        const bill=await this.getBillById(id);
        await bill.update(data);
        return bill;
    }
    async deleteBill(id){
        const bill=await this.getBillById(id);
        await bill.destroy();
        return {message:"Deleted"};
    }
}
module.exports= new BillService();