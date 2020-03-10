import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 2rem;

  h1 {
    margin-bottom: 2rem;

    font-size: 1.5rem;
  }

  div {
    padding: 12px;
    width: 52.5rem;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 4px #00000029;

    input {
      border: none;
      margin-left: 27px;

      flex: 1;

      font-size: 1rem;
      background: transparent;
    }

    svg {
      margin-right: 7px;
    }
  }
`;
