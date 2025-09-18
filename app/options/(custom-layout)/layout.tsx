export default function CustomOptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-screen bg-black/20 backdrop-blur-sm">
      {children}
    </div>
  );
}
