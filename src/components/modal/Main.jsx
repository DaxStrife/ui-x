const Main = ({ open = false, setOpen = () => {}, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999px]">
      <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 cursor-pointer" />
      <div className="bg-white rounded-lg shadow-lg mx-2 p-4 md:p-6 max-w-md md:max-w-4xl w-full relative">
        {children}
      </div>
    </div>
  );
};

export default Main;
