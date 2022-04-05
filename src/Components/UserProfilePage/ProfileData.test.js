import { render, screen } from '@testing-library/react';
import ProfileData from './ProfileData';

describe('Profile Data component', () => {
//   test('renders profile name', () => {
//     render(<ProfileData />);
//     const profileName = screen.getByText('عمرو أكا زيكا', { exact: false });
//     expect(profileName).toBeInTheDocument();
//   });
//   test('renders profile Bio', () => {
//     render(<ProfileData />);
//     const profileBio = screen.getByText('Al Ahly', { exact: false });
//     expect(profileBio).toBeInTheDocument();
//   });
//   test('renders profile email', () => {
//     render(<ProfileData />);
//     const profileEmail = screen.getByText('@Amr_Zaki2000', { exact: false });
//     expect(profileEmail).toBeInTheDocument();
//   });
//   test('renders profile Date', () => {
//     render(<ProfileData />);
//     const profileDate = screen.getByText('October', { exact: false });
//     expect(profileDate).toBeInTheDocument();
//   });
  test('renders edit profile button', () => {
    render(<ProfileData />);
    const profileEditButton = screen.getByText('Edit Profile');
    expect(profileEditButton).toBeInTheDocument();
  });
});