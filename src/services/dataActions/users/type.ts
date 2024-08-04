type Address = {
  city: string;
  street: string;
  number: number;
  zipcode: number;
  geolocation: {
    lat: number;
    long: number;
  };
};

export interface IUser {
  id: number;
  phone: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  password: string;
  email: string;
  address: Address;
}
