"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModel = void 0;
const Database_1 = require("../Database");
class ImageModel {
    constructor() {
        this.collectionName = 'category';
        this.connect = new Database_1.MongoDB();
        // async createCategory(category: ICategory): Promise<ObjectId> {
        //     const collection: Collection = await this.connect.client<ICategory>(this.collectionName);
        //     const newCategory = await collection.insertOne(category).finally(this.connect.closeConnection());
        //     return newCategory.insertedId;
        // }
        //
        // async getAllCategory(): Promise<any> {
        //     const collection: Collection = await this.connect.client<ICategory>(this.collectionName);
        //     return await collection.find().toArray().finally(this.connect.closeConnection());
        // }
        //
        // async getCategoryById(categoryId: ObjectId): Promise<any> {
        //     const collection: Collection = await this.connect.client<ICategory>(this.collectionName);
        //     return await collection.find({_id: categoryId}).toArray().finally(this.connect.closeConnection());
        // }
        //
        // async getCategoryProducts(Category_name: string): Promise<any> {
        //     const collection: Collection = await this.connect.client<ICategory>('products');
        //     return await collection.find({category_name: Category_name}).toArray().finally(this.connect.closeConnection());
        // }
        //
        // async editCategory(id: ObjectId, category: ICategory): Promise<any> {
        //     const collection: Collection = await this.connect.client<ICategory>(this.collectionName);
        //     const newCategory = await collection.updateMany({_id: id}, {$set: category}).finally(this.connect.closeConnection());
        //     return newCategory.upsertedId;
        // }
        //
        // async deleteCategory(CategoryId: ObjectId): Promise<any> {
        //     const collection: Collection = await this.connect.client<ICategory>(this.collectionName);
        //     return await collection.deleteOne({_id: CategoryId}).finally(this.connect.closeConnection());
        // }
    }
}
exports.ImageModel = ImageModel;
