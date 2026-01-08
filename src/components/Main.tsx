import { useState } from "react";
import styled from "styled-components";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromAI } from "../ai";
import Loader from "./Loader";

const MainContainer = styled.div`
  padding: 30px 30px 10px;
`;

const AddIngredientForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 12px;
  height: 38px;

  > input {
    border-radius: 6px;
    border: 1px solid #d1d5db;
    padding: 9px 13px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    flex-grow: 1;
    min-width: 150px;
    max-width: 400px;
  }

  > button {
    font-family: Inter, sans-serif;
    border-radius: 6px;
    background-color: #141413;
    color: #fafaf8;
    width: 150px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  > button::before {
    content: "+";
    margin-right: 5px;
  }
`;

function Main() {
  const [ingredients, setIngredient] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient && typeof newIngredient === "string") {
      setIngredient((i) => [...i, newIngredient]);
    }
  }

  async function getRecipe() {
    setIsLoading(true);
    const recipe = await getRecipeFromAI(ingredients);
    if (recipe) setRecipe(recipe);
    setIsLoading(false);
  }

  return (
    <MainContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AddIngredientForm action={addIngredient}>
            <input
              aria-label="Add ingredient"
              type="text"
              placeholder="e.g. oregano"
              name="ingredient"
            />
            <button>Add ingredient</button>
          </AddIngredientForm>
          {ingredients.length > 0 && (
            <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
          )}
          {recipe && <ClaudeRecipe recipe={recipe} />}
        </>
      )}
    </MainContainer>
  );
}

export default Main;
