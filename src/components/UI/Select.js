import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

const StyledSelect = styled.select`
	padding: 1.2rem 2rem;
  width: 100%;
  background-color: var(--color-main);
  color: var(--color-white);
  font-weight: 500;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid var(--color-white);
  &::placeholder {
    color: var(--color-white);
    opacity: 0.5
  }
`;

const StyledErrorMessage = styled.div


 const Select = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <>
       <StyledSelect {...field} {...props} />
       {meta.touched && meta.error ? (
         <StyledErrorMessage>{meta.error}</StyledErrorMessage>
       ) : null}
     </>
   );
 };
export default Select

