export default function Spinner() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-green-500 border-t-transparent" />
    </div>
  );
}