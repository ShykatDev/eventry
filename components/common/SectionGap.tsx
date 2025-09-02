const SectionGap = () => {
  return (
    <div className="overflow-hidden h-8 w-full border-b flex items-center justify-between">
      {[...Array(110)].map((_, index) => (
        <div
          key={index}
          className="h-14 w-[1px] bg-border rotate-45 origin-left -mt-2"
        ></div>
      ))}
    </div>
  );
};

export default SectionGap;
