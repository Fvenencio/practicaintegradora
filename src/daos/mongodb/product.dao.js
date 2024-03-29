import { ProductModel } from './models/product.model.js';

export default class ProductDaoMongoDB {
    async getAll() {
        try {
            const response = await ProductModel.find({});
            return response;
        }catch (error){
            console.log(error);
        };
    };

    async getById(id) {
        try{
            const response = await ProductModel.find(id);
            return response;
        }catch(error){
            console.log(error);
        };
    };

    async create(obj) {
        try{
            const response = await ProductModel(obj);
            return response;
        }catch(error){
            console.log(error);
        };
    };

    async update(id, obj) {
        try{
            const response = await ProductModel.findByIdAndUpdate(
                {_id: id},
                obj,
                {new: true}
            );
            return response;
        }catch(error){
            console.log(error);
        };
    };

    async delente(id) {
        try{
            const response = await ProductModel.findByIdAndDelete(id);
            return response;
        }catch(error){
            console.log(error);
        };
    };
};

