import { SpaceBetween } from "@cloudscape-design/components";

interface Props {
  items: Array<{ id: number }>;
}

export function ButtonListClosureHandlers({ items }: Props) {
  function handleClick(buttonId: number) {
    console.log("closure button ID", buttonId);
  }

  return (
    <>
      <h3>Closure handlers</h3>
      <p>
        These <strong>{items.length}</strong> buttons have each been assigned a
        unique arrow function as their onClick handler.
      </p>

      <SpaceBetween size="s">
        {items.map((item) => {
          return (
            <button key={item.id} onClick={() => handleClick(item.id)}>
              Closure Button {item.id}
            </button>
          );
        })}
      </SpaceBetween>
    </>
  );
}
