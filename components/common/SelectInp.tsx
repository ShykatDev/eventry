import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectOptionsType } from "@/types/dataTypes";

const SelectInp = ({
  options,
  placeholder,
}: {
  options: SelectOptionsType;
  placeholder?: string;
}) => {
  return (
    <Select>
      <SelectTrigger className="w-full inputBox">
        <SelectValue placeholder={placeholder ?? "Type"} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item, index) => {
          return (
            <SelectItem key={item.label + index} value={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectInp;
