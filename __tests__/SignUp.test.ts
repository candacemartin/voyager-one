import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { SignUp } from '../client/src/components/SignUp';

describe('SignUp component', () => {
  it('renders correctly', () => {
    render(<SignUp />);
    const signUpElement = getByText('sign up');
    expect(signUpElement).toBeInTheDocument();
  });

  it('submits the form', async () => {
    const { getByLabelText, getByText } = render(<SignUp />);
    const firstNameInput = getByLabelText('first name');
    const lastNameInput = getByLabelText('last name');
    const emailInput = getByLabelText('email address');
    const passwordInput = getByLabelText('password');
    const submitButton = getByText('sign up');

    fireEvent.change(firstNameInput, { target: { value: 'Abe' } });
    fireEvent.change(lastNameInput, { target: { value: 'Lincoln' } });
    fireEvent.change(emailInput, { target: { value: 'abe.lincoln@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'pass123' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      // tk post-form submissions assertions here
    });
  });
});
