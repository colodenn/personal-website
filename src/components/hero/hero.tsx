export const Hero = (props: { children?: React.ReactNode }) => {
  return (
    <div className="justify-left  container mx-auto flex w-full max-w-4xl">
      <div>{props.children}</div>
    </div>
  );
};
