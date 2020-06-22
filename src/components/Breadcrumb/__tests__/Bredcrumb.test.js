import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Bredcrumb from '../index';

const breadcrumbId = 'bredcrumb-component';

const phoneCategory = {
  name: 'Phone',
  id: 'phone-1',
};

const notbookCategory = {
  name: 'notbook',
  id: 'notbook',
};

const buildComponent = ({ categories }) => render(<Bredcrumb categories={categories} />);

describe('Bredcrumb component', () => {
  it('should render component', () => {
    const categories = [];

    const { getByTestId } = buildComponent({ categories });

    expect(getByTestId(breadcrumbId)).toBeInTheDocument();
  });

  it('should render category list when categories property has value', () => {
    const categories = [phoneCategory, notbookCategory];

    const { getByTestId } = buildComponent({ categories });

    expect(getByTestId(phoneCategory.id)).toBeInTheDocument();
    expect(getByTestId(notbookCategory.id)).toBeInTheDocument();
    expect(getByTestId(breadcrumbId).childElementCount).toBe(2);
  });

  it('should not render category list when categories property is empty', () => {
    const categories = [];

    const { getByTestId } = buildComponent({ categories });

    expect(getByTestId(breadcrumbId).childElementCount).toBe(0);
  });
});
