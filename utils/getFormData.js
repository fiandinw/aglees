export default function getFormData(e) {
  return Object.fromEntries(new FormData(e.target));
}
