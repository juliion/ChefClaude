import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ClaudeRecipeSection = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 48px 20px;

  > h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;

const SuggestedRecipeContainer = styled.div`
  color: #475467;
  line-height: 28px;
  font-size: 18px;

  > ul,
  ol {
    list-style-position: inside;
  }
  > ul li,
  ol li {
    margin-bottom: 8px;
  }
`;

interface ClaudeRecipeProps {
  recipe: string;
}

function ClaudeRecipe(props: ClaudeRecipeProps) {
  return (
    <ClaudeRecipeSection>
      <h2>AI Recommends:</h2>
      <SuggestedRecipeContainer>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </SuggestedRecipeContainer>
    </ClaudeRecipeSection>
  );
}

export default ClaudeRecipe;
