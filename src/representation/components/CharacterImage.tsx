import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import Skelaton from './Skelaton';

type CharacterImageProps = {
  src?: string;
  alt?: string;
  loading: boolean;
};

const CharacterImage: React.FC<CharacterImageProps> = ({ src, alt, loading }) => {
  if (loading) {
    return (
      <Skelaton height={100} width={300}/>
    );
  }

  if (!src) {
    return (
      <figure className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center py-5 rounded">
        <ExclamationTriangleIcon className="mx-auto mb-4 h-16 w-16 text-red-500" aria-hidden="true" />
        <figcaption>Erro ao carregar imagem.</figcaption>
      </figure>
    );
  }

  return (
    <img
      src={src}
      alt={alt ?? 'Imagem do personagem'}
      className="h-auto rounded"
    />
  );
};

export default CharacterImage;
