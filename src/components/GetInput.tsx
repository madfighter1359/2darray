interface Props {
  onSubmit: (val: string) => void;
}

export default function GetInput({ onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const val = formData.get("value");
    onSubmit(val as string);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="value"></input>
      <button type="submit">Ok</button>
    </form>
  );
}
