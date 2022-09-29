export default function FormRoundedInput({
  type,
  required,
  placeholder,
  name,
  disabled,
  value,
}) {
  return (
    <input
      className="w-full border-2 border-gray-300 rounded-full px-4 py-2"
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
  );
}
