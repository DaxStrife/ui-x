import cn from "@/utils/cn";

export const Table = ({ className = "", children, ...props }) => {
  return (
    <table {...props} className={cn(`w-full text-sm text-left rtl:text-right text-slate-200 ${className}`)}>
      {children}
    </table>
  );
};

export const Thead = ({ className = "", children, ...props }) => {
  return (
    <thead {...props} className={cn(`bg-slate-700 text-slate-200 ${className}`)}>
      {children}
    </thead>
  );
};

export const Th = ({ className = "", children, ...props }) => {
  return (
    <th {...props} className={cn(`px-6 py-3 uppercase ${className}`)}>
      {children}
    </th>
  );
};

export const Tr = ({ className = "", children, ...props }) => {
  return (
    <tr {...props} className={cn(`bg-slate-800 ${className}`)}>
      {children}
    </tr>
  );
};

export const Td = ({ className = "", children, ...props }) => {
  return (
    <td {...props} className={cn(`px-6 py-4 ${className}`)}>
      {children}
    </td>
  );
};

export const Tbody = ({ className = "", children, ...props }) => {
  return (
    <tbody {...props} className={cn(`divide-y divide-gray-700 ${className}`)}>
      {children}
    </tbody>
  );
};
