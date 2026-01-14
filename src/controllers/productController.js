const {ProductService}=require("../services");

class ProductController{
    static async createProduct(req,res,next){
        try{
            const product=await ProductService.createProduct(req.body);
            res.status(201).json({success:true, data:product});
        }
        catch(error){
            next(error);
        }
    }
    static async getProducts(req,res,next){
        try{
            const products=await ProductService.getProducts();
            res.status(200).json({success:true, data:products});
        }
        catch(error){
            next(error);
        }
    }
    static async getProductById(req,res,next){
        try{
            const product=await ProductService.getProductById(req.params.id);
            res.status(200).json({success:true, data:product});
        }
        catch(error){
            next(error);
        }
    }
    static async updateProduct(req,res,next){
        try{
            const product=await ProductService.updateProduct(req.params.id,req.body);
            res.status(200).json({success:true,data:product});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteProduct(req,res,next){
        try{
            await ProductService.deleteProduct(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=ProductController;