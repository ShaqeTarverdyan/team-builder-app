import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  border-radius: 0.7rem;
  padding: 0 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  padding: 7rem;
  margin: 4rem auto;
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-column-gap: 1rem;
`;

export const Label = styled.label`
  padding: 0 1rem;
    color: var(--color-text);
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.5rem;
`;


export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 0 2rem;
  margin: 0 auto
`;

export const Empty = styled.div`
  font-size: 20px;
  text-align: center;
  color: var(--color-text)
`

export const H2 = styled.h2`
  color: var(--color-text);
  padding: 3rem 0;
  font-size: 27px;
  text-align: center;
`;
