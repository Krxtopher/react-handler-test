import { SpaceBetween } from "@cloudscape-design/components";

interface Props {
  items: Array<{ id: number }>;
}

export function ButtonListNoHandlers({ items }: Props) {
  return (
    <>
      <h3>No handlers</h3>
      <p>
        These buttons <strong>{items.length}</strong> have no event handlers
        assigned.
      </p>

      <SpaceBetween size="s">
        {items.map((item) => {
          return <button key={item.id}>No Handler Button {item.id}</button>;
        })}
      </SpaceBetween>
    </>
  );
}
