function Button({ title }) {
  const isImportant = !title.includes("Not");

  return (
    <button className={isImportant ? "important" : "not-important"}>
      {title}
    </button>
  );
}

export default Button;
