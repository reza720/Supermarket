const {Customer}=require("../models");

class CustomerService{
    async createCustomer(data){
        return Customer.create(data);
    }
    async getCustomers(){
        return Customer.findAll();
    }
    async getCustomerById(id){
        const target=await Customer.findByPk(id);
        if(!target){
            const err= new Error("Customer not found");
            err.status=404;
            throw err;

        }
        return target;
    }
    async updateCustomer(id,data){
        const customer=await this.getCustomerById(id);
        await customer.update(data);
        return customer;
    }
    async deleteCustomer(id){
        const customer=await this.getCustomerById(id);
        await customer.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new CustomerService();