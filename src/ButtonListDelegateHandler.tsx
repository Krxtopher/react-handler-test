import { MouseEvent } from "react";
import { SpaceBetween } from "@cloudscape-design/components";

interface Props {
  items: Array<{ id: number }>;
}

export function ButtonListDelegateHandler({ items }: Props) {
  function handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const buttonId = target.dataset.buttonId;
    console.log("delegate button ID", buttonId);
  }

  return (
    <>
      <h3>Delegate handler</h3>
      <p>
        These <strong>{items.length}</strong> buttons reference a single
        delegate function. Note, we're using a regular HTML button since
        Cloudscape buttons are not compatible with a delegate function approach.
      </p>

      <SpaceBetween size="s">
        {items.map((item) => {
          return (
            <button
              key={item.id}
              data-button-id={item.id}
              onClick={handleClick}
            >
              Delegate Button {item.id}
            </button>
          );
        })}
      </SpaceBetween>
    </>
  );
}
