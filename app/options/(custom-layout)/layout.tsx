export default function CustomOptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col items-center bg-black/20 backdrop-blur-sm">
      {children}
    </div>
  );
}
