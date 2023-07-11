import {Ingredient, IIngredient} from "../model/ingredientModel"

export const create = async(data: IIngredient) => {
    try {
        const newIngredient = new Ingredient(data)
        if(newIngredient){
            return await newIngredient.save()
        }
    }catch(e){
        throw new Error("Error on creating ingredients")
    }
}