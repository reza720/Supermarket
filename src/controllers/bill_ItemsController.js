const {Bill_ItemsService}=require("../services");

class Bill_ItemsController{
    static async createBill_Items(req,res,next){
        try{
            const bill_Items=await Bill_ItemsService.createBill_Items(req.body);
            res.status(201).json({success:true, data:bill_Items});
        }
        catch(error){
            next(error);
        }
    }
    static async getBill_Items(req,res,next){
        try{
            const bill_Items=await Bill_ItemsService.getBill_Items();
            res.status(200).json({success:true, data:bill_Items});
        }
        catch(error){
            next(error);
        }
    }
    static async getBill_ItemsById(req,res,next){
        try{
            const bill_Items=await Bill_ItemsService.getBill_ItemsById(req.params.id);
            res.status(200).json({success:true, data:bill_Items});
        }
        catch(error){
            next(error);
        }
    }
    static async updateBill_Items(req,res,next){
        try{
            const bill_Items=await Bill_ItemsService.updateBill_Items(req.params.id,req.body);
            res.status(200).json({success:true, data:bill_Items});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteBill_Items(req,res,next){
        try{
            await Bill_ItemsService.deleteBill_Items(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=Bill_ItemsController;