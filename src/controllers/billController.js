const {BillService}=require("../services");

class BillController{
    static async createBill(req,res,next){
        try{
            const bill=await BillService.createBill(req.body);
            res.status(201).json({success:true, data:bill});
        }
        catch(error){
            next(error);   
        }
    }
    static async getBills(req,res,next){
        try{
            const bills=await BillService.getBills();
            res.status(200).json({success:true, data:bills});
        }
        catch(error){
            next(error);
        }
    }
    static async getBillById(req,res,next){
        try{
            const bill=await BillService.getBillById(req.params.id);
            res.status(200).json({success:true, data:bill});
        }
        catch(error){
            next(error);
        }
    }
    static async updateBill(req,res,next){
        try{
            const bill=await BillService.updateBill(req.params.id,req.body);
            res.status(200).json({success:true, data:bill});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteBill(req,res,next){
        try{
            await BillService.deleteBill(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=BillController;