const {CustomerService}=require("../services");

class CustomerController{
    static async createCustomer(req,res,next){
        try{
            const customer=await CustomerService.createCustomer(req.body);
            res.status(201).json({success:true, data:customer});
        }
        catch(error){
            next(error);
        }
    }   
    static async getCustomers(req,res,next){
        try{
            const customer=await CustomerService.getCustomers();
            res.status(200).json({success:true, data:customer});
        }
        catch(error){
            next(error);
        }
    }
    static async getCustomerById(req,res,next){
        try{
            const customer=await CustomerService.getCustomerById(req.params.id);
            res.status(200).json({success:true, data:customer});
        }
        catch(error){
            next(error);
        }
    }
    static async updateCustomer(req,res,next){
        try{
            const customer=await CustomerService.updateCustomer(req.params.id,req.body);
            res.status(200).json({success:true, data:customer});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteCustomer(req,res,next){
        try{
            await CustomerService.deleteCustomer(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=CustomerController;