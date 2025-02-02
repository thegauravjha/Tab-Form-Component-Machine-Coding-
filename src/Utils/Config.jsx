import Profile from '../Components/Profile';
import Interest from '../Components/Interest';
import Settings from '../Components/Settings';

export const tabs = [
  {
    name: 'Profile',
    component: Profile,
    validate: (data, setError) => {
      const err = {};
      if (!data.name || data.name.length <= 2) {
        err.name = 'Name is not valid';
      }
      if (!data.age || data.age <= 2) {
        err.age = 'Age is not valid';
      }
      if (!data.email || data.email.length <= 2 || !data.email.includes('@')) {
        err.email = 'Email is not valid';
      }
      setError(err);
      return err.name || err.age || err.email ? false : true;
    },
  },
  {
    name: 'Interest',
    component: Interest,
    validate: (data, setError) => {
      const err = {};
      if (!data.hobbies || data.hobbies.length < 1) {
        err.hobbies = 'Select at least one hobbie';
      }
      setError(err);
      return err.hobbies ? false : true;
    },
  },
  {
    name: 'Settings',
    component: Settings,
    validate: () => (true),
  },
];

export const initialData = {
  name: '',
  age: 0,
  email: '',
  hobbies: [],
  theme: '',
};
