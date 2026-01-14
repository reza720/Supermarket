const {Product}=require("../models");

class ProductService{
    async createProduct(data){
        return Product.create(data);
    }
    async getProducts(){
        return Product.findAll();
    }
    async getProductById(id){
        const target=await Product.findByPk(id);
        if(!target){
            const err=new Error("Product not found");
            err.status=404;
            throw err;
        }
        return target;
    }
    async updateProduct(id,data){
        const product=await this.getProductById(id);
        await product.update(data);
        return product;
    }
    async deleteProduct(id){
        const product=await this.getProductById(id);
        await product.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new ProductService();
