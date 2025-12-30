import { useForm } from "react-hook-form";
import type { Department } from "../../types";
import Button from "../ui/Button";

interface Props {
  department: Department;
  onSave: (data: Department) => void;
  onCancel: () => void;
}

export default function DepartmentEdit({
  department,
  onSave,
  onCancel,
}: Props) {
  const { register, handleSubmit } = useForm<Department>({
    defaultValues: department,
  });

  // دالة لحذف __typename recursively
  const removeTypename = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(removeTypename);
    } else if (obj !== null && typeof obj === "object") {
      const newObj: any = {};
      for (const key in obj) {
        if (key !== "__typename") {
          newObj[key] = removeTypename(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  };

  const submitHandler = (data: Department) => {
    const cleanedData = removeTypename(data);
    onSave(cleanedData);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6"
    >
      <h2 className="text-xl font-bold">Edit Department</h2>

      <div className="grid grid-cols-2 gap-4">
        <Input label="Name" {...register("name", { required: true })} />
        <Input label="Code" type="number" {...register("code")} />
        <Input label="Manager" {...register("manager")} />
        <Input label="Location" {...register("location")} />
      </div>

      <div>
        <label className="text-sm text-gray-500">Description</label>
        <textarea
          {...register("description")}
          className="w-full mt-1 p-3 border rounded-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input label="Arabic Name" {...register("localization.name")} />
        <Input
          label="Arabic Description"
          {...register("localization.description")}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" text="Save" />
        <Button type="button" onClick={onCancel} text="Cancel" />
      </div>
    </form>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-500">{label}</label>
      <input {...props} className="mt-1 p-3 border rounded-lg" />
    </div>
  );
}
