import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* background-color: rgba(170, 170, 170, 0.1); */
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
`;

export const CommentWrapper = styled.div`
  padding: 10px 0 10px 10px;
  margin: 8px 0 8px 8px;
  border-left: 3px solid #6699ffaa;
`;

export const CommentHeader = styled.div`
  display: flex;
  padding-right: 8px;
  justify-content: space-between;
  div {
    display: flex;
  }
`;

export const CommentAuthor = styled.div`
  font-weight: bold;
  margin-right: 10px;
  color: #6699ff;
`;
export const CommentContent = styled.div`
  color: #333;
`;
export const CommentActionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 5px;
    padding: 5px 8px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    color: #6699ff;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #6699ff33;
    }
  }
  .likes {
    margin-right: 5px;
    font-size: 1rem;
    color: red;
  }
`;

export const InputWrapper = styled.form`
  display: flex;
  width: 80%;
  input {
    flex: 1;
    border: 1px solid #ccc;
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgb(170, 170, 170);
    }
  }

  button {
    padding: 5px 8px;
    border-radius: 5px;
    text-decoration: none;
    color: #6699ff;
    font-size: 1rem;
    margin-left: 4px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: #6699ff11;
    }
  }
`;
