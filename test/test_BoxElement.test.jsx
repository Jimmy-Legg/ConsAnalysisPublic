import { render, screen } from '@testing-library/react';
import ExtractionHTML from '../src/BoxElement';

describe('ExtractionHTML', () => {
  it('renders the component correctly', () => {
    render(
      <ExtractionHTML
        nomCategorie="Category"
        closeModal={() => {}}
        topText="Top Text"
        nombre="Numbqer"
        limit="Limit"
        surNombre="Sur Number"
        nomValeur="Nom Valeur"
        info="Info"
        infoVal="Info Value"
        info1="Info 1"
        infoVal1="Info Value 1"
      />
    );

    // Assert that the component renders without any errors
    expect(screen.getByText('← Category')).toBeInTheDocument();
    expect(screen.getByText('Top Text')).toBeInTheDocument();
    expect(screen.getByText('Number')).toBeInTheDocument();
    expect(screen.getByText('LimitSur Number')).toBeInTheDocument();
    expect(screen.getByText('Nom Valeur')).toBeInTheDocument();
    expect(screen.getByText('Info')).toBeInTheDocument();
    expect(screen.getByText('Info Value')).toBeInTheDocument();
    expect(screen.getByText('Info 1')).toBeInTheDocument();
    expect(screen.getByText('Info Value 1')).toBeInTheDocument();
    expect(screen.getByText('Extraire')).toBeInTheDocument();
  });

  // Add more test cases as needed
});