import styled from "styled-components";

const IngredientsSection = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 48px 20px;

  > h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  > ul {
    list-style-position: inside;
  }

  > ul > li {
    color: #475467;
    line-height: 28px;
    font-size: 18px;
  }
`;

const GetRecipeSection = styled.div`
  background-color: rgba(240, 239, 235, 1);
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 42px;
  border-radius: 8px;

  > div > h5 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  > div > p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(107, 114, 128, 1);
  }

  > button {
    background-color: rgba(209, 117, 87, 1);
    color: rgba(250, 250, 248, 1);
    padding: 9px 17px;
    border-radius: 6px;
    border: none;
  }
`;

interface IngredientsListProps {
  ingredients: string[];
  getRecipe: () => void;
}

function IngredientsList(props: IngredientsListProps) {
  return (
    <>
      <IngredientsSection>
        <h2>Ingredients on hand:</h2>
        <ul>
          {props.ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </IngredientsSection>
      {props.ingredients.length > 1 && (
        <GetRecipeSection>
          <div>
            <h5>Ready for a recipe?</h5>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </GetRecipeSection>
      )}
    </>
  );
}

export default IngredientsList;
