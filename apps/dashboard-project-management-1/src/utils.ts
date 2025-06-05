/**
 * Convert HEX to RGB
 */
export const convertHex = (hex: string, opacity: number) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
};

export const setStatusClass = (status: string) => {
  console.log(status);
  
   switch (status) {
      case "In progress":
         return "before:border-[#DA932C]";
      case "Blocked":
         return "before:border-[#D65B4A]";
      case "Done":
         return "before:border-[#1C93ED]";
      default:
         return "before:border-[#66B92E]";
   }
}
