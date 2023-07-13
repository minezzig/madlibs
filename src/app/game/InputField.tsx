type InputFieldProps = {
  words: { [key: string]: string };
  handleChange: any;
  input: string;
};

function InputField({ words, handleChange, input }: InputFieldProps) {
  return (
    <>
      <label htmlFor={input}>{input}</label>
      <input
        type="text"
        name={input}
        value={words[input]}
        onChange={handleChange}
      />
      <br />
    </>
  );
}

export default InputField;
