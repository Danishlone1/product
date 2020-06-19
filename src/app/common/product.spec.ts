import { Products } from './product';
describe('Products', () => {
  it('should create an instance', () => {
    expect(new Products(1, 'Laptop', 'Available')).toBeTruthy();
  });
});
