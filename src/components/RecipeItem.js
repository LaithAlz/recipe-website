const RecipeItem = ({recipe}) => {
    const {name, ingredients, cookTime, prepTime, id} = recipe
    return ( <div className="recipe-item">
        {name}
    </div> );
}
 
export default RecipeItem;