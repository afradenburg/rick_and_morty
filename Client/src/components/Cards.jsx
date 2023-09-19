import Card from "./Card";

export default function Cards({ characters, onClose, isActiveButtons }) {
  return (
    <div>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={onClose}
          isActiveButtons={isActiveButtons}  
        />
      ))}
    </div>
  );
}
