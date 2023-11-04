import "./Toast.css";
import { Button, IconButton, Text } from "@radix-ui/themes";
import * as Toast from "@radix-ui/react-toast";
import { X } from "@phosphor-icons/react";
import * as React from "react";

export default function ToastMessage({trigger, triggerFunction ,content }) {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Button
        variant="ghost"
        size={"3"}
        radius="full"
        onClick={() => {
            triggerFunction();
          setOpen(false);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        {trigger}

      </Button>

      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Description asChild>
          <Text>{content}</Text>
        </Toast.Description>
        <Toast.Close asChild>
          <IconButton variant="ghost" radius="medium">
            <X size="1rem" />
          </IconButton>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
}