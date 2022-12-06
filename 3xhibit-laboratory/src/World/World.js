export const World = () => {
  return (
    <>
      <color attach='background' args={['#131313']} />
      <mesh>
        <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
        <meshBasicMaterial attach='material' color='hotpink' />
      </mesh>
    </>
  );
};
