import * as React from 'react';

interface Props {
    artistId: string;
    imageUri: string;
    title: string;
}

const Hit: React.FC<Props> = ({ artistId, imageUri, title }) => {
  const test = 'test';
  return (
    (
      <div
        style={{ width: 250 }}
      >
        <p>{title}</p>
        <img
          style={{
            width: 210,
          }}
          src={imageUri}
          alt="test"
        />
      </div>
    )
  );
};


export default Hit;
